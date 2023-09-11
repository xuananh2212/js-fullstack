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
  //   {
  //     nameSong: "Chúng Ta của Hiện Tại",
  //     path: "./assets/music/Chung-Ta-Cua-Hien-Tai-Son-Tung-M-TP.mp3",
  //     img: "./assets/imgs/chung-ta-cua-hien-tai.jpg",
  //     view: "143,120,000",
  //     durationTime: "5:01",
  //   },
  {
    nameSong: "Nơi Này Có Anh",
    path: "./assets/music/Noi-Nay-Co-Anh-Masew-Bootleg-Son-Tung-M-TP-Masew.mp3",
    img: "./assets/imgs/noi-nay-co-anh.jpg",
    view: "113,032,030",
    durationTime: "4:16",
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
  //   {
  //     nameSong: "Chạy Ngay Đi",
  //     path: "./assets/music/Chay-Ngay-Di-Onionn-Remix-Son-Tung-M-TP.mp3",
  //     img: "./assets/imgs/chay-ngay-di.jpg",
  //     view: "13,232,230",
  //     durationTime: "3:50",
  //   },

  //   {
  //     nameSong: "Chắc Ai đó sẽ về",
  //     path: "./assets/music/Chac-Ai-Do-Se-Ve-DJ-DSmall-Remix-Son-Tung-M-TP-DJ-DSmall.mp3",
  //     img: "./assets/imgs/chac-ai-do-se-ve.jpg",
  //     view: "53,132,130",
  //     durationTime: "4:53",
  //   },
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
  renderLyrics(lyricsObj[index]);
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
    ulLyric.scroll(0, 0);
    lyricItems.forEach((lyricItem) => lyricItem.classList.remove("is-active"));
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
    renderLyrics(lyricsObj[index]);
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
    renderLyrics(lyricsObj[index]);
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
    renderLyrics(lyricsObj[index]);
  });
});

// lyrics

