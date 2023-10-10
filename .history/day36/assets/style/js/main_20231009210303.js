import { btnStart, startGame } from "./renderUi.js";

btnStart.addEventListener("click", function (e) {
  startGame.classList.add("is-hidden");
});

function StartTimeGame() {
  var time = 5;
  var divTime = document.createElement("div");
  var spanValue = document.createElement("span");
  divTimes.className = "start-times-game";
  spanValue.className = "value-time";
  divTimes.append(spanValue);
  document.body.append(divTime);
  setInterval(function () {});
}
