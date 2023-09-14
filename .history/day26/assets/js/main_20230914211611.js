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
const divLyric = $(".lyric");
var wordObjPrev = null;
var isDrag = false;
var index = 0;
var isRepeat = false;
var isRandom = false;
var timerewindSong = 0;
var totalTime = audio.duration;
var indexPrev;
var lyricPrev = null;

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
  {
    nameSong: "Đừng Về Trễ",
    path: "./assets/music/dung-ve-tre.mp3",
    img: "./assets/imgs/dung-ve-tre.jpg",
    view: "13,232,230",
    durationTime: "4:24",
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
  //   renderLyrics(lyricsObj[index]);
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
  //   checkWordsInLyric();
  checkWordsInLyric(lyricsObj[index]);
});

audio.addEventListener("ended", function (e) {
  setTimeout(function () {
    progress.style.width = 0;
    currentTime.innerHTML = `0:00`;
  }, 500);
  if (isRepeat) {
    audio.play();
    divLyric.scroll(0, 0);
    lyricItems.forEach((lyricItem) => lyricItem.classList.remove("is-active"));
  }
  if (isRandom) {
    songRandom();
  }
  if (!isRandom && !isRepeat) {
    btnNext.click();
    textValue.innerHTML = songs[index].durationTime;
  }
  renderPreludeMusic();
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
    // checkWordsInLyric(lyricsObj[index]);
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
    // checkWordsInLyric(lyricsObj[index]);
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
    // renderLyrics(lyricsObj[index]);
  });
});
var lyricsObj = JSON.parse(lyrics);
const renderPreludeMusic = function () {
  divLyric.innerHTML = "";
  var descTop = document.createElement("p");
  var descBottom = document.createElement("p");
  descTop.innerHTML = `Bài Hát: ${songs[index].nameSong}`;
  descBottom.innerHTML = `Ca Sĩ: Sơn Tùng`;
  divLyric.appendChild(descTop);
  divLyric.appendChild(descBottom);
};
renderPreludeMusic();
var pagePre;
var number = 2;
function checkWordsInLyric(lyricsSong) {
  var lyricsCurrentIndex = lyricsSong.findIndex((lyric) => {
    return (
      audio.currentTime >= lyric.words[0].startTime / 1000 &&
      audio.currentTime <= lyric.words[lyric.words.length - 1].endTime / 1000
    );
  });
  if (lyricsCurrentIndex !== -1) {
    /**  page 1  => index : 0 -1;
     *    page 2 => index : 2 -3;
     *     index : (page - 1) * 2;
     *  */

    var page = Math.floor(lyricsCurrentIndex / 2 + 1);
    handleColor(audio.currentTime);
    if (page !== pagePre) {
      divLyric.innerHTML = "";
      var offset = (page - 1) * 2;
      for (var i = offset; i < offset + number; i++) {
        var desc = document.createElement("p");
        if (i < lyricsSong.length) {
          lyricsSong[i].words.forEach((wordItem) => {
            var span = document.createElement("span");
            var spanInner = document.createElement("span");
            span.className = "word";
            span.innerHTML = wordItem.data;
            span.setAttribute("data-start-time", wordItem.startTime);
            span.setAttribute("data-end-time", wordItem.endTime);
            spanInner.innerHTML = wordItem.data;
            span.appendChild(spanInner);
            desc.appendChild(span);
          });
          divLyric.appendChild(desc);
        }
      }
      pagePre = page;
    }
  } else {
    var startTime = 0;
    var endTime = 0;
    var indexEndTime = 0;
    for (var lyric of lyricsSong) {
      if (audio.currentTime < lyric.words[0].startTime / 1000) {
        startTime = lyric.words[0].startTime / 1000;
        break;
      }
      indexEndTime++;
    }
    if (indexEndTime !== 0) {
      endTime =
        lyricsSong[indexEndTime - 1].words[
          lyricsSong[indexEndTime - 1].words.length - 1
        ].endTime / 1000;
    }
    console.log("time,start, end" + startTime, endTime);
    if (startTime - endTime > 9) {
      renderPreludeMusic();
    }
  }
}

const handleColor = function (currentTime) {
  const spanAll = document.querySelectorAll(".word");
  spanAll.forEach((spanText) => {
    console.log(currentTime * 1000, Number(spanText.dataset.startTime));
    if (currentTime * 1000 >= Number(spanText.dataset.startTime)) {
      var spanInner = spanText.querySelector("span");
      spanInner.style.width = `100%`;
      var totalTime =
        Number(spanText.dataset.endTime) - Number(spanText.dataset.startTime);
      if (totalTime > 60) {
        spanInner.style.transition = `width ${totalTime}ms linear`;
        console.log("2111");
      }
    } else {
      spanInner.style.width = `100%`;
    }
  });
};

btnKaraoke.addEventListener("click", function (e) {
  karaoke.classList.toggle("is-show");
});
// renderLyrics(lyricsObj[index]);
btnKaraokeHidden.addEventListener("click", function (e) {
  karaoke.classList.remove("is-show");
});