var lyrics = `
    [
        [
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
        ],
        [
            {
                "words": [
                    {
                        "startTime": 21589,
                        "endTime": 21919,
                        "data": "Em"
                    },
                    {
                        "startTime": 21919,
                        "endTime": 22149,
                        "data": "là"
                    },
                    {
                        "startTime": 22149,
                        "endTime": 22159,
                        "data": "ai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 22809,
                        "endTime": 22829,
                        "data": "Từ"
                    },
                    {
                        "startTime": 22829,
                        "endTime": 23119,
                        "data": "đâu"
                    },
                    {
                        "startTime": 23119,
                        "endTime": 23409,
                        "data": "bước"
                    },
                    {
                        "startTime": 23409,
                        "endTime": 23779,
                        "data": "đến"
                    },
                    {
                        "startTime": 23779,
                        "endTime": 24089,
                        "data": "nơi"
                    },
                    {
                        "startTime": 24089,
                        "endTime": 24319,
                        "data": "đây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 24369,
                        "endTime": 24740,
                        "data": "Dịu"
                    },
                    {
                        "startTime": 24740,
                        "endTime": 25009,
                        "data": "dàng"
                    },
                    {
                        "startTime": 25019,
                        "endTime": 25450,
                        "data": "chân"
                    },
                    {
                        "startTime": 25839,
                        "endTime": 26289,
                        "data": "phương"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 26729,
                        "endTime": 27100,
                        "data": "Em"
                    },
                    {
                        "startTime": 27100,
                        "endTime": 27240,
                        "data": "là"
                    },
                    {
                        "startTime": 27240,
                        "endTime": 27250,
                        "data": "ai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 27659,
                        "endTime": 27949,
                        "data": "Tựa"
                    },
                    {
                        "startTime": 27949,
                        "endTime": 28189,
                        "data": "như"
                    },
                    {
                        "startTime": 28359,
                        "endTime": 28629,
                        "data": "ánh"
                    },
                    {
                        "startTime": 28629,
                        "endTime": 28969,
                        "data": "nắng"
                    },
                    {
                        "startTime": 28969,
                        "endTime": 29279,
                        "data": "ban"
                    },
                    {
                        "startTime": 29279,
                        "endTime": 29489,
                        "data": "mai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 29559,
                        "endTime": 29949,
                        "data": "Ngọt"
                    },
                    {
                        "startTime": 29949,
                        "endTime": 30219,
                        "data": "ngào"
                    },
                    {
                        "startTime": 30229,
                        "endTime": 30529,
                        "data": "trong"
                    },
                    {
                        "startTime": 30529,
                        "endTime": 30669,
                        "data": "sương"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 31879,
                        "endTime": 32249,
                        "data": "Ngắm"
                    },
                    {
                        "startTime": 32259,
                        "endTime": 32479,
                        "data": "em"
                    },
                    {
                        "startTime": 32489,
                        "endTime": 32959,
                        "data": "thật"
                    },
                    {
                        "startTime": 32959,
                        "endTime": 32989,
                        "data": "lâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 34789,
                        "endTime": 35150,
                        "data": "Con"
                    },
                    {
                        "startTime": 35150,
                        "endTime": 35490,
                        "data": "tim"
                    },
                    {
                        "startTime": 35510,
                        "endTime": 35820,
                        "data": "anh"
                    },
                    {
                        "startTime": 35820,
                        "endTime": 36090,
                        "data": "yếu"
                    },
                    {
                        "startTime": 36090,
                        "endTime": 36459,
                        "data": "mềm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 37099,
                        "endTime": 37349,
                        "data": "Đắm"
                    },
                    {
                        "startTime": 37359,
                        "endTime": 37729,
                        "data": "say"
                    },
                    {
                        "startTime": 37729,
                        "endTime": 37859,
                        "data": "từ"
                    },
                    {
                        "startTime": 38049,
                        "endTime": 38269,
                        "data": "phút"
                    },
                    {
                        "startTime": 38269,
                        "endTime": 38749,
                        "data": "đó"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 39059,
                        "endTime": 39370,
                        "data": "Từng"
                    },
                    {
                        "startTime": 39370,
                        "endTime": 39559,
                        "data": "giây"
                    },
                    {
                        "startTime": 39569,
                        "endTime": 40029,
                        "data": "trôi"
                    },
                    {
                        "startTime": 40039,
                        "endTime": 40359,
                        "data": "yêu"
                    },
                    {
                        "startTime": 40359,
                        "endTime": 40609,
                        "data": "thêm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 42610,
                        "endTime": 43420,
                        "data": "Bao ngày qua "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 43319,
                        "endTime": 43479,
                        "data": "Bình"
                    },
                    {
                        "startTime": 43969,
                        "endTime": 44039,
                        "data": "minh"
                    },
                    {
                        "startTime": 44039,
                        "endTime": 44299,
                        "data": "đánh"
                    },
                    {
                        "startTime": 44299,
                        "endTime": 44469,
                        "data": "thức"
                    },
                    {
                        "startTime": 44509,
                        "endTime": 44879,
                        "data": "xua"
                    },
                    {
                        "startTime": 44879,
                        "endTime": 44909,
                        "data": "tan"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 45269,
                        "endTime": 45449,
                        "data": "Bộn"
                    },
                    {
                        "startTime": 45789,
                        "endTime": 45919,
                        "data": "bề"
                    },
                    {
                        "startTime": 45919,
                        "endTime": 46239,
                        "data": "nơi"
                    },
                    {
                        "startTime": 46310,
                        "endTime": 46560,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 47579,
                        "endTime": 47909,
                        "data": "Bao"
                    },
                    {
                        "startTime": 48069,
                        "endTime": 48199,
                        "data": "ngày"
                    },
                    {
                        "startTime": 48199,
                        "endTime": 48390,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 48529,
                        "endTime": 48949,
                        "data": "Niềm"
                    },
                    {
                        "startTime": 48949,
                        "endTime": 48979,
                        "data": "thương"
                    },
                    {
                        "startTime": 49169,
                        "endTime": 49459,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 49469,
                        "endTime": 49649,
                        "data": "nhớ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 49839,
                        "endTime": 50090,
                        "data": "Bay"
                    },
                    {
                        "startTime": 50289,
                        "endTime": 50339,
                        "data": "theo"
                    },
                    {
                        "startTime": 50459,
                        "endTime": 50739,
                        "data": "bầu"
                    },
                    {
                        "startTime": 50749,
                        "endTime": 51119,
                        "data": "trời"
                    },
                    {
                        "startTime": 51119,
                        "endTime": 51329,
                        "data": "trong"
                    },
                    {
                        "startTime": 51339,
                        "endTime": 51799,
                        "data": "xanh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 52910,
                        "endTime": 55840,
                        "data": "Liếc đôi hàng mi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 55480,
                        "endTime": 55919,
                        "data": "Mong"
                    },
                    {
                        "startTime": 56009,
                        "endTime": 56319,
                        "data": "manh"
                    },
                    {
                        "startTime": 56399,
                        "endTime": 56639,
                        "data": "anh"
                    },
                    {
                        "startTime": 57840,
                        "endTime": 57899,
                        "data": "thẫn"
                    },
                    {
                        "startTime": 57899,
                        "endTime": 57919,
                        "data": "thờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 58019,
                        "endTime": 58079,
                        "data": "Muốn"
                    },
                    {
                        "startTime": 58299,
                        "endTime": 58559,
                        "data": "hôn"
                    },
                    {
                        "startTime": 58599,
                        "endTime": 58930,
                        "data": "nhẹ"
                    },
                    {
                        "startTime": 58930,
                        "endTime": 59130,
                        "data": "mái"
                    },
                    {
                        "startTime": 59130,
                        "endTime": 59320,
                        "data": "tóc"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 59969,
                        "endTime": 60229,
                        "data": "Bờ"
                    },
                    {
                        "startTime": 60229,
                        "endTime": 60369,
                        "data": "môi"
                    },
                    {
                        "startTime": 60369,
                        "endTime": 60389,
                        "data": "em"
                    },
                    {
                        "startTime": 60919,
                        "endTime": 61229,
                        "data": "anh"
                    },
                    {
                        "startTime": 61229,
                        "endTime": 61379,
                        "data": "mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 63450,
                        "endTime": 66120,
                        "data": "Cầm tay anh dựa vai anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 66120,
                        "endTime": 68240,
                        "data": "Kề bên anh nơi này có anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 68240,
                        "endTime": 69730,
                        "data": "Gió mang câu tình ca"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 69730,
                        "endTime": 70730,
                        "data": "Ngàn ánh sao vụt qua "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 70730,
                        "endTime": 73850,
                        "data": "Nhẹ ôm lấy em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 73850,
                        "endTime": 76350,
                        "data": "Cầm tay anh dựa vai anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 76350,
                        "endTime": 78720,
                        "data": "Kề bên anh nơi này có anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 78720,
                        "endTime": 80090,
                        "data": "Khép đôi mi thật lâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 80090,
                        "endTime": 81280,
                        "data": "Nguyện mãi bên cạnh nhau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 81280,
                        "endTime": 83340,
                        "data": "Yêu say đắm như ngày đầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 84090,
                        "endTime": 87140,
                        "data": "Mùa xuân đến bình yên "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 87140,
                        "endTime": 89080,
                        "data": "Cho anh những giấc mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 89059,
                        "endTime": 89129,
                        "data": "Hạ"
                    },
                    {
                        "startTime": 89129,
                        "endTime": 89159,
                        "data": "lưu"
                    },
                    {
                        "startTime": 89639,
                        "endTime": 89940,
                        "data": "giữ"
                    },
                    {
                        "startTime": 89940,
                        "endTime": 90060,
                        "data": "ngày"
                    },
                    {
                        "startTime": 90060,
                        "endTime": 90080,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 92199,
                        "endTime": 92410,
                        "data": "Ngọt"
                    },
                    {
                        "startTime": 92830,
                        "endTime": 92899,
                        "data": "ngào"
                    },
                    {
                        "startTime": 92899,
                        "endTime": 92929,
                        "data": "nên"
                    },
                    {
                        "startTime": 92929,
                        "endTime": 92949,
                        "data": "thơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 94510,
                        "endTime": 97690,
                        "data": "Mùa thu lá vàng rơi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 97690,
                        "endTime": 99620,
                        "data": "Đông sang anh nhớ em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 99620,
                        "endTime": 102740,
                        "data": "Tình yêu bé nhỏ xin "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 102659,
                        "endTime": 102980,
                        "data": "Dành"
                    },
                    {
                        "startTime": 102980,
                        "endTime": 103269,
                        "data": "tặng"
                    },
                    {
                        "startTime": 103269,
                        "endTime": 103299,
                        "data": "riêng"
                    },
                    {
                        "startTime": 103299,
                        "endTime": 103319,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 116100,
                        "endTime": 116910,
                        "data": "Còn đó tiếng nói ấy "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 116910,
                        "endTime": 118720,
                        "data": "Bên tai vấn vương bao ngày qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 118720,
                        "endTime": 118749,
                        "data": "Ánh"
                    },
                    {
                        "startTime": 118929,
                        "endTime": 119169,
                        "data": "mắt"
                    },
                    {
                        "startTime": 119339,
                        "endTime": 119469,
                        "data": "bối"
                    },
                    {
                        "startTime": 119469,
                        "endTime": 119499,
                        "data": "rối"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 119209,
                        "endTime": 119229,
                        "data": "Nhớ"
                    },
                    {
                        "startTime": 119949,
                        "endTime": 120299,
                        "data": "thương"
                    },
                    {
                        "startTime": 120630,
                        "endTime": 120699,
                        "data": "bao"
                    },
                    {
                        "startTime": 120699,
                        "endTime": 120729,
                        "data": "ngày"
                    },
                    {
                        "startTime": 120729,
                        "endTime": 120759,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 121650,
                        "endTime": 122590,
                        "data": "Yêu em anh thẫn thờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 122590,
                        "endTime": 123770,
                        "data": "Con tim bâng khuâng đâu có ngờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 123640,
                        "endTime": 123879,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 123879,
                        "endTime": 124069,
                        "data": "bao"
                    },
                    {
                        "startTime": 124069,
                        "endTime": 124239,
                        "data": "giờ"
                    },
                    {
                        "startTime": 124239,
                        "endTime": 124269,
                        "data": "phải"
                    },
                    {
                        "startTime": 124269,
                        "endTime": 124299,
                        "data": "mong"
                    },
                    {
                        "startTime": 124719,
                        "endTime": 124819,
                        "data": "chờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 125080,
                        "endTime": 126700,
                        "data": "Đợi ai trong chiều hoàng hôn mờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 126700,
                        "endTime": 127890,
                        "data": "Đắm chìm hòa vào vần thơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 127890,
                        "endTime": 129140,
                        "data": "Ngắm nhìn khờ dại mộng mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 129140,
                        "endTime": 130390,
                        "data": "Đừng bước vội vàng rồi làm ngơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 130390,
                        "endTime": 131910,
                        "data": "Lạnh lùng đó làm bộ dạng thờ ơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 131910,
                        "endTime": 132660,
                        "data": "Nhìn anh đi em nha"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 132660,
                        "endTime": 133910,
                        "data": "Hướng nụ cười cho riêng em nha"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 133910,
                        "endTime": 134730,
                        "data": "Đơn giản là yêu "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 134730,
                        "endTime": 136800,
                        "data": "Con tim anh lên tiếng thôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 136800,
                        "endTime": 138990,
                        "data": "Cầm tay anh dựa vai anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 139469,
                        "endTime": 139489,
                        "data": "Kề"
                    },
                    {
                        "startTime": 139489,
                        "endTime": 139519,
                        "data": "bên"
                    },
                    {
                        "startTime": 139519,
                        "endTime": 139539,
                        "data": "anh"
                    },
                    {
                        "startTime": 139539,
                        "endTime": 139569,
                        "data": "nơi"
                    },
                    {
                        "startTime": 139569,
                        "endTime": 139599,
                        "data": "này"
                    },
                    {
                        "startTime": 140479,
                        "endTime": 140779,
                        "data": "có"
                    },
                    {
                        "startTime": 140779,
                        "endTime": 140990,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 141230,
                        "endTime": 142730,
                        "data": "Gió mang câu tình ca"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 142730,
                        "endTime": 143800,
                        "data": "Ngàn ánh sao vụt qua "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 143800,
                        "endTime": 146850,
                        "data": "Nhẹ ôm lấy em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 146850,
                        "endTime": 149410,
                        "data": "Cầm tay anh dựa vai anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 149410,
                        "endTime": 151660,
                        "data": "Kề bên anh nơi này có anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 151660,
                        "endTime": 153150,
                        "data": "Khép đôi mi thật lâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 153150,
                        "endTime": 154280,
                        "data": "Nguyện mãi bên cạnh nhau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 154280,
                        "endTime": 156340,
                        "data": "Yêu say đắm như ngày đầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 157080,
                        "endTime": 160270,
                        "data": "Mùa xuân đến bình yên "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 160270,
                        "endTime": 162200,
                        "data": "Cho em những giấc mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 162200,
                        "endTime": 165450,
                        "data": "Hạ lưu giữ ngày mưa "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 165450,
                        "endTime": 167380,
                        "data": "Ngọt ngào nên thơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 167380,
                        "endTime": 170690,
                        "data": "Mùa thu lá vàng rơi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 170690,
                        "endTime": 172560,
                        "data": "Đông sang anh nhớ em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 172560,
                        "endTime": 175870,
                        "data": "Tình yêu bé nhỏ xin "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 175669,
                        "endTime": 175909,
                        "data": "Dành"
                    },
                    {
                        "startTime": 176359,
                        "endTime": 176459,
                        "data": "tặng"
                    },
                    {
                        "startTime": 177369,
                        "endTime": 177399,
                        "data": "riêng"
                    },
                    {
                        "startTime": 177399,
                        "endTime": 177429,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 181470,
                        "endTime": 186650,
                        "data": "Nhớ thương em "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 186650,
                        "endTime": 189210,
                        "data": "Nhớ thương em lắm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 189210,
                        "endTime": 193450,
                        "data": "Ahhhhhhh phía sau chân trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 193450,
                        "endTime": 195450,
                        "data": "Có ai băng qua lối về "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 195450,
                        "endTime": 198070,
                        "data": "Cùng em đi trên đoạn đường dài"
                    }
                ]
            }
        ],
    
        [
            {
                "words": [
                    {
                        "startTime": 29360,
                        "endTime": 30360,
                        "data": "Người theo hương hoa "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 30360,
                        "endTime": 32420,
                        "data": "Mây mù giăng lối "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 32799,
                        "endTime": 32959,
                        "data": "Làn"
                    },
                    {
                        "startTime": 33009,
                        "endTime": 33209,
                        "data": "sương"
                    },
                    {
                        "startTime": 33229,
                        "endTime": 33499,
                        "data": "khói"
                    },
                    {
                        "startTime": 33499,
                        "endTime": 33699,
                        "data": "phôi"
                    },
                    {
                        "startTime": 33789,
                        "endTime": 33819,
                        "data": "phai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 34189,
                        "endTime": 34369,
                        "data": "Đưa"
                    },
                    {
                        "startTime": 34399,
                        "endTime": 34559,
                        "data": "bước"
                    },
                    {
                        "startTime": 34659,
                        "endTime": 34939,
                        "data": "ai"
                    },
                    {
                        "startTime": 34949,
                        "endTime": 35489,
                        "data": "xa"
                    },
                    {
                        "startTime": 35489,
                        "endTime": 35909,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 36739,
                        "endTime": 36829,
                        "data": "Đơn"
                    },
                    {
                        "startTime": 36849,
                        "endTime": 37029,
                        "data": "côi"
                    },
                    {
                        "startTime": 37640,
                        "endTime": 37669,
                        "data": "mình"
                    },
                    {
                        "startTime": 37669,
                        "endTime": 37739,
                        "data": "ta"
                    },
                    {
                        "startTime": 37739,
                        "endTime": 37890,
                        "data": "vấn"
                    },
                    {
                        "startTime": 38370,
                        "endTime": 38459,
                        "data": "vương"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 39799,
                        "endTime": 39829,
                        "data": "Hồi"
                    },
                    {
                        "startTime": 39829,
                        "endTime": 39849,
                        "data": "ức"
                    },
                    {
                        "startTime": 39909,
                        "endTime": 40169,
                        "data": "trong"
                    },
                    {
                        "startTime": 40169,
                        "endTime": 40269,
                        "data": "men"
                    },
                    {
                        "startTime": 40279,
                        "endTime": 40569,
                        "data": "say"
                    },
                    {
                        "startTime": 40569,
                        "endTime": 40799,
                        "data": "chiều"
                    },
                    {
                        "startTime": 41059,
                        "endTime": 41309,
                        "data": "mưa"
                    },
                    {
                        "startTime": 41309,
                        "endTime": 41349,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 42180,
                        "endTime": 42910,
                        "data": "Ngăn giọt lệ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 42869,
                        "endTime": 42899,
                        "data": "Ngừng"
                    },
                    {
                        "startTime": 42899,
                        "endTime": 42929,
                        "data": "khiến"
                    },
                    {
                        "startTime": 43739,
                        "endTime": 43919,
                        "data": "khóe"
                    },
                    {
                        "startTime": 43919,
                        "endTime": 43939,
                        "data": "mi"
                    },
                    {
                        "startTime": 44109,
                        "endTime": 44439,
                        "data": "sầu"
                    },
                    {
                        "startTime": 44469,
                        "endTime": 44889,
                        "data": "bi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 47039,
                        "endTime": 47069,
                        "data": "Đường"
                    },
                    {
                        "startTime": 47220,
                        "endTime": 47479,
                        "data": "xưa"
                    },
                    {
                        "startTime": 47479,
                        "endTime": 47590,
                        "data": "nơi"
                    },
                    {
                        "startTime": 47720,
                        "endTime": 47920,
                        "data": "cố"
                    },
                    {
                        "startTime": 47920,
                        "endTime": 48159,
                        "data": "nhân"
                    },
                    {
                        "startTime": 48389,
                        "endTime": 48589,
                        "data": "từ"
                    },
                    {
                        "startTime": 48799,
                        "endTime": 49299,
                        "data": "giã"
                    },
                    {
                        "startTime": 49299,
                        "endTime": 49579,
                        "data": "biệt"
                    },
                    {
                        "startTime": 49659,
                        "endTime": 49949,
                        "data": "li"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 50100,
                        "endTime": 52790,
                        "data": "Cánh hoa rụng rơi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 52790,
                        "endTime": 53600,
                        "data": "Phận duyên mong manh "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 53929,
                        "endTime": 54169,
                        "data": "Rẽ"
                    },
                    {
                        "startTime": 54169,
                        "endTime": 54269,
                        "data": "lối"
                    },
                    {
                        "startTime": 54359,
                        "endTime": 54680,
                        "data": "trong"
                    },
                    {
                        "startTime": 54680,
                        "endTime": 54710,
                        "data": "mơ"
                    },
                    {
                        "startTime": 56340,
                        "endTime": 56369,
                        "data": "ngày"
                    },
                    {
                        "startTime": 56369,
                        "endTime": 56399,
                        "data": "tương"
                    },
                    {
                        "startTime": 56399,
                        "endTime": 56429,
                        "data": "phùng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 58350,
                        "endTime": 59990,
                        "data": "Tiếng khóc cuốn theo làn gió bay "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 61050,
                        "endTime": 62100,
                        "data": "Thuyền qua sông lỡ quên "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 62100,
                        "endTime": 63820,
                        "data": "Vớt ánh trăng tàn nơi này "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 65849,
                        "endTime": 65879,
                        "data": "Trống"
                    },
                    {
                        "startTime": 65879,
                        "endTime": 65909,
                        "data": "vắng"
                    },
                    {
                        "startTime": 65909,
                        "endTime": 65939,
                        "data": "bóng"
                    },
                    {
                        "startTime": 65999,
                        "endTime": 66419,
                        "data": "ai"
                    },
                    {
                        "startTime": 66419,
                        "endTime": 66549,
                        "data": "dần"
                    },
                    {
                        "startTime": 66579,
                        "endTime": 67069,
                        "data": "hao"
                    },
                    {
                        "startTime": 67069,
                        "endTime": 67099,
                        "data": "gầy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 71650,
                        "endTime": 73200,
                        "data": "Lòng ta xin nguyện khắc ghi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 73479,
                        "endTime": 73729,
                        "data": "Trong"
                    },
                    {
                        "startTime": 73729,
                        "endTime": 74190,
                        "data": "tim"
                    },
                    {
                        "startTime": 74190,
                        "endTime": 74219,
                        "data": "tình"
                    },
                    {
                        "startTime": 74219,
                        "endTime": 74249,
                        "data": "nồng"
                    },
                    {
                        "startTime": 74249,
                        "endTime": 74269,
                        "data": "mê"
                    },
                    {
                        "startTime": 74269,
                        "endTime": 74309,
                        "data": "say"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 75189,
                        "endTime": 75259,
                        "data": "Mặc"
                    },
                    {
                        "startTime": 75699,
                        "endTime": 75889,
                        "data": "cho"
                    },
                    {
                        "startTime": 75889,
                        "endTime": 76029,
                        "data": "tóc"
                    },
                    {
                        "startTime": 76029,
                        "endTime": 76059,
                        "data": "mây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 76850,
                        "endTime": 77060,
                        "data": "Vương"
                    },
                    {
                        "startTime": 77380,
                        "endTime": 77410,
                        "data": "lên"
                    },
                    {
                        "startTime": 77410,
                        "endTime": 77470,
                        "data": "đôi"
                    },
                    {
                        "startTime": 77759,
                        "endTime": 78089,
                        "data": "môi"
                    },
                    {
                        "startTime": 78139,
                        "endTime": 78379,
                        "data": "cay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 78199,
                        "endTime": 78290,
                        "data": "Bâng"
                    },
                    {
                        "startTime": 79069,
                        "endTime": 79189,
                        "data": "khuâng"
                    },
                    {
                        "startTime": 79189,
                        "endTime": 79219,
                        "data": "mình"
                    },
                    {
                        "startTime": 79539,
                        "endTime": 79649,
                        "data": "ta"
                    },
                    {
                        "startTime": 79649,
                        "endTime": 79689,
                        "data": "lạc"
                    },
                    {
                        "startTime": 79909,
                        "endTime": 80129,
                        "data": "trôi"
                    },
                    {
                        "startTime": 80229,
                        "endTime": 80419,
                        "data": "giữa"
                    },
                    {
                        "startTime": 80419,
                        "endTime": 80579,
                        "data": "đời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 81779,
                        "endTime": 81799,
                        "data": "Ta"
                    },
                    {
                        "startTime": 81799,
                        "endTime": 82329,
                        "data": "lạc"
                    },
                    {
                        "startTime": 83479,
                        "endTime": 83779,
                        "data": "trôi"
                    },
                    {
                        "startTime": 83779,
                        "endTime": 83859,
                        "data": "giữa"
                    },
                    {
                        "startTime": 83859,
                        "endTime": 83889,
                        "data": "trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 86740,
                        "endTime": 88510,
                        "data": "Đôi chân lang thang về nơi đâu "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 88510,
                        "endTime": 90240,
                        "data": "Bao yêu thương giờ nơi đâu "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 90240,
                        "endTime": 91730,
                        "data": "Câu thơ tình xưa vội phai mờ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 91730,
                        "endTime": 93860,
                        "data": "Theo làn sương tan biến trong cõi mơ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 93860,
                        "endTime": 95550,
                        "data": "Mưa bụi vương trên làn mi mắt "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 95550,
                        "endTime": 97420,
                        "data": "Ngày chia lìa hoa rơi buồn hiu hắt "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 97420,
                        "endTime": 98240,
                        "data": "Tiếng đàn ai thêm sầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 98240,
                        "endTime": 98890,
                        "data": "Tương tư lặng mình "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 98890,
                        "endTime": 99520,
                        "data": "Trong chiều hoàng hôn "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 99520,
                        "endTime": 100950,
                        "data": "Tan vào lời ca "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 100950,
                        "endTime": 102710,
                        "data": "Lối mòn đường vắng một mình ta "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 102710,
                        "endTime": 104450,
                        "data": "Nắng chiều vàng úa nhuộm ngày qua "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 104450,
                        "endTime": 106210,
                        "data": "Xin đừng quay lưng xóa "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 106210,
                        "endTime": 108020,
                        "data": "Đừng mang câu hẹn ước kia rời xa "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 108020,
                        "endTime": 109830,
                        "data": "Yên bình nơi nào đây "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 109830,
                        "endTime": 111700,
                        "data": "Chôn vùi theo làn mây "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 114640,
                        "endTime": 115700,
                        "data": "Người theo hương hoa "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 115700,
                        "endTime": 117770,
                        "data": "Mây mù giăng lối "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 118159,
                        "endTime": 118319,
                        "data": "Làn"
                    },
                    {
                        "startTime": 118359,
                        "endTime": 118529,
                        "data": "sương"
                    },
                    {
                        "startTime": 118599,
                        "endTime": 118839,
                        "data": "khói"
                    },
                    {
                        "startTime": 118999,
                        "endTime": 119029,
                        "data": "phôi"
                    },
                    {
                        "startTime": 119029,
                        "endTime": 119059,
                        "data": "phai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 119539,
                        "endTime": 119689,
                        "data": "Đưa"
                    },
                    {
                        "startTime": 119729,
                        "endTime": 119859,
                        "data": "bước"
                    },
                    {
                        "startTime": 120180,
                        "endTime": 120300,
                        "data": "ai"
                    },
                    {
                        "startTime": 120329,
                        "endTime": 120779,
                        "data": "xa"
                    },
                    {
                        "startTime": 120779,
                        "endTime": 120809,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 122059,
                        "endTime": 122139,
                        "data": "Đơn"
                    },
                    {
                        "startTime": 122139,
                        "endTime": 122369,
                        "data": "côi"
                    },
                    {
                        "startTime": 122719,
                        "endTime": 122749,
                        "data": "mình"
                    },
                    {
                        "startTime": 122749,
                        "endTime": 123069,
                        "data": "ta"
                    },
                    {
                        "startTime": 123069,
                        "endTime": 123299,
                        "data": "vấn"
                    },
                    {
                        "startTime": 123720,
                        "endTime": 123750,
                        "data": "vương"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 125009,
                        "endTime": 125109,
                        "data": "Hồi"
                    },
                    {
                        "startTime": 125109,
                        "endTime": 125129,
                        "data": "ức"
                    },
                    {
                        "startTime": 125249,
                        "endTime": 125499,
                        "data": "trong"
                    },
                    {
                        "startTime": 125499,
                        "endTime": 125589,
                        "data": "men"
                    },
                    {
                        "startTime": 125669,
                        "endTime": 125889,
                        "data": "say"
                    },
                    {
                        "startTime": 125909,
                        "endTime": 126059,
                        "data": "chiều"
                    },
                    {
                        "startTime": 126369,
                        "endTime": 126449,
                        "data": "mưa"
                    },
                    {
                        "startTime": 126939,
                        "endTime": 127079,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 127450,
                        "endTime": 128080,
                        "data": "Ngăn giọt lệ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 128629,
                        "endTime": 128659,
                        "data": "Ngừng"
                    },
                    {
                        "startTime": 128659,
                        "endTime": 128689,
                        "data": "khiến"
                    },
                    {
                        "startTime": 129069,
                        "endTime": 129309,
                        "data": "khóe"
                    },
                    {
                        "startTime": 129309,
                        "endTime": 129439,
                        "data": "mi"
                    },
                    {
                        "startTime": 131029,
                        "endTime": 131059,
                        "data": "sầu"
                    },
                    {
                        "startTime": 131059,
                        "endTime": 131109,
                        "data": "bi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 131919,
                        "endTime": 131949,
                        "data": "Đường"
                    },
                    {
                        "startTime": 132579,
                        "endTime": 132809,
                        "data": "xưa"
                    },
                    {
                        "startTime": 132849,
                        "endTime": 133359,
                        "data": "nơi"
                    },
                    {
                        "startTime": 133359,
                        "endTime": 133379,
                        "data": "cố"
                    },
                    {
                        "startTime": 133379,
                        "endTime": 133409,
                        "data": "nhân"
                    },
                    {
                        "startTime": 134069,
                        "endTime": 134159,
                        "data": "từ"
                    },
                    {
                        "startTime": 134159,
                        "endTime": 134619,
                        "data": "giã"
                    },
                    {
                        "startTime": 134619,
                        "endTime": 134859,
                        "data": "biệt"
                    },
                    {
                        "startTime": 134859,
                        "endTime": 134879,
                        "data": "li"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 135450,
                        "endTime": 138080,
                        "data": "Cánh hoa rụng rơi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 138080,
                        "endTime": 138960,
                        "data": "Phận duyên mong manh "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 138960,
                        "endTime": 141520,
                        "data": "Rẽ lối trong mơ ngày tương phùng "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 143710,
                        "endTime": 145460,
                        "data": "Tiếng khóc cuốn theo làn gió bay "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 146390,
                        "endTime": 147460,
                        "data": "Thuyền qua sông lỡ quên "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 147460,
                        "endTime": 148890,
                        "data": "Vớt ánh trăng tàn nơi này "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 150710,
                        "endTime": 152640,
                        "data": "Trống vắng bóng ai dần hao gầy "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 156960,
                        "endTime": 158640,
                        "data": "Lòng ta xin nguyện khắc ghi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 158820,
                        "endTime": 159059,
                        "data": "Trong"
                    },
                    {
                        "startTime": 159059,
                        "endTime": 159729,
                        "data": "tim"
                    },
                    {
                        "startTime": 160329,
                        "endTime": 160359,
                        "data": "tình"
                    },
                    {
                        "startTime": 160359,
                        "endTime": 160389,
                        "data": "nồng"
                    },
                    {
                        "startTime": 160389,
                        "endTime": 160409,
                        "data": "mê"
                    },
                    {
                        "startTime": 160409,
                        "endTime": 160429,
                        "data": "say"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 161049,
                        "endTime": 161079,
                        "data": "Mặc"
                    },
                    {
                        "startTime": 161079,
                        "endTime": 161229,
                        "data": "cho"
                    },
                    {
                        "startTime": 161229,
                        "endTime": 161569,
                        "data": "tóc"
                    },
                    {
                        "startTime": 161569,
                        "endTime": 161599,
                        "data": "mây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 162169,
                        "endTime": 162389,
                        "data": "Vương"
                    },
                    {
                        "startTime": 162699,
                        "endTime": 162729,
                        "data": "lên"
                    },
                    {
                        "startTime": 162729,
                        "endTime": 162799,
                        "data": "đôi"
                    },
                    {
                        "startTime": 162799,
                        "endTime": 162829,
                        "data": "môi"
                    },
                    {
                        "startTime": 163039,
                        "endTime": 163179,
                        "data": "cay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 163970,
                        "endTime": 167520,
                        "data": "Bâng khuâng mình ta lạc trôi giữa đời "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 167520,
                        "endTime": 170080,
                        "data": "Ta lạc trôi giữa trời "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 174580,
                        "endTime": 176730,
                        "data": "Ta lạc trôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 178699,
                        "endTime": 179159,
                        "data": "Ta"
                    },
                    {
                        "startTime": 179399,
                        "endTime": 179539,
                        "data": "lạc"
                    },
                    {
                        "startTime": 179549,
                        "endTime": 179929,
                        "data": "trôi"
                    },
                    {
                        "startTime": 179929,
                        "endTime": 180010,
                        "data": "giữa"
                    },
                    {
                        "startTime": 180129,
                        "endTime": 180499,
                        "data": "đời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 182909,
                        "endTime": 183110,
                        "data": "Lạc"
                    },
                    {
                        "startTime": 183120,
                        "endTime": 183519,
                        "data": "trôi"
                    },
                    {
                        "startTime": 183519,
                        "endTime": 183670,
                        "data": "giữa"
                    },
                    {
                        "startTime": 183670,
                        "endTime": 184120,
                        "data": "trời"
                    }
                ]
            }
        ],
        [
            {
                "words": [
                    {
                        "startTime": 11639,
                        "endTime": 11789,
                        "data": "Liệu"
                    },
                    {
                        "startTime": 11789,
                        "endTime": 12069,
                        "data": "rằng"
                    },
                    {
                        "startTime": 12079,
                        "endTime": 12319,
                        "data": "chia"
                    },
                    {
                        "startTime": 12319,
                        "endTime": 12439,
                        "data": "tay"
                    },
                    {
                        "startTime": 12749,
                        "endTime": 12779,
                        "data": "trong"
                    },
                    {
                        "startTime": 12779,
                        "endTime": 12799,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 13259,
                        "endTime": 13469,
                        "data": "Có"
                    },
                    {
                        "startTime": 13469,
                        "endTime": 13669,
                        "data": "quên"
                    },
                    {
                        "startTime": 13669,
                        "endTime": 13909,
                        "data": "được"
                    },
                    {
                        "startTime": 13919,
                        "endTime": 14109,
                        "data": "câu"
                    },
                    {
                        "startTime": 14109,
                        "endTime": 14319,
                        "data": "ca"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 14530,
                        "endTime": 15030,
                        "data": " Tình yêu khi xưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 15239,
                        "endTime": 15379,
                        "data": "Em"
                    },
                    {
                        "startTime": 15379,
                        "endTime": 15509,
                        "data": "trao"
                    },
                    {
                        "startTime": 15519,
                        "endTime": 15689,
                        "data": "cho"
                    },
                    {
                        "startTime": 15689,
                        "endTime": 15839,
                        "data": "anh"
                    },
                    {
                        "startTime": 15839,
                        "endTime": 15999,
                        "data": "đâu"
                    },
                    {
                        "startTime": 16019,
                        "endTime": 16259,
                        "data": "nào"
                    },
                    {
                        "startTime": 16269,
                        "endTime": 16449,
                        "data": "phôi"
                    },
                    {
                        "startTime": 16449,
                        "endTime": 16469,
                        "data": "pha"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 16910,
                        "endTime": 17099,
                        "data": "Đừng"
                    },
                    {
                        "startTime": 17099,
                        "endTime": 17209,
                        "data": "lừa"
                    },
                    {
                        "startTime": 17209,
                        "endTime": 17470,
                        "data": "dối"
                    },
                    {
                        "startTime": 17470,
                        "endTime": 17639,
                        "data": "con"
                    },
                    {
                        "startTime": 17639,
                        "endTime": 17729,
                        "data": "tim"
                    },
                    {
                        "startTime": 17729,
                        "endTime": 17759,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 18009,
                        "endTime": 18209,
                        "data": "Em"
                    },
                    {
                        "startTime": 18209,
                        "endTime": 18419,
                        "data": "sẽ"
                    },
                    {
                        "startTime": 18419,
                        "endTime": 18670,
                        "data": "không"
                    },
                    {
                        "startTime": 18670,
                        "endTime": 18860,
                        "data": "buông"
                    },
                    {
                        "startTime": 18870,
                        "endTime": 19159,
                        "data": "tay"
                    },
                    {
                        "startTime": 19159,
                        "endTime": 19240,
                        "data": "anh"
                    },
                    {
                        "startTime": 19240,
                        "endTime": 19530,
                        "data": "được"
                    },
                    {
                        "startTime": 19530,
                        "endTime": 19909,
                        "data": "đâu"
                    },
                    {
                        "startTime": 19909,
                        "endTime": 19929,
                        "data": "mà"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 21660,
                        "endTime": 21819,
                        "data": "Gạt"
                    },
                    {
                        "startTime": 21839,
                        "endTime": 22019,
                        "data": "nước"
                    },
                    {
                        "startTime": 22019,
                        "endTime": 22289,
                        "data": "mắt"
                    },
                    {
                        "startTime": 22289,
                        "endTime": 22379,
                        "data": "yếu"
                    },
                    {
                        "startTime": 22379,
                        "endTime": 22409,
                        "data": "đuối"
                    },
                    {
                        "startTime": 22409,
                        "endTime": 22429,
                        "data": "đó"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 22810,
                        "endTime": 22999,
                        "data": "Cứ"
                    },
                    {
                        "startTime": 22999,
                        "endTime": 23219,
                        "data": "quay"
                    },
                    {
                        "startTime": 23219,
                        "endTime": 23519,
                        "data": "lại"
                    },
                    {
                        "startTime": 23519,
                        "endTime": 23669,
                        "data": "nơi"
                    },
                    {
                        "startTime": 23669,
                        "endTime": 23689,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 24070,
                        "endTime": 24249,
                        "data": "Em"
                    },
                    {
                        "startTime": 24249,
                        "endTime": 24279,
                        "data": "biết"
                    },
                    {
                        "startTime": 24279,
                        "endTime": 24309,
                        "data": "rằng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 24599,
                        "endTime": 24849,
                        "data": "Cơn"
                    },
                    {
                        "startTime": 24849,
                        "endTime": 24949,
                        "data": "mưa"
                    },
                    {
                        "startTime": 24959,
                        "endTime": 25179,
                        "data": "qua"
                    },
                    {
                        "startTime": 25179,
                        "endTime": 25259,
                        "data": "đâu"
                    },
                    {
                        "startTime": 25309,
                        "endTime": 25429,
                        "data": "có"
                    },
                    {
                        "startTime": 25429,
                        "endTime": 25529,
                        "data": "che"
                    },
                    {
                        "startTime": 25529,
                        "endTime": 25559,
                        "data": "lấp"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 25889,
                        "endTime": 26059,
                        "data": "Được"
                    },
                    {
                        "startTime": 26059,
                        "endTime": 26170,
                        "data": "nụ"
                    },
                    {
                        "startTime": 26209,
                        "endTime": 26369,
                        "data": "cười"
                    },
                    {
                        "startTime": 26409,
                        "endTime": 26620,
                        "data": "đau"
                    },
                    {
                        "startTime": 26620,
                        "endTime": 26850,
                        "data": "thương"
                    },
                    {
                        "startTime": 26850,
                        "endTime": 26910,
                        "data": "kia"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 27379,
                        "endTime": 27579,
                        "data": "Nước"
                    },
                    {
                        "startTime": 27579,
                        "endTime": 27729,
                        "data": "mắt"
                    },
                    {
                        "startTime": 27729,
                        "endTime": 27869,
                        "data": "đó"
                    },
                    {
                        "startTime": 27869,
                        "endTime": 28009,
                        "data": "vẫn"
                    },
                    {
                        "startTime": 28019,
                        "endTime": 28369,
                        "data": "rơi"
                    },
                    {
                        "startTime": 28369,
                        "endTime": 28389,
                        "data": "vì"
                    },
                    {
                        "startTime": 28389,
                        "endTime": 28409,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 28550,
                        "endTime": 30680,
                        "data": " Oh baby"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 30749,
                        "endTime": 31099,
                        "data": "Đừng"
                    },
                    {
                        "startTime": 31099,
                        "endTime": 31219,
                        "data": "nhìn"
                    },
                    {
                        "startTime": 31389,
                        "endTime": 31659,
                        "data": "anh"
                    },
                    {
                        "startTime": 31659,
                        "endTime": 31949,
                        "data": "nữa"
                    },
                    {
                        "startTime": 31949,
                        "endTime": 32099,
                        "data": "đôi"
                    },
                    {
                        "startTime": 32099,
                        "endTime": 32369,
                        "data": "mắt"
                    },
                    {
                        "startTime": 32369,
                        "endTime": 32569,
                        "data": "ngày"
                    },
                    {
                        "startTime": 32579,
                        "endTime": 32939,
                        "data": "xưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 33319,
                        "endTime": 33499,
                        "data": "Giờ"
                    },
                    {
                        "startTime": 33949,
                        "endTime": 33959,
                        "data": "ở"
                    },
                    {
                        "startTime": 33959,
                        "endTime": 33989,
                        "data": "đâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 34089,
                        "endTime": 34109,
                        "data": "Em"
                    },
                    {
                        "startTime": 34429,
                        "endTime": 34619,
                        "data": "còn"
                    },
                    {
                        "startTime": 34759,
                        "endTime": 35100,
                        "data": "là"
                    },
                    {
                        "startTime": 35110,
                        "endTime": 35399,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 35799,
                        "endTime": 35969,
                        "data": "Em"
                    },
                    {
                        "startTime": 35969,
                        "endTime": 36069,
                        "data": "đã"
                    },
                    {
                        "startTime": 36069,
                        "endTime": 36349,
                        "data": "khác"
                    },
                    {
                        "startTime": 36349,
                        "endTime": 36649,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 36990,
                        "endTime": 37199,
                        "data": "Em"
                    },
                    {
                        "startTime": 37199,
                        "endTime": 37449,
                        "data": "muốn"
                    },
                    {
                        "startTime": 37449,
                        "endTime": 37609,
                        "data": "quay"
                    },
                    {
                        "startTime": 37609,
                        "endTime": 37859,
                        "data": "lưng"
                    },
                    {
                        "startTime": 37869,
                        "endTime": 38229,
                        "data": "quên"
                    },
                    {
                        "startTime": 38229,
                        "endTime": 38459,
                        "data": "hết"
                    },
                    {
                        "startTime": 39350,
                        "endTime": 39899,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 40089,
                        "endTime": 40599,
                        "data": "Tình"
                    },
                    {
                        "startTime": 40609,
                        "endTime": 40799,
                        "data": "yêu"
                    },
                    {
                        "startTime": 40799,
                        "endTime": 41239,
                        "data": "trong"
                    },
                    {
                        "startTime": 41249,
                        "endTime": 41479,
                        "data": "em"
                    },
                    {
                        "startTime": 41479,
                        "endTime": 41649,
                        "data": "giờ"
                    },
                    {
                        "startTime": 41649,
                        "endTime": 41979,
                        "data": "toàn"
                    },
                    {
                        "startTime": 41979,
                        "endTime": 42209,
                        "data": "giả"
                    },
                    {
                        "startTime": 42209,
                        "endTime": 42349,
                        "data": "dối"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 42719,
                        "endTime": 42969,
                        "data": "Anh"
                    },
                    {
                        "startTime": 42979,
                        "endTime": 43429,
                        "data": "không"
                    },
                    {
                        "startTime": 43429,
                        "endTime": 43459,
                        "data": "muốn"
                    },
                    {
                        "startTime": 43459,
                        "endTime": 43489,
                        "data": "vùi"
                    },
                    {
                        "startTime": 44079,
                        "endTime": 44329,
                        "data": "mình"
                    },
                    {
                        "startTime": 44329,
                        "endTime": 44719,
                        "data": "trong"
                    },
                    {
                        "startTime": 44829,
                        "endTime": 44849,
                        "data": "mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 45139,
                        "endTime": 45339,
                        "data": "Anh"
                    },
                    {
                        "startTime": 45349,
                        "endTime": 45489,
                        "data": "không"
                    },
                    {
                        "startTime": 45959,
                        "endTime": 45989,
                        "data": "muốn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 45690,
                        "endTime": 45709,
                        "data": "Đi"
                    },
                    {
                        "startTime": 46409,
                        "endTime": 46709,
                        "data": "tìm"
                    },
                    {
                        "startTime": 46879,
                        "endTime": 47099,
                        "data": "giấc"
                    },
                    {
                        "startTime": 47109,
                        "endTime": 47489,
                        "data": "mơ"
                    },
                    {
                        "startTime": 47489,
                        "endTime": 47769,
                        "data": "ngày"
                    },
                    {
                        "startTime": 47769,
                        "endTime": 48309,
                        "data": "hôm"
                    },
                    {
                        "startTime": 48309,
                        "endTime": 48429,
                        "data": "nao"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 48590,
                        "endTime": 48970,
                        "data": " Đừng vội vàng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 49359,
                        "endTime": 49460,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 49460,
                        "endTime": 49629,
                        "data": "là"
                    },
                    {
                        "startTime": 49639,
                        "endTime": 49899,
                        "data": "em"
                    },
                    {
                        "startTime": 49899,
                        "endTime": 50180,
                        "data": "của"
                    },
                    {
                        "startTime": 50180,
                        "endTime": 50380,
                        "data": "ngày"
                    },
                    {
                        "startTime": 50380,
                        "endTime": 50580,
                        "data": "hôm"
                    },
                    {
                        "startTime": 52440,
                        "endTime": 52580,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 54150,
                        "endTime": 54179,
                        "data": "Xin"
                    },
                    {
                        "startTime": 54179,
                        "endTime": 54259,
                        "data": "hãy"
                    },
                    {
                        "startTime": 54259,
                        "endTime": 54379,
                        "data": "là"
                    },
                    {
                        "startTime": 54389,
                        "endTime": 54699,
                        "data": "em"
                    },
                    {
                        "startTime": 54709,
                        "endTime": 54919,
                        "data": "của"
                    },
                    {
                        "startTime": 54979,
                        "endTime": 55179,
                        "data": "ngày"
                    },
                    {
                        "startTime": 55179,
                        "endTime": 55389,
                        "data": "hôm"
                    },
                    {
                        "startTime": 57369,
                        "endTime": 57539,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 59009,
                        "endTime": 59039,
                        "data": "Đừng"
                    },
                    {
                        "startTime": 59039,
                        "endTime": 59059,
                        "data": "bỏ"
                    },
                    {
                        "startTime": 59059,
                        "endTime": 59099,
                        "data": "mặc"
                    },
                    {
                        "startTime": 59199,
                        "endTime": 59489,
                        "data": "anh"
                    },
                    {
                        "startTime": 59499,
                        "endTime": 59710,
                        "data": "một"
                    },
                    {
                        "startTime": 59769,
                        "endTime": 59979,
                        "data": "mình"
                    },
                    {
                        "startTime": 59979,
                        "endTime": 60129,
                        "data": "nơi"
                    },
                    {
                        "startTime": 60249,
                        "endTime": 61139,
                        "data": "đây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 63350,
                        "endTime": 79340,
                        "data": " Dừng lại và xoá nhẹ đi kí ức"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 79529,
                        "endTime": 79830,
                        "data": "Nhắm"
                    },
                    {
                        "startTime": 80070,
                        "endTime": 80360,
                        "data": "mắt"
                    },
                    {
                        "startTime": 80770,
                        "endTime": 80849,
                        "data": "lại"
                    },
                    {
                        "startTime": 81060,
                        "endTime": 81319,
                        "data": "hãy"
                    },
                    {
                        "startTime": 81329,
                        "endTime": 81809,
                        "data": "nghĩ"
                    },
                    {
                        "startTime": 81809,
                        "endTime": 81829,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 82769,
                        "endTime": 82919,
                        "data": "Lâu"
                    },
                    {
                        "startTime": 82919,
                        "endTime": 83020,
                        "data": "nay"
                    },
                    {
                        "startTime": 83020,
                        "endTime": 83139,
                        "data": "em"
                    },
                    {
                        "startTime": 83139,
                        "endTime": 83450,
                        "data": "sống"
                    },
                    {
                        "startTime": 83450,
                        "endTime": 83749,
                        "data": "cho"
                    },
                    {
                        "startTime": 83749,
                        "endTime": 84090,
                        "data": "mình"
                    },
                    {
                        "startTime": 84090,
                        "endTime": 84129,
                        "data": "em"
                    },
                    {
                        "startTime": 84379,
                        "endTime": 84709,
                        "data": "mà"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 84420,
                        "endTime": 84449,
                        "data": "Phải"
                    },
                    {
                        "startTime": 85340,
                        "endTime": 85600,
                        "data": "không"
                    },
                    {
                        "startTime": 85609,
                        "endTime": 86030,
                        "data": "em"
                    },
                    {
                        "startTime": 86030,
                        "endTime": 86459,
                        "data": "hỡi"
                    },
                    {
                        "startTime": 86459,
                        "endTime": 86789,
                        "data": "người"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 89400,
                        "endTime": 89560,
                        "data": "Tìm"
                    },
                    {
                        "startTime": 89560,
                        "endTime": 89669,
                        "data": "lại"
                    },
                    {
                        "startTime": 89669,
                        "endTime": 89799,
                        "data": "thời"
                    },
                    {
                        "startTime": 89819,
                        "endTime": 90090,
                        "data": "gian"
                    },
                    {
                        "startTime": 90090,
                        "endTime": 90340,
                        "data": "của"
                    },
                    {
                        "startTime": 90399,
                        "endTime": 90529,
                        "data": "riêng"
                    },
                    {
                        "startTime": 90840,
                        "endTime": 90969,
                        "data": "đôi"
                    },
                    {
                        "startTime": 91259,
                        "endTime": 91449,
                        "data": "ta"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 91770,
                        "endTime": 91819,
                        "data": "Nhưng"
                    },
                    {
                        "startTime": 91859,
                        "endTime": 92019,
                        "data": "sao"
                    },
                    {
                        "startTime": 92019,
                        "endTime": 92239,
                        "data": "trong"
                    },
                    {
                        "startTime": 92249,
                        "endTime": 92499,
                        "data": "anh"
                    },
                    {
                        "startTime": 92499,
                        "endTime": 92759,
                        "data": "đã"
                    },
                    {
                        "startTime": 92759,
                        "endTime": 93220,
                        "data": "quá"
                    },
                    {
                        "startTime": 93220,
                        "endTime": 93590,
                        "data": "tuyệt"
                    },
                    {
                        "startTime": 93639,
                        "endTime": 94039,
                        "data": "vọng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 94960,
                        "endTime": 95200,
                        "data": "Sự"
                    },
                    {
                        "startTime": 95200,
                        "endTime": 95289,
                        "data": "thật"
                    },
                    {
                        "startTime": 95289,
                        "endTime": 95319,
                        "data": "đang"
                    },
                    {
                        "startTime": 95329,
                        "endTime": 95810,
                        "data": "bủa"
                    },
                    {
                        "startTime": 95820,
                        "endTime": 96090,
                        "data": "vây"
                    },
                    {
                        "startTime": 96090,
                        "endTime": 96379,
                        "data": "nơi"
                    },
                    {
                        "startTime": 96389,
                        "endTime": 96760,
                        "data": "anh"
                    },
                    {
                        "startTime": 96970,
                        "endTime": 97330,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 97790,
                        "endTime": 100300,
                        "data": " Đừng nhìn anh nữa đôi mắt ngày xưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 99879,
                        "endTime": 99899,
                        "data": "Giờ"
                    },
                    {
                        "startTime": 99899,
                        "endTime": 99909,
                        "data": "ở"
                    },
                    {
                        "startTime": 101170,
                        "endTime": 101450,
                        "data": "đâu,"
                    },
                    {
                        "startTime": 101450,
                        "endTime": 101470,
                        "data": "em"
                    },
                    {
                        "startTime": 101620,
                        "endTime": 101800,
                        "data": "còn"
                    },
                    {
                        "startTime": 101940,
                        "endTime": 102220,
                        "data": "là"
                    },
                    {
                        "startTime": 102220,
                        "endTime": 102290,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 102979,
                        "endTime": 103119,
                        "data": "Em"
                    },
                    {
                        "startTime": 103119,
                        "endTime": 103449,
                        "data": "đã"
                    },
                    {
                        "startTime": 103449,
                        "endTime": 103479,
                        "data": "khác"
                    },
                    {
                        "startTime": 103479,
                        "endTime": 103539,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 104169,
                        "endTime": 104389,
                        "data": "Em"
                    },
                    {
                        "startTime": 104389,
                        "endTime": 104459,
                        "data": "muốn"
                    },
                    {
                        "startTime": 104459,
                        "endTime": 104539,
                        "data": "quay"
                    },
                    {
                        "startTime": 104749,
                        "endTime": 105029,
                        "data": "lưng"
                    },
                    {
                        "startTime": 105089,
                        "endTime": 105419,
                        "data": "quên"
                    },
                    {
                        "startTime": 105419,
                        "endTime": 105869,
                        "data": "hết"
                    },
                    {
                        "startTime": 106489,
                        "endTime": 107029,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 107500,
                        "endTime": 107789,
                        "data": "Tình"
                    },
                    {
                        "startTime": 107789,
                        "endTime": 107990,
                        "data": "yêu"
                    },
                    {
                        "startTime": 107990,
                        "endTime": 108370,
                        "data": "trong"
                    },
                    {
                        "startTime": 108379,
                        "endTime": 108639,
                        "data": "em"
                    },
                    {
                        "startTime": 108639,
                        "endTime": 108709,
                        "data": "giờ"
                    },
                    {
                        "startTime": 108709,
                        "endTime": 108749,
                        "data": "toàn"
                    },
                    {
                        "startTime": 109229,
                        "endTime": 109379,
                        "data": "giả"
                    },
                    {
                        "startTime": 109379,
                        "endTime": 109599,
                        "data": "dối"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 109849,
                        "endTime": 110149,
                        "data": "Anh"
                    },
                    {
                        "startTime": 110149,
                        "endTime": 110689,
                        "data": "không"
                    },
                    {
                        "startTime": 110689,
                        "endTime": 110719,
                        "data": "muốn"
                    },
                    {
                        "startTime": 110719,
                        "endTime": 110779,
                        "data": "vùi"
                    },
                    {
                        "startTime": 111249,
                        "endTime": 111499,
                        "data": "mình"
                    },
                    {
                        "startTime": 111499,
                        "endTime": 111809,
                        "data": "trong"
                    },
                    {
                        "startTime": 111809,
                        "endTime": 111829,
                        "data": "mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 112239,
                        "endTime": 112599,
                        "data": "Anh"
                    },
                    {
                        "startTime": 113019,
                        "endTime": 113049,
                        "data": "không"
                    },
                    {
                        "startTime": 113049,
                        "endTime": 113079,
                        "data": "muốn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 113459,
                        "endTime": 113579,
                        "data": "Đi"
                    },
                    {
                        "startTime": 113589,
                        "endTime": 114019,
                        "data": "tìm"
                    },
                    {
                        "startTime": 114019,
                        "endTime": 114339,
                        "data": "giấc"
                    },
                    {
                        "startTime": 114339,
                        "endTime": 114630,
                        "data": "mơ"
                    },
                    {
                        "startTime": 114630,
                        "endTime": 114950,
                        "data": "ngày"
                    },
                    {
                        "startTime": 114950,
                        "endTime": 115199,
                        "data": "hôm"
                    },
                    {
                        "startTime": 115729,
                        "endTime": 115759,
                        "data": "nao"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 115890,
                        "endTime": 116390,
                        "data": " Đừng vội vàng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 115960,
                        "endTime": 115989,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 115989,
                        "endTime": 116009,
                        "data": "là"
                    },
                    {
                        "startTime": 116809,
                        "endTime": 117079,
                        "data": "em"
                    },
                    {
                        "startTime": 117079,
                        "endTime": 117339,
                        "data": "của"
                    },
                    {
                        "startTime": 117339,
                        "endTime": 117399,
                        "data": "ngày"
                    },
                    {
                        "startTime": 118389,
                        "endTime": 118529,
                        "data": "hôm"
                    },
                    {
                        "startTime": 119359,
                        "endTime": 119419,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 120880,
                        "endTime": 125630,
                        "data": " Xin hãy là em của ngày hôm qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 125599,
                        "endTime": 125629,
                        "data": "Đừng"
                    },
                    {
                        "startTime": 126059,
                        "endTime": 126350,
                        "data": "bỏ"
                    },
                    {
                        "startTime": 126350,
                        "endTime": 126380,
                        "data": "mặc"
                    },
                    {
                        "startTime": 126389,
                        "endTime": 126559,
                        "data": "anh"
                    },
                    {
                        "startTime": 126559,
                        "endTime": 126589,
                        "data": "một"
                    },
                    {
                        "startTime": 126589,
                        "endTime": 126619,
                        "data": "mình"
                    },
                    {
                        "startTime": 127119,
                        "endTime": 127219,
                        "data": "nơi"
                    },
                    {
                        "startTime": 127419,
                        "endTime": 128149,
                        "data": "đây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 130640,
                        "endTime": 154580,
                        "data": " Dừng lại và xoá nhẹ đi kí ức"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 154569,
                        "endTime": 154859,
                        "data": "Người"
                    },
                    {
                        "startTime": 154859,
                        "endTime": 155119,
                        "data": "cứ"
                    },
                    {
                        "startTime": 155609,
                        "endTime": 155729,
                        "data": "vội"
                    },
                    {
                        "startTime": 155729,
                        "endTime": 156079,
                        "data": "vàng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 155899,
                        "endTime": 155929,
                        "data": "Người"
                    },
                    {
                        "startTime": 156969,
                        "endTime": 157269,
                        "data": "cứ"
                    },
                    {
                        "startTime": 157269,
                        "endTime": 157699,
                        "data": "vội"
                    },
                    {
                        "startTime": 157699,
                        "endTime": 157879,
                        "data": "vàng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 160909,
                        "endTime": 160939,
                        "data": "Nhìn"
                    },
                    {
                        "startTime": 161680,
                        "endTime": 161940,
                        "data": "anh"
                    },
                    {
                        "startTime": 161940,
                        "endTime": 162270,
                        "data": "đi,"
                    },
                    {
                        "startTime": 162500,
                        "endTime": 162649,
                        "data": "nhìn"
                    },
                    {
                        "startTime": 162659,
                        "endTime": 162909,
                        "data": "anh"
                    },
                    {
                        "startTime": 162909,
                        "endTime": 163159,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 163529,
                        "endTime": 163589,
                        "data": "Về"
                    },
                    {
                        "startTime": 163589,
                        "endTime": 163789,
                        "data": "nơi"
                    },
                    {
                        "startTime": 163789,
                        "endTime": 164009,
                        "data": "đâu"
                    },
                    {
                        "startTime": 164009,
                        "endTime": 164159,
                        "data": "khi"
                    },
                    {
                        "startTime": 164159,
                        "endTime": 164249,
                        "data": "mà"
                    },
                    {
                        "startTime": 164249,
                        "endTime": 164279,
                        "data": "người"
                    },
                    {
                        "startTime": 164279,
                        "endTime": 164329,
                        "data": "anh"
                    },
                    {
                        "startTime": 164509,
                        "endTime": 164709,
                        "data": "yêu"
                    },
                    {
                        "startTime": 164709,
                        "endTime": 164739,
                        "data": "dấu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 164449,
                        "endTime": 164469,
                        "data": "Đã"
                    },
                    {
                        "startTime": 164469,
                        "endTime": 164489,
                        "data": "vừa"
                    },
                    {
                        "startTime": 164489,
                        "endTime": 164529,
                        "data": "quên"
                    },
                    {
                        "startTime": 165729,
                        "endTime": 166019,
                        "data": "đi,"
                    },
                    {
                        "startTime": 166379,
                        "endTime": 166399,
                        "data": "vừa"
                    },
                    {
                        "startTime": 166399,
                        "endTime": 166679,
                        "data": "quên"
                    },
                    {
                        "startTime": 166679,
                        "endTime": 166979,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 167360,
                        "endTime": 167439,
                        "data": "Bờ"
                    },
                    {
                        "startTime": 167439,
                        "endTime": 167569,
                        "data": "vai"
                    },
                    {
                        "startTime": 167569,
                        "endTime": 167870,
                        "data": "anh"
                    },
                    {
                        "startTime": 167870,
                        "endTime": 167990,
                        "data": "như"
                    },
                    {
                        "startTime": 167990,
                        "endTime": 168059,
                        "data": "đang"
                    },
                    {
                        "startTime": 168059,
                        "endTime": 168069,
                        "data": "ở"
                    },
                    {
                        "startTime": 168069,
                        "endTime": 168149,
                        "data": "gần"
                    },
                    {
                        "startTime": 168549,
                        "endTime": 168569,
                        "data": "em"
                    },
                    {
                        "startTime": 168569,
                        "endTime": 168589,
                        "data": "đó"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 168889,
                        "endTime": 169099,
                        "data": "Biết"
                    },
                    {
                        "startTime": 169099,
                        "endTime": 169269,
                        "data": "ngày"
                    },
                    {
                        "startTime": 169269,
                        "endTime": 169489,
                        "data": "qua"
                    },
                    {
                        "startTime": 169489,
                        "endTime": 169800,
                        "data": "mau,"
                    },
                    {
                        "startTime": 170180,
                        "endTime": 170210,
                        "data": "ngày"
                    },
                    {
                        "startTime": 170210,
                        "endTime": 170469,
                        "data": "qua"
                    },
                    {
                        "startTime": 170469,
                        "endTime": 170639,
                        "data": "mau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 170399,
                        "endTime": 170429,
                        "data": "Giọt"
                    },
                    {
                        "startTime": 171159,
                        "endTime": 171329,
                        "data": "nước"
                    },
                    {
                        "startTime": 171419,
                        "endTime": 171639,
                        "data": "mắt"
                    },
                    {
                        "startTime": 171639,
                        "endTime": 171669,
                        "data": "vẫn"
                    },
                    {
                        "startTime": 171669,
                        "endTime": 171699,
                        "data": "lăn"
                    },
                    {
                        "startTime": 171699,
                        "endTime": 171729,
                        "data": "dài"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 171419,
                        "endTime": 171449,
                        "data": "Trên"
                    },
                    {
                        "startTime": 172119,
                        "endTime": 172329,
                        "data": "đôi"
                    },
                    {
                        "startTime": 172329,
                        "endTime": 172669,
                        "data": "mi"
                    },
                    {
                        "startTime": 172669,
                        "endTime": 172689,
                        "data": "ấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 172789,
                        "endTime": 172849,
                        "data": "Đập"
                    },
                    {
                        "startTime": 173089,
                        "endTime": 173309,
                        "data": "tan"
                    },
                    {
                        "startTime": 173309,
                        "endTime": 173679,
                        "data": "đi,"
                    },
                    {
                        "startTime": 173679,
                        "endTime": 173749,
                        "data": "đập"
                    },
                    {
                        "startTime": 173749,
                        "endTime": 174259,
                        "data": "tan"
                    },
                    {
                        "startTime": 174289,
                        "endTime": 174549,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 174680,
                        "endTime": 175680,
                        "data": " Là cơn đau anh xin gửi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 175680,
                        "endTime": 206310,
                        "data": " Trọn mai sau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 206310,
                        "endTime": 221550,
                        "data": " Em của ngày hôm qua"
                    }
                ]
            }
        ]
   ]
`;

