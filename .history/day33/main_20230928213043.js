import { btnVoic, renderUi } from "./assets/ui/ui.js";
renderUi();
console.log(btnVoic);
btnVoic.addEventListener("click", function (e) {
  btnVoic.classList.toggle("talking");
});
