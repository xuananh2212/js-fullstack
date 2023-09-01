const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnToggle = $(".btn-toggle");
const btnPrev = $(".btn-prev");
const btnNext = $(".btn-next");
const btnRandom = $(".btn-random");
const audio = $("audio");

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
var getTime = function (second) {
  var min = Math.floor(second / 60);
  second = Math.floor(second - min * 60);
  return `${min}:${second > 10 ? second : "0" + second}`;
};
audio.addEventListener("
