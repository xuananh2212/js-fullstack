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
const iconToggle = $(".btn-toggle .icon-toggle");
const cdThumb = $(".cd-thumb");
const playListInner = $(".play-list-inner");
const currentName = $("h2");
const currentImg = $(".cd-thumb img");
var flag = false;
var index = 0;

// danh sách các bài hát

const songs = [
  {
    nameSong: "Anh Sai Rồi",
    path: "./assets/imgs/Anh-Sai-Roi-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/anh-sai-roi.jpg",
    view: "43,000,000",
    durationTime: "5:02",
  },
  {
    nameSong: "Chúng Ta của Hện Tại",
    path: "./assets/imgs/Chung-Ta-Cua-Hien-Tai-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/chung-ta-cua-hien-tai.jpg",
    view: "43,000,000",
    durationTime: "5:02",
  },
  {
    nameSong: "Lạc Trôi",
    path: "./assets/imgs/Lac-Troi-Masew-Mix-Son-Tung-M-TP-Masew.mp3",
    img: "./assets/imgs/lac-troi.jpg",
    view: "43,000,000",
    durationTime: "5:02",
  },
  {
    nameSong: "Em Của Ngày Hôm Qua",
    path: "./assets/imgs/Anh-Sai-Roi-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/em-cua-ngay-hom-qua.jpg",
    view: "43,000,000",
    durationTime: "5:02",
  },
  {
    nameSong: "Chạy Ngay Đi",
    path: "./assets/imgs/Chay-Ngay-Di-Onionn-Remix-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/chay-ngay-di.jpg",
    view: "43,000,000",
    durationTime: "5:02",
  },
];

// đọc danh sách các bài hát ra giao diện

songs.forEach((song, index) => {
  var html = `<div class="play-items ${index === 0 ? "active" : ""}">
                        <div class="play-items-thumb">
                            <span class="position">${++index}</span>
                            <img src="${song.img}" alt="">
                            <span class="name-song">${song.nameSong}</span>
                        </div>
                        <span class="view">${song.view}</span>
                        <span class="duration-time">${song.durationTime}</span>
                    </div>`;
  playListInner.insertAdjacentHTML("beforeend", html);
});
const playItems = $$(".play-items");
btnToggle.addEventListener("click", function (e) {
  if (iconToggle.classList.contains("fa-play")) {
    audio.play();
  } else {
    audio.pause();
  }
});
function handleDrag(e) {
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
progressBar.addEventListener("click", function (e) {
  handleDrag(e);
});

progressDot.addEventListener("mousedown", function (e) {
  flag = true;
  progressDot.style.display = "block";
  progress.style.backgroundColor = "green";
});
document.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (flag) {
    handleDrag(e);
  }
});
document.addEventListener("mouseup", function (e) {
  flag = false;
});
var getTime = function (second) {
  var min = Math.floor(second / 60);
  second = Math.floor(second - min * 60);
  return `${min}:${second >= 10 ? second : "0" + second}`;
};
audio.addEventListener("loadeddata", function (e) {
  durationTime.innerHTML = getTime(audio.duration);
});
audio.addEventListener("timeupdate", function (e) {
  currentTime.innerHTML = getTime(this.currentTime);
  progress.style.width = `${(this.currentTime / audio.duration) * 100}%`;
});

audio.addEventListener("ended", function (e) {
  setTimeout(function () {
    progress.style.width = 0;
    currentTime.innerHTML = `0:00`;
  }, 500);
});

audio.addEventListener("pause", function (e) {
  iconToggle.classList.add("fa-play");
  iconToggle.classList.remove("fa-pause");
  cdThumbAnimate.pause();
});

audio.addEventListener("play", function (e) {
  iconToggle.classList.remove("fa-play");
  iconToggle.classList.add("fa-pause");
  cdThumbAnimate.play();
});

const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
  duration: 10000,
  iterations: Infinity,
});
cdThumbAnimate.pause();

// xử lý nút next
function song(index) {
  currentName.innerHTML = songs[index].nameSong;
  currentImg.setAttribute("src", songs[index].img);
  audio.setAttribute("src", songs[index].path);
}

btnNext.addEventListener("click", function (e) {
  if (index > playItems.length - 1) {
    index = 0;
  } else {
    index++;
  }

  song(index);
  audio.play();
});
console.log(playItems);
btnPrev.addEventListener("click", function (e) {
  if (index === 0) {
    console.log(playItems.length);
    index = playItems.length;
  }
  console.log(index);
  index--;
  song(index);
  audio.play();
});
