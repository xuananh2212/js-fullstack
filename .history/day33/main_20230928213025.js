import { btnVoic, renderUi } from "./assets/ui/ui.js";
renderUi();
btnVoic.addEventListener("click", function (e) {
  btnVoic.classList.toggle("talking");
});
