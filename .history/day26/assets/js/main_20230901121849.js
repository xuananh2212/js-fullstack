const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnToggle = $(".btn-toggle");
const btnPrev = $(".btn-prev");
const btnNext = $(".btn-next");
const btnRandom = $(".btn-random");
const audio = $("audio");
const currentTime = $(".current-time");
const durationTime = $(".duration-time");
const progress = $(".progress");
const progressBar = $(".progress-bar");
const progressDot = $(".progress-dot");
var flag = false;
btnToggle.addEventListener("click", function (e) {
  const iconToggle = btnToggle.firstElementChild;
  if (iconToggle.classList.contains("fa-play")) {
    audio.play();
    iconToggle.classList.remove("fa-play");
    iconToggle.classList.add("fa-pause");
  } else {
    audio.pause();
    iconToggle.classList.add("fa-play");
    iconToggle.classList.remove("fa-pause");
  }
});

progressBar.addEventListener("click", function (e) {
  console.log(e.pageX);
  console.log(progressBar.offsetLeft);
  if (
    e.pageX > progressBar.offsetLeft &&
    e.pageX - progressBar.offsetLeft <= progressBar.offsetWidth
  ) {
    var progressPercent =
      ((e.pageX - progressBar.offsetLeft) / progressBar.offsetWidth) * 100;
    progress.style.width = `${progressPercent}%`;
    audio.currentTime = (progressPercent * audio.duration) / 100;
  }
});

progressDot.addEventListener("mousedown", function (e) {
  flag = true;
});
document.addEventListener("mousemove", function (e) {
  if (flag) {
    if (
      e.pageX > progressBar.offsetLeft &&
      e.pageX - progressBar.offsetLeft <= progressBar.offsetWidth
    ) {
      var progressPercent =
        ((e.pageX - progressBar.offsetLeft) / progressBar.offsetWidth) * 100;
      progress.style.width = `${progressPercent}%`;
      audio.currentTime = (progressPercent * audio.duration) / 100;
    }
  }
});
document.addEventListener("mouseup", function (e) {
  flag = false;
});
var getTime = function (second) {
  var min = Math.floor(second / 60);
  second = Math.floor(second - min * 60);
  return `${min}:${second > 10 ? second : "0" + second}`;
};
audio.addEventListener("loadeddata", function (e) {
  durationTime.innerHTML = getTime(audio.duration);
});
audio.addEventListener("timeupdate", function (e) {
  currentTime.innerHTML = getTime(this.currentTime);
  progress.style.width = `${(this.currentTime / audio.duration) * 100}%`;
});
