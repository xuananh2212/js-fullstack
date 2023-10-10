import { client } from "./client.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

export let LIMIT_NUMBER = 1;
export let PAGE_NUMBER = 1;
let totalCorrect = 0;
let indexCorrect = 0;
let totalQuestions = 0;
let MAX_SCORE = 1000;
let STREAK = 100;

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");
export const questions = $(".questions");
export const container = $(".container");
export const divBottom = $(".container .bottom");
export const divTotal = $(".total-game");
export const divTop = $(".top");
function RenderCorrectBottom() {
  divBottom.innerHTML = "";
  var html = `<span>CORRECT</span>`;
  divBottom.innerHTML = html;
  divBottom.className = "bottom";
  container.append(divBottom);
}
function RenderTop() {
  var html = `  <div class="timer-total">
                <div class="timer-progress">
                </div>
            </div>
            <div class="top__wrap">
                <div class="top__wrap__inner">
                    <div class="top__wrap__questions">
                        <span class="current__questions">
                           ${PAGE_NUMBER}
                        </span>
                        <span class="total__questions">/${totalQuestions}</span>
                    </div>
                    <div class="streak">
                        <div class="steak__items">
                            <span></span>
                        </div>
                        <div class="steak__items">
                        </div>
                        <div class="steak__items">
                        </div>
                    </div>
                    <div class="plus-point">
                        +<span>100</span>
                    </div>
                </div>
                <div class="score">
                    Score:<span class="value">0</span>
                </div>

            </div>`;
  divTop.innerHTML = html;
}

function RenderTotal(score, streak) {
  var html = ` <div class="total-game__inner">
            <h3 class="heading-lv3">Game performance</h3>
            <div class="accuracy">
                <span>Accuracy</span>
                <div class="accuracy-total">
                    <div class="accuracy-progress" style="width: ${
                      (totalCorrect * 100) / totalQuestions
                    }%">
                        <span >${(totalCorrect * 100) / totalQuestions}%</span>
                    </div>
                </div>
            </div>
            <div class="performance">
                <div class="performance__items performance__score">
                    <span class="value">2656565</span>
                    <span class="text">Score</span>
                </div>
                <div class="performance__items performance__streak">
                    <span class="value">0</span>
                    <span class="text">Streak</span>
                </div>
                <div class="performance__items performance__correct">
                    <span class="value">${totalCorrect}</span>
                    <span class="text">correct</span>
                </div>
                <div class="performance__items performance__incorrect">
                    <span class="value">${totalQuestions - totalCorrect}</span>
                    <span class="text">incorrect</span>
                </div>
            </div>
        </div>`;
  divTotal.innerHTML = html;
  const btnStartAgain = document.createElement("button");
  btnStartAgain.classList.add("btn-start-again");
  btnStartAgain.innerHTML = "Play again";
  btnStartAgain.addEventListener("click", function (e) {
    startGame.classList.remove("is-hidden");
    divTotal.classList.remove("is-show");
    container.classList.remove("is-hidden");
    questions.innerHTML = "";
    divBottom.classList.remove("is-show");
    PAGE_NUMBER = 1;
    totalCorrect = 0;
  });
  divTotal.append(btnStartAgain);
}

function HanldDisplay() {
  const btnAll = $$(".btn:not(.correct , .incorrect)");
  btnAll.forEach((btn) => {
    btn.classList.add("is-hidden");
  });
  PAGE_NUMBER++;
  RenderUi();
}

function HanldQuestions(e, numberCorrect) {
  e.target.style.pointerEvents = "none";
  if (e.target.dataset.correct === "true") {
    indexCorrect++;
    console.log(indexCorrect);
    e.target.classList.add("correct");
    if (numberCorrect === 1) {
      totalCorrect++;
      divBottom.classList.add("is-show");
      divBottom.classList.add("correct");
      HanldDisplay();
    } else if (indexCorrect === numberCorrect) {
      totalCorrect++;
      divBottom.classList.add("is-show");
      divBottom.classList.add("correct");
      HanldDisplay();
    }
  } else {
    divBottom.classList.add("is-show");
    const spanInCorrect = $(".bottom span");
    spanInCorrect.innerHTML = "INCORRECT";
    e.target.classList.add("incorrect");
    divBottom.classList.add("incorrect");
    const btnCorrects = $$('.btn[data-correct="true"]');
    btnCorrects.forEach((btnCorrect) => {
      btnCorrect.style.pointerEvents = "none";
      btnCorrect.classList.add("correct");
    });
    const btnAll = $$(".btn:not(.correct , .incorrect)");
    btnAll.forEach((btn) => {
      btn.classList.add("is-hidden");
    });
    HanldDisplay();
  }
}

function RenderHtml({ title, numberCorrect, answers }) {
  indexCorrect = 0;
  questions.innerHTML = "";
  var html = `<div class="title">
                <h2 class="heading-lv2">${title}</h2>
               ${
                 numberCorrect > 1
                   ? `<span class="value-correct">Số câu trả lời đúng: ${numberCorrect}</span>`
                   : ""
               }
            </div>`;
  questions.innerHTML = html;
  var div = document.createElement("div");
  div.className = "answers";
  answers.forEach((answer) => {
    var button = document.createElement("button");
    button.className = "btn";
    button.setAttribute("data-correct", answer.correct);
    button.innerHTML = answer.text;
    div.append(button);
    button.addEventListener("click", (e) => {
      RenderCorrectBottom();
      HanldQuestions(e, numberCorrect);
    });
  });
  questions.append(div);
}
async function getQuestions() {
  var options = {
    _limit: LIMIT_NUMBER,
    _page: PAGE_NUMBER,
    _order: "desc",
  };
  var queryString = new URLSearchParams(options).toString();
  const getQuestions = await client.get("/questions/?" + queryString);
  return getQuestions;
}

export function RenderUi() {
  const get = getQuestions();
  get.then(({ data, response }) => {
    if (response.ok) {
      if (data.length > 0) {
        totalQuestions = response.headers.get("x-total-count");
        RenderHtml(data[0]);
        RenderCorrectBottom();
      } else {
        container.classList.add("is-hidden");
        divTotal.classList.add("is-show");
        RenderTotal();
      }
    }
  });
}
