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
const dashboard = $(".dashboard");
const btnKaraoke = $(".btn-karaoke");
const btnKaraokeHidden = $(".btn-karaoke-hidden");
const karaoke = $(".karaoke");
const ulLyric = $(".lyric");
var wordObjPrev = null;
var isDrag = false;
var index = 0;
var isRepeat = false;
var isRandom = false;
var timerewindSong = 0;
var totalTime = audio.duration;

// dùng để lưu danh sách các bài hát đã phát.
var indexSong = [0];

// danh sách các bài hát
const songs = [
  {
    nameSong: "Anh Sai Rồi",
    path: "./assets/music/Anh-Sai-Roi-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/anh-sai-roi.jpg",
    view: "43,600,120",
    durationTime: "4:22",
  },
  {
    nameSong: "Chúng Ta của Hiện Tại",
    path: "./assets/music/Chung-Ta-Cua-Hien-Tai-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/chung-ta-cua-hien-tai.jpg",
    view: "143,120,000",
    durationTime: "5:01",
  },
  {
    nameSong: "Lạc Trôi",
    path: "./assets/music/Lac-Troi-Masew-Mix-Son-Tung-M-TP-Masew.mp3",
    img: "./assets/imgs/lac-troi.jpg",
    view: "63,120,000",
    durationTime: "4:24",
  },
  {
    nameSong: "Em Của Ngày Hôm Qua",
    path: "./assets/music/Em-Cua-Ngay-Hom-Qua-Slim-V-Remix-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/em-cua-ngay-hom-qua.jpg",
    view: "131,120,121",
    durationTime: "3:54",
  },
  {
    nameSong: "Chạy Ngay Đi",
    path: "./assets/music/Chay-Ngay-Di-Onionn-Remix-Son-Tung-M-TP.mp3",
    img: "./assets/imgs/chay-ngay-di.jpg",
    view: "13,232,230",
    durationTime: "3:50",
  },
  {
    nameSong: "Nơi Này Có Anh",
    path: "./assets/music/Noi-Nay-Co-Anh-Masew-Bootleg-Son-Tung-M-TP-Masew.mp3",
    img: "./assets/imgs/noi-nay-co-anh.jpg",
    view: "113,032,030",
    durationTime: "4:16",
  },
  {
    nameSong: "Chắc Ai đó sẽ về",
    path: "./assets/music/Chac-Ai-Do-Se-Ve-DJ-DSmall-Remix-Son-Tung-M-TP-DJ-DSmall.mp3",
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
audio.addEventListener("loadeddata", function (e) {
  totalTime = audio.duration;
  durationTime.innerHTML = getTime(totalTime);
});
function handleDrag(e) {
  console.log(e.pageX, progressBar.getBoundingClientRect().left);
  var currentWidth =
    (e.pageX >= progressBar.getBoundingClientRect().left
      ? e.pageX
      : progressBar.getBoundingClientRect().left) -
    progressBar.getBoundingClientRect().left;
  if (currentWidth >= progressBar.clientWidth) {
    currentWidth = progressBar.clientWidth;
  }
  var progressPercent = (currentWidth / progressBar.clientWidth) * 100;

  progress.style.width = `${progressPercent}%`;
  timerewindSong = (progressPercent * totalTime) / 100;
  currentTime.innerHTML = getTime(timerewindSong);
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

function handleTextValueTime(e) {
  var currentWidth =
    (e.pageX >= progressBar.getBoundingClientRect().left
      ? e.pageX
      : progressBar.getBoundingClientRect().left) -
    progressBar.getBoundingClientRect().left;
  if (currentWidth >= progressBar.clientWidth) {
    currentWidth = progressBar.clientWidth;
  }
  var time =
    (((currentWidth * 100) / progressBar.clientWidth) * totalTime) / 100;

  textValue.innerHTML = getTime(time);
  textValue.style.left = `${
    e.pageX - progressBar.getBoundingClientRect().left
  }px`;
  textValue.style.display = "block";
}

// xử lý nút next
function song(index) {
  currentName.innerHTML = songs[index].nameSong;
  currentImg.setAttribute("src", songs[index].img);
  audio.setAttribute("src", songs[index].path);
  playItems.forEach((item) => {
    item.classList.remove("active");
  });
  var currentSong = [...playItems].find((item) => {
    return Number(item.getAttribute("data-index")) === index;
  });
  currentSong.classList.add("active");
  currentSong.scrollIntoView();
}

function songRandom() {
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

btnToggle.addEventListener("click", function (e) {
  if (iconToggle.classList.contains("fa-play")) {
    audio.play();
  } else {
    audio.pause();
  }
});

progressBar.addEventListener("click", function (e) {
  handleDrag(e);
  if (timerewindSong <= totalTime) {
    audio.currentTime = timerewindSong;
  }
});

progressBar.addEventListener("mouseenter", function (e) {
  handleHoverProgress(1);
});

progressBar.addEventListener("mousemove", function (e) {
  handleTextValueTime(e);
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
    if (timerewindSong <= totalTime) {
      audio.currentTime = timerewindSong;
    }
  }
  isDrag = false;
});

var getTime = function (second) {
  var min = Math.floor(second / 60);
  second = Math.floor(second - min * 60);
  return `${min}:${second >= 10 ? second : "0" + second}`;
};

audio.addEventListener("timeupdate", function (e) {
  if (!isDrag) {
    currentTime.innerHTML = getTime(this.currentTime);
    progress.style.width = `${(this.currentTime / totalTime) * 100}%`;
  }
  checkWordsInLyric();
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
    songRandom();
  }
  if (!isRandom && !isRepeat) {
    btnNext.click();
    textValue.innerHTML = songs[index].durationTime;
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

btnNext.addEventListener("click", function (e) {
  if (isRandom) {
    songRandom();
  } else {
    if (index >= playItems.length - 1) {
      index = 0;
    } else {
      index++;
    }
    indexSong.push(index);
    song(index);
    audio.play();
  }
});
btnPrev.addEventListener("click", function (e) {
  if (isRandom) {
    songRandom();
  } else {
    if (index === 0) {
      index = playItems.length;
    }
    index--;
    indexSong.push(index);
    song(index);
    audio.play();
  }
});
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
    song(Number(itemSong.getAttribute("data-index")));
    index = Number(itemSong.getAttribute("data-index"));
    audio.play();
  });
});

// lyrics

var lyrics = `{
    "err": 0,
    "msg": "Success",
    "data": {
        "sentences": [
            {
                "words": [
                    {
                        "startTime": 16480,
                        "endTime": 17230,
                        "data": "Nếu"
                    },
                    {
                        "startTime": 17230,
                        "endTime": 17480,
                        "data": "ngày"
                    },
                    {
                        "startTime": 17480,
                        "endTime": 20480,
                        "data": "mai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 20490,
                        "endTime": 20980,
                        "data": "Em"
                    },
                    {
                        "startTime": 20980,
                        "endTime": 21230,
                        "data": "rời"
                    },
                    {
                        "startTime": 21230,
                        "endTime": 21730,
                        "data": "xa"
                    },
                    {
                        "startTime": 21730,
                        "endTime": 23980,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 23980,
                        "endTime": 24480,
                        "data": "Anh"
                    },
                    {
                        "startTime": 24480,
                        "endTime": 24980,
                        "data": "không"
                    },
                    {
                        "startTime": 24980,
                        "endTime": 25480,
                        "data": "biết"
                    },
                    {
                        "startTime": 25480,
                        "endTime": 26230,
                        "data": "sống"
                    },
                    {
                        "startTime": 26230,
                        "endTime": 26470,
                        "data": "thế"
                    },
                    {
                        "startTime": 26470,
                        "endTime": 26990,
                        "data": "nào"
                    },
                    {
                        "startTime": 26990,
                        "endTime": 29990,
                        "data": "đây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 31440,
                        "endTime": 31940,
                        "data": "Con"
                    },
                    {
                        "startTime": 31940,
                        "endTime": 32180,
                        "data": "tim"
                    },
                    {
                        "startTime": 32180,
                        "endTime": 32680,
                        "data": "anh"
                    },
                    {
                        "startTime": 32680,
                        "endTime": 33440,
                        "data": "nhói"
                    },
                    {
                        "startTime": 33440,
                        "endTime": 33940,
                        "data": "đau"
                    },
                    {
                        "startTime": 33940,
                        "endTime": 34190,
                        "data": "từng"
                    },
                    {
                        "startTime": 34190,
                        "endTime": 35190,
                        "data": "cơn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 35190,
                        "endTime": 36190,
                        "data": "Anh"
                    },
                    {
                        "startTime": 36190,
                        "endTime": 37390,
                        "data": "biết"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 37390,
                        "endTime": 37650,
                        "data": "Hạt"
                    },
                    {
                        "startTime": 37650,
                        "endTime": 37900,
                        "data": "mưa"
                    },
                    {
                        "startTime": 37900,
                        "endTime": 38400,
                        "data": "không"
                    },
                    {
                        "startTime": 38400,
                        "endTime": 38650,
                        "data": "ngừng"
                    },
                    {
                        "startTime": 38650,
                        "endTime": 39400,
                        "data": "rơi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 39400,
                        "endTime": 39650,
                        "data": "Khi"
                    },
                    {
                        "startTime": 39650,
                        "endTime": 40900,
                        "data": "thấy"
                    },
                    {
                        "startTime": 40900,
                        "endTime": 41400,
                        "data": "em"
                    },
                    {
                        "startTime": 41400,
                        "endTime": 44400,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 46150,
                        "endTime": 46900,
                        "data": "Xin"
                    },
                    {
                        "startTime": 46900,
                        "endTime": 47140,
                        "data": "thời"
                    },
                    {
                        "startTime": 47140,
                        "endTime": 49890,
                        "data": "gian"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 49890,
                        "endTime": 50390,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 50390,
                        "endTime": 50650,
                        "data": "trở"
                    },
                    {
                        "startTime": 50650,
                        "endTime": 51390,
                        "data": "lại"
                    },
                    {
                        "startTime": 51390,
                        "endTime": 53350,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 53350,
                        "endTime": 54110,
                        "data": "Anh"
                    },
                    {
                        "startTime": 54110,
                        "endTime": 54350,
                        "data": "không"
                    },
                    {
                        "startTime": 54350,
                        "endTime": 54850,
                        "data": "muốn"
                    },
                    {
                        "startTime": 54850,
                        "endTime": 55600,
                        "data": "mất"
                    },
                    {
                        "startTime": 55600,
                        "endTime": 56100,
                        "data": "em"
                    },
                    {
                        "startTime": 56100,
                        "endTime": 56350,
                        "data": "người"
                    },
                    {
                        "startTime": 56350,
                        "endTime": 59350,
                        "data": "ơi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 60850,
                        "endTime": 61600,
                        "data": "Con"
                    },
                    {
                        "startTime": 61600,
                        "endTime": 61850,
                        "data": "tim"
                    },
                    {
                        "startTime": 61850,
                        "endTime": 62350,
                        "data": "anh"
                    },
                    {
                        "startTime": 62350,
                        "endTime": 63100,
                        "data": "nhói"
                    },
                    {
                        "startTime": 63100,
                        "endTime": 63350,
                        "data": "đau"
                    },
                    {
                        "startTime": 63350,
                        "endTime": 63600,
                        "data": "từng"
                    },
                    {
                        "startTime": 63600,
                        "endTime": 64600,
                        "data": "cơn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 64600,
                        "endTime": 65600,
                        "data": "Anh"
                    },
                    {
                        "startTime": 65600,
                        "endTime": 66850,
                        "data": "khóc"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 66850,
                        "endTime": 67100,
                        "data": "Vì"
                    },
                    {
                        "startTime": 67100,
                        "endTime": 67350,
                        "data": "anh"
                    },
                    {
                        "startTime": 67350,
                        "endTime": 67850,
                        "data": "biết"
                    },
                    {
                        "startTime": 67850,
                        "endTime": 68110,
                        "data": "mình"
                    },
                    {
                        "startTime": 68110,
                        "endTime": 69110,
                        "data": "sai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 69110,
                        "endTime": 69350,
                        "data": "Tất"
                    },
                    {
                        "startTime": 69350,
                        "endTime": 69850,
                        "data": "cả"
                    },
                    {
                        "startTime": 69850,
                        "endTime": 70100,
                        "data": "là"
                    },
                    {
                        "startTime": 70100,
                        "endTime": 70600,
                        "data": "vì"
                    },
                    {
                        "startTime": 70600,
                        "endTime": 71100,
                        "data": "tại"
                    },
                    {
                        "startTime": 71100,
                        "endTime": 73860,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 73860,
                        "endTime": 74600,
                        "data": "Anh"
                    },
                    {
                        "startTime": 74600,
                        "endTime": 74850,
                        "data": "sai"
                    },
                    {
                        "startTime": 74850,
                        "endTime": 77600,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 77600,
                        "endTime": 78100,
                        "data": "Anh"
                    },
                    {
                        "startTime": 78100,
                        "endTime": 78350,
                        "data": "sai"
                    },
                    {
                        "startTime": 78350,
                        "endTime": 81350,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 81850,
                        "endTime": 82100,
                        "data": "Xin"
                    },
                    {
                        "startTime": 82100,
                        "endTime": 82610,
                        "data": "em"
                    },
                    {
                        "startTime": 82610,
                        "endTime": 82850,
                        "data": "một"
                    },
                    {
                        "startTime": 82850,
                        "endTime": 83610,
                        "data": "lần"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 83610,
                        "endTime": 83850,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 83850,
                        "endTime": 84850,
                        "data": "nói"
                    },
                    {
                        "startTime": 84850,
                        "endTime": 85560,
                        "data": "em"
                    },
                    {
                        "startTime": 85560,
                        "endTime": 85800,
                        "data": "yêu"
                    },
                    {
                        "startTime": 85800,
                        "endTime": 88550,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 88550,
                        "endTime": 89310,
                        "data": "Anh"
                    },
                    {
                        "startTime": 89310,
                        "endTime": 89560,
                        "data": "xin"
                    },
                    {
                        "startTime": 89560,
                        "endTime": 92300,
                        "data": "nhận"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 92300,
                        "endTime": 92560,
                        "data": "Nhận"
                    },
                    {
                        "startTime": 92560,
                        "endTime": 92800,
                        "data": "hết"
                    },
                    {
                        "startTime": 92800,
                        "endTime": 93300,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 93300,
                        "endTime": 96300,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 96310,
                        "endTime": 96810,
                        "data": "Đừng"
                    },
                    {
                        "startTime": 96810,
                        "endTime": 97060,
                        "data": "rời"
                    },
                    {
                        "startTime": 97060,
                        "endTime": 97310,
                        "data": "xa"
                    },
                    {
                        "startTime": 97310,
                        "endTime": 97560,
                        "data": "kỉ"
                    },
                    {
                        "startTime": 97560,
                        "endTime": 98560,
                        "data": "niệm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 98560,
                        "endTime": 98800,
                        "data": "Anh"
                    },
                    {
                        "startTime": 98800,
                        "endTime": 99060,
                        "data": "vẫn"
                    },
                    {
                        "startTime": 99060,
                        "endTime": 99560,
                        "data": "ở"
                    },
                    {
                        "startTime": 99560,
                        "endTime": 100060,
                        "data": "đây"
                    },
                    {
                        "startTime": 100060,
                        "endTime": 100560,
                        "data": "ngóng"
                    },
                    {
                        "startTime": 100560,
                        "endTime": 100800,
                        "data": "chờ"
                    },
                    {
                        "startTime": 100800,
                        "endTime": 103310,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 103310,
                        "endTime": 103550,
                        "data": "Giờ"
                    },
                    {
                        "startTime": 103550,
                        "endTime": 103810,
                        "data": "em"
                    },
                    {
                        "startTime": 103810,
                        "endTime": 104310,
                        "data": "ở"
                    },
                    {
                        "startTime": 104310,
                        "endTime": 105060,
                        "data": "đâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 105060,
                        "endTime": 105310,
                        "data": "Tìm"
                    },
                    {
                        "startTime": 105310,
                        "endTime": 105560,
                        "data": "em"
                    },
                    {
                        "startTime": 105560,
                        "endTime": 106060,
                        "data": "ở"
                    },
                    {
                        "startTime": 106060,
                        "endTime": 106800,
                        "data": "đâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 106800,
                        "endTime": 107300,
                        "data": "Sao"
                    },
                    {
                        "startTime": 107300,
                        "endTime": 107800,
                        "data": "em"
                    },
                    {
                        "startTime": 107800,
                        "endTime": 108560,
                        "data": "nỡ"
                    },
                    {
                        "startTime": 108560,
                        "endTime": 108810,
                        "data": "bước"
                    },
                    {
                        "startTime": 108810,
                        "endTime": 109310,
                        "data": "đi"
                    },
                    {
                        "startTime": 109310,
                        "endTime": 109550,
                        "data": "rời"
                    },
                    {
                        "startTime": 109550,
                        "endTime": 110550,
                        "data": "xa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 110550,
                        "endTime": 111050,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 111050,
                        "endTime": 111310,
                        "data": "quay"
                    },
                    {
                        "startTime": 111310,
                        "endTime": 111810,
                        "data": "trở"
                    },
                    {
                        "startTime": 111810,
                        "endTime": 112060,
                        "data": "về"
                    },
                    {
                        "startTime": 112060,
                        "endTime": 112310,
                        "data": "bên"
                    },
                    {
                        "startTime": 112310,
                        "endTime": 113310,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 113310,
                        "endTime": 113580,
                        "data": "Một"
                    },
                    {
                        "startTime": 113580,
                        "endTime": 114060,
                        "data": "lần"
                    },
                    {
                        "startTime": 114060,
                        "endTime": 114300,
                        "data": "thôi"
                    },
                    {
                        "startTime": 114300,
                        "endTime": 114800,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 114800,
                        "endTime": 115560,
                        "data": "Anh"
                    },
                    {
                        "startTime": 115560,
                        "endTime": 116550,
                        "data": "đã"
                    },
                    {
                        "startTime": 116550,
                        "endTime": 117310,
                        "data": "sai"
                    },
                    {
                        "startTime": 117310,
                        "endTime": 118810,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 118810,
                        "endTime": 119060,
                        "data": "Anh"
                    },
                    {
                        "startTime": 119060,
                        "endTime": 120770,
                        "data": "như"
                    },
                    {
                        "startTime": 120770,
                        "endTime": 121010,
                        "data": "gục"
                    },
                    {
                        "startTime": 121010,
                        "endTime": 122520,
                        "data": "ngã"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 122520,
                        "endTime": 122760,
                        "data": "Chìm"
                    },
                    {
                        "startTime": 122760,
                        "endTime": 123260,
                        "data": "đắm"
                    },
                    {
                        "startTime": 123260,
                        "endTime": 123510,
                        "data": "trong"
                    },
                    {
                        "startTime": 123510,
                        "endTime": 124010,
                        "data": "ly"
                    },
                    {
                        "startTime": 124010,
                        "endTime": 124760,
                        "data": "rượu"
                    },
                    {
                        "startTime": 124760,
                        "endTime": 126260,
                        "data": "say"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 126260,
                        "endTime": 126510,
                        "data": "Xin"
                    },
                    {
                        "startTime": 126510,
                        "endTime": 126760,
                        "data": "em"
                    },
                    {
                        "startTime": 126760,
                        "endTime": 127010,
                        "data": "một"
                    },
                    {
                        "startTime": 127010,
                        "endTime": 128010,
                        "data": "lần"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 128010,
                        "endTime": 128260,
                        "data": "Tha"
                    },
                    {
                        "startTime": 128260,
                        "endTime": 129260,
                        "data": "thứ"
                    },
                    {
                        "startTime": 129260,
                        "endTime": 129510,
                        "data": "quay"
                    },
                    {
                        "startTime": 129510,
                        "endTime": 130010,
                        "data": "về"
                    },
                    {
                        "startTime": 130010,
                        "endTime": 130760,
                        "data": "bên"
                    },
                    {
                        "startTime": 130760,
                        "endTime": 133760,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 162580,
                        "endTime": 163330,
                        "data": "Anh"
                    },
                    {
                        "startTime": 163330,
                        "endTime": 163330,
                        "data": "sai"
                    },
                    {
                        "startTime": 163330,
                        "endTime": 166030,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 166030,
                        "endTime": 166780,
                        "data": "Anh"
                    },
                    {
                        "startTime": 166780,
                        "endTime": 167030,
                        "data": "sai"
                    },
                    {
                        "startTime": 167030,
                        "endTime": 170030,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 170540,
                        "endTime": 170780,
                        "data": "Xin"
                    },
                    {
                        "startTime": 170780,
                        "endTime": 171280,
                        "data": "em"
                    },
                    {
                        "startTime": 171280,
                        "endTime": 171530,
                        "data": "một"
                    },
                    {
                        "startTime": 171530,
                        "endTime": 172530,
                        "data": "lần"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 172530,
                        "endTime": 172790,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 172790,
                        "endTime": 173530,
                        "data": "nói"
                    },
                    {
                        "startTime": 173530,
                        "endTime": 174280,
                        "data": "em"
                    },
                    {
                        "startTime": 174280,
                        "endTime": 174530,
                        "data": "yêu"
                    },
                    {
                        "startTime": 174530,
                        "endTime": 177280,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 177280,
                        "endTime": 178040,
                        "data": "Anh"
                    },
                    {
                        "startTime": 178040,
                        "endTime": 178040,
                        "data": "xin"
                    },
                    {
                        "startTime": 178040,
                        "endTime": 180790,
                        "data": "nhận"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 180790,
                        "endTime": 181030,
                        "data": "Nhận"
                    },
                    {
                        "startTime": 181030,
                        "endTime": 181530,
                        "data": "hết"
                    },
                    {
                        "startTime": 181530,
                        "endTime": 181780,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 181780,
                        "endTime": 184780,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 185040,
                        "endTime": 185280,
                        "data": "Đừng"
                    },
                    {
                        "startTime": 185280,
                        "endTime": 185540,
                        "data": "rời"
                    },
                    {
                        "startTime": 185540,
                        "endTime": 186040,
                        "data": "xa"
                    },
                    {
                        "startTime": 186040,
                        "endTime": 186280,
                        "data": "kỉ"
                    },
                    {
                        "startTime": 186280,
                        "endTime": 187030,
                        "data": "niệm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 187030,
                        "endTime": 187280,
                        "data": "Anh"
                    },
                    {
                        "startTime": 187280,
                        "endTime": 187790,
                        "data": "vẫn"
                    },
                    {
                        "startTime": 187790,
                        "endTime": 188030,
                        "data": "ở"
                    },
                    {
                        "startTime": 188030,
                        "endTime": 188530,
                        "data": "đây"
                    },
                    {
                        "startTime": 188530,
                        "endTime": 189030,
                        "data": "ngóng"
                    },
                    {
                        "startTime": 189030,
                        "endTime": 189530,
                        "data": "chờ"
                    },
                    {
                        "startTime": 189530,
                        "endTime": 191780,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 191780,
                        "endTime": 192030,
                        "data": "Tìm"
                    },
                    {
                        "startTime": 192030,
                        "endTime": 192540,
                        "data": "em"
                    },
                    {
                        "startTime": 192540,
                        "endTime": 192780,
                        "data": "ở"
                    },
                    {
                        "startTime": 192780,
                        "endTime": 193540,
                        "data": "đâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 193540,
                        "endTime": 193780,
                        "data": "Tìm"
                    },
                    {
                        "startTime": 193780,
                        "endTime": 194280,
                        "data": "em"
                    },
                    {
                        "startTime": 194280,
                        "endTime": 194530,
                        "data": "ở"
                    },
                    {
                        "startTime": 194530,
                        "endTime": 195790,
                        "data": "đâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 195790,
                        "endTime": 196030,
                        "data": "Sao"
                    },
                    {
                        "startTime": 196030,
                        "endTime": 196290,
                        "data": "em"
                    },
                    {
                        "startTime": 196290,
                        "endTime": 197280,
                        "data": "nỡ"
                    },
                    {
                        "startTime": 197280,
                        "endTime": 197530,
                        "data": "bước"
                    },
                    {
                        "startTime": 197530,
                        "endTime": 198030,
                        "data": "đi"
                    },
                    {
                        "startTime": 198030,
                        "endTime": 198280,
                        "data": "rời"
                    },
                    {
                        "startTime": 198280,
                        "endTime": 199280,
                        "data": "xa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 199280,
                        "endTime": 199780,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 199780,
                        "endTime": 200040,
                        "data": "quay"
                    },
                    {
                        "startTime": 200040,
                        "endTime": 200280,
                        "data": "trở"
                    },
                    {
                        "startTime": 200280,
                        "endTime": 200780,
                        "data": "về"
                    },
                    {
                        "startTime": 200780,
                        "endTime": 201040,
                        "data": "bên"
                    },
                    {
                        "startTime": 201040,
                        "endTime": 202040,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 202040,
                        "endTime": 202280,
                        "data": "Một"
                    },
                    {
                        "startTime": 202280,
                        "endTime": 202530,
                        "data": "lần"
                    },
                    {
                        "startTime": 202530,
                        "endTime": 202790,
                        "data": "thôi"
                    },
                    {
                        "startTime": 202790,
                        "endTime": 203290,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 203290,
                        "endTime": 203790,
                        "data": "Anh"
                    },
                    {
                        "startTime": 203790,
                        "endTime": 205280,
                        "data": "đã"
                    },
                    {
                        "startTime": 205280,
                        "endTime": 205780,
                        "data": "sai"
                    },
                    {
                        "startTime": 205780,
                        "endTime": 207540,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 207540,
                        "endTime": 207780,
                        "data": "Anh"
                    },
                    {
                        "startTime": 207780,
                        "endTime": 209230,
                        "data": "như"
                    },
                    {
                        "startTime": 209230,
                        "endTime": 209500,
                        "data": "gục"
                    },
                    {
                        "startTime": 209500,
                        "endTime": 211240,
                        "data": "ngã"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 211240,
                        "endTime": 211480,
                        "data": "Chìm"
                    },
                    {
                        "startTime": 211480,
                        "endTime": 211740,
                        "data": "đắm"
                    },
                    {
                        "startTime": 211740,
                        "endTime": 212240,
                        "data": "trong"
                    },
                    {
                        "startTime": 212240,
                        "endTime": 212740,
                        "data": "ly"
                    },
                    {
                        "startTime": 212740,
                        "endTime": 213240,
                        "data": "rượu"
                    },
                    {
                        "startTime": 213240,
                        "endTime": 214990,
                        "data": "say"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 214990,
                        "endTime": 215230,
                        "data": "Xin"
                    },
                    {
                        "startTime": 215230,
                        "endTime": 215490,
                        "data": "em"
                    },
                    {
                        "startTime": 215490,
                        "endTime": 215730,
                        "data": "một"
                    },
                    {
                        "startTime": 215730,
                        "endTime": 216730,
                        "data": "lần"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 216730,
                        "endTime": 216990,
                        "data": "Tha"
                    },
                    {
                        "startTime": 216990,
                        "endTime": 217980,
                        "data": "thứ"
                    },
                    {
                        "startTime": 217980,
                        "endTime": 218240,
                        "data": "quay"
                    },
                    {
                        "startTime": 218240,
                        "endTime": 218740,
                        "data": "về"
                    },
                    {
                        "startTime": 218740,
                        "endTime": 219240,
                        "data": "bên"
                    },
                    {
                        "startTime": 219240,
                        "endTime": 222240,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 222240,
                        "endTime": 222490,
                        "data": "Anh"
                    },
                    {
                        "startTime": 222490,
                        "endTime": 224180,
                        "data": "như"
                    },
                    {
                        "startTime": 224180,
                        "endTime": 224430,
                        "data": "gục"
                    },
                    {
                        "startTime": 224430,
                        "endTime": 225930,
                        "data": "ngã"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 225930,
                        "endTime": 226180,
                        "data": "Chìm"
                    },
                    {
                        "startTime": 226180,
                        "endTime": 226430,
                        "data": "đắm"
                    },
                    {
                        "startTime": 226430,
                        "endTime": 226930,
                        "data": "trong"
                    },
                    {
                        "startTime": 226930,
                        "endTime": 227680,
                        "data": "ly"
                    },
                    {
                        "startTime": 227680,
                        "endTime": 227930,
                        "data": "rượu"
                    },
                    {
                        "startTime": 227930,
                        "endTime": 229420,
                        "data": "say"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 229420,
                        "endTime": 229930,
                        "data": "Xin"
                    },
                    {
                        "startTime": 229930,
                        "endTime": 230180,
                        "data": "em"
                    },
                    {
                        "startTime": 230180,
                        "endTime": 230680,
                        "data": "một"
                    },
                    {
                        "startTime": 230680,
                        "endTime": 231430,
                        "data": "lần"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 231430,
                        "endTime": 231680,
                        "data": "Tha"
                    },
                    {
                        "startTime": 231680,
                        "endTime": 236430,
                        "data": "thứ"
                    },
                    {
                        "startTime": 236430,
                        "endTime": 236680,
                        "data": "quay"
                    },
                    {
                        "startTime": 236680,
                        "endTime": 237930,
                        "data": "về"
                    },
                    {
                        "startTime": 237930,
                        "endTime": 238680,
                        "data": "bên"
                    },
                    {
                        "startTime": 238680,
                        "endTime": 239680,
                        "data": "anh"
                    }
                ]
            }
        ]
    },
    "timestamp": 1694405044817
}`;

var lyricsObj = JSON.parse(lyrics).data.sentences;

function renderLyrics() {
  lyricsObj.forEach((lyric) => {
    var html = "";
    lyric.words.forEach((word) => {
      html += word.data + " ";
    });
    ulLyric.insertAdjacentHTML(
      `beforeend`,
      `<li class="lyric-items" data-time-start = ${
        lyric.words[0].startTime
      } data-time-end = ${
        lyric.words[lyric.words.length - 1].endTime
      }>${html.trim()}</li>`
    );
  });
  btnKaraoke.addEventListener("click", function (e) {
    karaoke.classList.toggle("is-show");
  });
}

function checkWordsInLyric() {
  console.log("co vao khong");
  var lyricItems = $$(".lyric-items");
  //   var wordObj = lyricsObj.find((lyrics) => {
  //     var timeStart = lyrics.words[0].startTime / 1000;
  //     console.log(timeStart);
  //     var timeEnd = lyrics.words[lyrics.words.length - 1].endTime / 1000;
  //     console.log(timeEnd);
  //     console.log(audio.currentTime);
  //     return audio.currentTime >= timeStart && audio.currentTime <= timeEnd;
  //   });
  //   if (wordObj && wordObj !== wordObjPrev) {
  //     var html = "";
  //     wordObj.words.forEach((word) => (html += word.data + " "));

  //     var li = [...lyricItems].find(
  //       (lyricItem) =>
  //         lyricItem.textContent.trim() === html.trim() &&
  //         !lyricItem.classList.contains("is-over")
  //     );
  //     li.classList.add("is-over");
  //     [...lyricItems].forEach((lyricItem) => {
  //       lyricItem.classList.remove("is-active");
  //     });
  //     li.classList.add("is-active");
  //     li.scrollIntoView();
  //     wordObjPrev = wordObj;
  //   }
  var liLyricCurrent = lyricItems.find(
    (lyricItem) =>
      audio.currentTime >= Number(lyricItem.dataset.timeStart) / 1000 &&
      audio.currentTime <= Number(lyricItem.dataset.end) / 1000
  );

  lyricItems.forEach((lyricItem) => lyricItem.classList.remove("is-active"));
  liLyricCurrent.classList.add("is-active");
}

renderLyrics();

btnKaraokeHidden.addEventListener("click", function (e) {
  karaoke.classList.remove("is-show");
});
