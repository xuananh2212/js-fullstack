import { btnVoic, renderUi } from "./assets/ui/ui.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

btnVoic.addEventListener("click", function (e) {
  btnVoic.classList.toggle("talking");
});