import { btnStart, startGame } from "./renderUi.js";

btnStart.addEventListener("click", function (e) {
  startGame.classList.add("is-hidden");
  console.log(e.target);
});
