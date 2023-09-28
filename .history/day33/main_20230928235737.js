import { renderUi } from "./assets/ui/ui.js";

const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const root = $(".virtual-assistant");

renderUi(root);

const btnVoic = $(".btn-voic");

const status = $(".status");

const result = $(".result");

const span = $(".status span");
var text = null;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "vi-VI";

recognition.continuous = false;

btnVoic.addEventListener("click", (e) => {
  e.preventDefault();
  btnVoic.classList.toggle("talking");
  status.classList.toggle("talking");
  recognition.start();
});

function delay(message) {
  setTimeout((message) => {
    window.open(message, "_blank");
  }, 500);
}

recognition.addEventListener("result", (e) => {
  text = e.results[0][0].transcript.toLowerCase();
  if (text === "google") {
    delay("https://www.google.com");
  } else if (text === "google maps") {
    delay("https://www.google.com/maps");
  } else if (text === "google drive") {
    delay("https://www.google.com/drive/");
  } else if (text === "facebook") {
    delay("https://www.facebook.com/");
  } else if (text === "youtube") {
    delay("https://www.youtube.com/");
  } else {
    if (text.includes("tới") || text.includes("chỉ đường")) {
      delay(`https://www.google.com/maps/place/${text}`);
    } else if (text.includes("bài hát")) {
      var musicName = text.split("bài hát")[1];
      delay(`https://zingmp3.vn/tim-kiem/${musicName}`);
    } else if (text.includes("video")) {
      delay(`https://www.youtube.com/results?search_query=${text}`);
    } else {
      result.innerHTML = text;
    }
  }
});
recognition.addEventListener("error", (e) => {
  console.log("không thể nhận biết giọng nói này");
});
recognition.addEventListener("speechend", (e) => {
  recognition.stop();
  btnVoic.classList.remove("talking");
  status.classList.add("");
  span.innerHTML = text;
  span.classList.add("voic-end");
});