var lyricsObj = JSON.parse(lyrics);
function renderLyrics(lyricsSong) {
  ulLyric.innerHTML = "";
  lyricsSong.forEach((lyric) => {
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
}

function checkWordsInLyric() {
  var lyricItems = $$(".lyric-items");
  var liLyricCurrent = [...lyricItems].find((lyricItem) => {
    return (
      audio.currentTime >= Number(lyricItem.dataset.timeStart) / 1000 &&
      audio.currentTime <= Number(lyricItem.dataset.timeEnd) / 1000
    );
  });
  if (liLyricCurrent) {
    lyricItems.forEach((lyricItem) => lyricItem.classList.remove("is-active"));
    liLyricCurrent.classList.add("is-active");
    liLyricCurrent.scrollIntoView();
  }
  if (!liLyricCurrent) {
    var li = null;
    [...lyricItems].forEach((lyricItem) => {
      if (audio.currentTime > Number(lyricItem.dataset.timeEnd) / 1000) {
        li = lyricItem;
        return;
      }
    });
    if (li) {
      lyricItems.forEach((lyricItem) =>
        lyricItem.classList.remove("is-active")
      );
      li.classList.add("is-active");
      li.scrollIntoView();
    }
  }
  console.log(audio.currentTime);
  console.log([...lyricItems][0].dataset.timeStart / 1000);
  if (audio.currentTime < [...lyricItems][0].dataset.timeStart / 1000) {
    console.log("vao kh");
    ulLyric.scroll(0, 0);
    lyricItems.forEach((lyricItem) => lyricItem.classList.remove("is-active"));
  }
}

btnKaraoke.addEventListener("click", function (e) {
  karaoke.classList.toggle("is-show");
});
renderLyrics(lyricsObj[index]);
btnKaraokeHidden.addEventListener("click", function (e) {
  karaoke.classList.remove("is-show");
});
