import { renderUi } from "./assets/ui/ui.js";

const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const root = $(".virtual-assistant");

renderUi(root);

const btnVoic = $(".btn-voic");

const status = $(".status");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "vi-VI";

recognition.continuous = false;

btnVoic.addEventListener("click", (e) => {
  e.preventDefault();
  btnVoic.classList.toggle("talking");
  if (btnVoic.classList.contains("talking")) {
    btnVoic.innerHTML = "Đang nói";
  } else {
    btnVoic.innerHTML = "Bấm vào đây đê nói";
  }
  status.classList.toggle("talking");
  recognition.start();
});

recognition.addEventListener("result", (e) => {
  var text = e.results[0][0].transcript.toLowerCase();
  if (text.includes("google")) {
    if (text.includes("maps")) {
      window.open("https://www.google.com/maps", "_blank");
    } else if (text.includes("drive")) {
      window.open("https://www.google.com/drive/", "_blank");
    } else {
      window.open("https://www.google.com", "_blank");
    }
  } else if (text.includes("facebook")) {
    window.open("https://www.facebook.com/", "_blank");
  } else if (text.includes("youtube")) {
    window.open("https://www.youtube.com/", "_blank");
  }
});
recognition.addEventListener("error", (e) => {
  console.log("không thể nhận biết giọng nói này");
});
recognition.addEventListener("speechend", (e) => {
  recognition.stop();
});