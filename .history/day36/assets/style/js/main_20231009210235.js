import { btnStart, startGame } from "./renderUi.js";

btnStart.addEventListener("click", function (e) {
  startGame.classList.add("is-hidden");
});

function StartTimeGame() {
  var time = 5;
  var divTimes = document.createElement("div");
  var spanValues = document.createElement("span");
  divTimes.className = "start-times-game";
  divTimes.append(spanValues);
  document.body.append(divTimes);
  setInterval(function () {});
}
