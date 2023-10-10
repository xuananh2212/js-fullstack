import { client } from "./client.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

export let LIMIT_NUMBER = 1;
export let PAGE_NUMBER = 1;
let totalCorrect = 0;
let indexCorrect = 0;
export let totalQuestions = 0;
let MAX_SCORE = 1000;
let STREAK = 100;
let TIMER_QUESTION = 10;
let timeRemaining = 0;
let timeClear = null;

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");
export const questions = $(".questions");
export const container = $(".container");
export const divBottom = $(".container .bottom");
export const divTotal = $(".total-game");
export const divTop = $(".top");
export const numberSteak = 0;
export let consecutive = 0;
export function RenderCorrectBottom() {
  divBottom.innerHTML = "";
  var html = `<span>CORRECT</span>`;
  divBottom.innerHTML = html;
  divBottom.className = "bottom";
  container.append(divBottom);
}
export function RenderTop() {
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
  timeClear = HanldTimeQuestion();
}
function HanldTimeQuestion() {
  const timerProgress = $(".timer-progress");
  var timeNow = 0;
  timerProgress.style.width = 100 + "%";
  var idTimeQuestion = setInterval(() => {
    timeNow += 10;
    timeRemaining = TIMER_QUESTION * 1000 - timeNow;
    timerProgress.style.width =
      (timeRemaining * 100) / (TIMER_QUESTION * 1000) + "%";
    if (timeRemaining <= 0) {
      PAGE_NUMBER++;
      const btnAll = $$(".answers .btn");
      btnAll.forEach((btn) => {
        btn.style.pointerEvents = "none";
      });
      RenderUi();
      clearInterval(idTimeQuestion);
    }
  }, 10);
  return idTimeQuestion;
}

export function HanldTotalQuestions(response) {
  totalQuestions = response.headers.get("x-total-count");
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
    divTop.innerHTML = "";
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

function HanldStreakAndScore(flag) {
  clearInterval(timeClear);
  const streaks = [...$$(".steak__items")];
  const plusPoint = $(".plus-point");
  const score = $(".top__wrap .score span");
  const valuePoint = plusPoint.querySelector("span");
  if (flag) {
    if (consecutive < streaks.length) {
      streaks[consecutive].classList.add("is-show");
    } else {
      consecutive = streaks.length - 1;
    }
    consecutive++;
    plusPoint.classList.add("is-show");
    valuePoint.innerHTML = consecutive * 100;
    score.innerHTML = +score.innerHTML + consecutive * 100;
  } else {
    streaks.forEach((streak) => {
      streak.classList.remove("is-show");
    });
    consecutive = 0;
    plusPoint.classList.remove("is-show");
    valuePoint.innerHTML = 0;
  }
  var perCentPoint = (timeRemaining * 100) / (TIMER_QUESTION * 1000);
  var pointScore = Math.ceil((MAX_SCORE * perCentPoint) / 100);
  score.innerHTML = +score.innerHTML + pointScore;
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
      HanldStreakAndScore(true);
      HanldDisplay();
    } else if (indexCorrect === numberCorrect) {
      totalCorrect++;
      divBottom.classList.add("is-show");
      divBottom.classList.add("correct");
      HanldStreakAndScore(true);
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
    HanldStreakAndScore(false);
    HanldDisplay();
  }
}

export function RenderHtml({ title, numberCorrect, answers }) {
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
export async function getQuestions() {
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
  console.log("vao");
  const get = getQuestions();
  get.then(({ data, response }) => {
    if (response.ok) {
      if (data.length > 0) {
        totalQuestions = response.headers.get("x-total-count");
        RenderHtml(data[0]);
        RenderCorrectBottom();
        timeClear = HanldTimeQuestion();
      } else {
        container.classList.add("is-hidden");
        divTotal.classList.add("is-show");
        RenderTotal();
      }
    }
  });
}
