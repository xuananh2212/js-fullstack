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
const btnRepeat = $(".btn-repeat");
const textValue = $(".text-value");
var isDrag = false;
var index = 0;
var isRepeat = false;
var isRandom = false;
var timerewindSong = 0;

// dùng để lưu danh sách các bài hát đã phát.
var indexSong = [0];

// danh sách các bài hát
const songs = [
  {
    nameSong: "Anh Sai Rồi",
    path: "./assets/imgs/Anh-Sai-Roi-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/anh-sai-roi.jpg",
    view: "43,600,120",
    durationTime: "4:22",
  },
  {
    nameSong: "Chúng Ta của Hiện Tại",
    path: "./assets/imgs/Chung-Ta-Cua-Hien-Tai-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/chung-ta-cua-hien-tai.jpg",
    view: "143,120,000",
    durationTime: "5:01",
  },
  {
    nameSong: "Lạc Trôi",
    path: "./assets/imgs/Lac-Troi-Masew-Mix-Son-Tung-M-TP-Masew.mp3",
    img: "./assets/imgs/lac-troi.jpg",
    view: "63,120,000",
    durationTime: "4:24",
  },
  {
    nameSong: "Em Của Ngày Hôm Qua",
    path: "./assets/imgs/Em-Cua-Ngay-Hom-Qua-Slim-V-Remix-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/em-cua-ngay-hom-qua.jpg",
    view: "131,120,121",
    durationTime: "3:54",
  },
  {
    nameSong: "Chạy Ngay Đi",
    path: "./assets/imgs/Chay-Ngay-Di-Onionn-Remix-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/chay-ngay-di.jpg",
    view: "13,232,230",
    durationTime: "3:50",
  },
  {
    nameSong: "Nơi Này Có Anh",
    path: "./assets/imgs/Noi-Nay-Co-Anh-Masew-Bootleg-Son-Tung-M-TP-Masew.mp3",
    img: "./assets/imgs/noi-nay-co-anh.jpg",
    view: "113,032,030",
    durationTime: "4:16",
  },
  {
    nameSong: "Chắc Ai đó sẽ về",
    path: "./assets/imgs/Chac-Ai-Do-Se-Ve-DJ-DSmall-Remix-Son-Tung-M-TP-DJ-DSmall.mp3",
    img: "./assets/imgs/chac-ai-do-se-ve.jpg",
    view: "53,132,130",
    durationTime: "4:53",
  },
];

songs.forEach((song, index) => {
  var html = `<div class="play-items ${
    index === 0 ? "active" : ""
  }" data-index= "${index}">
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
    timerewindSong = (progressPercent * audio.duration) / 100;
    currentTime.innerHTML = getTime(timerewindSong);
  }
}

function handleHoverProgress(index) {
  if (index === 1) {
    progressDot.style.display = "block";

    progress.style.backgroundColor = "green";
  } else {
    progressDot.style.display = "none";

    progress.style.backgroundColor = "#fff";
  }
}

progressBar.addEventListener("click", function (e) {
  handleDrag(e);
  audio.currentTime = timerewindSong;
});

progressBar.addEventListener("mouseenter", function (e) {
  handleHoverProgress(1);
  textValue.innerHTML = getTime(timerewindSong);
  textValue.style.left = e.pageX - progressBar.offsetLeft;
  textValue.style.display = "block";
});
progressBar.addEventListener("mouseleave", function (e) {
  handleHoverProgress(-1);
  textValue.style.display = "none";
});
progressDot.addEventListener("mousedown", function (e) {
  isDrag = true;
});

document.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    handleDrag(e);
    handleHoverProgress(1);
  }
});

document.addEventListener("mouseup", function (e) {
  e.preventDefault();
  if (isDrag) {
    audio.currentTime = timerewindSong;
  }
  isDrag = false;
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
  if (!isDrag) {
    currentTime.innerHTML = getTime(this.currentTime);
    progress.style.width = `${(this.currentTime / audio.duration) * 100}%`;
  }
});

audio.addEventListener("ended", function (e) {
  setTimeout(function () {
    progress.style.width = 0;
    currentTime.innerHTML = `0:00`;
  }, 500);
  if (isRepeat) {
    audio.play();
  }
  if (isRandom) {
    var newIndex;
    do {
      newIndex = Math.floor(Math.random() * playItems.length);
    } while (indexSong.includes(newIndex));
    index = newIndex;
    indexSong.push(index);
    if (indexSong.length === playItems.length) {
      indexSong = [];
    }
    song(index);
    audio.play();
  }
  if (!isRandom && !isRepeat) {
    btnNext.click();
  }
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
  playItems.forEach((item) => {
    item.classList.remove("active");
  });
  var currentSong = [...playItems].find((item) => {
    console.log(item.getAttribute("data-index"));
    return Number(item.getAttribute("data-index")) === index;
  });
  currentSong.classList.add("active");
  currentSong.scrollIntoView();
}

btnNext.addEventListener("click", function (e) {
  if (index >= playItems.length - 1) {
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

console.log(btnRepeat);
btnRepeat.addEventListener("click", function (e) {
  if (!this.classList.contains("active")) {
    isRepeat = true;
    this.classList.add("active");
  } else {
    isRepeat = false;
    this.classList.remove("active");
  }
});

btnRandom.addEventListener("click", function (e) {
  if (!this.classList.contains("active")) {
    this.classList.add("active");
    isRandom = true;
  } else {
    this.classList.remove("active");
    isRandom = false;
  }
});

// xử lý sự kiện click cho bài hát

playItems.forEach((itemSong) => {
  itemSong.addEventListener("click", function (e) {
    console.log("event");
    song(Number(itemSong.getAttribute("data-index")));
    audio.play();
  });
});
