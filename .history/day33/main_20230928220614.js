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

btnVoic.addEventListener("click", function (e) {
  btnVoic.classList.toggle("talking");
  if (btnVoic.classList.contains("talking")) {
    btnVoic.innerHTML = "Đang nói";
  } else {
    btnVoic.innerHTML = "Bấm vào đây đê nói";
  }
  status.classList.toggle("talking");
  recognition.start();
});

recognition.addEventListener("result", function (e) {
  console.log("onresult", e);
});
recognition.addEventListener("error", function (e) {});
recognition.addEventListener("speechend", function (e) {
  recognition.stop();
  //   btnVoic.click();
});
