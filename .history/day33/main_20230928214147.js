import { renderUi } from "./assets/ui/ui.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const root = $(".virtual-assistant");
renderUi(root);
const btnVoic = $(".btn-voic");
const status = $(".status");
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
btnVoic.addEventListener("click", function (e) {
  btnVoic.classList.toggle("talking");
  status.classList.toggle("talking");
});