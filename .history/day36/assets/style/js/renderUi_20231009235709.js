import { client } from "./client.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

let LIMIT_NUMBER = 1;
let PAGE_NUMBER = 1;

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");
export const questions = $(".questions");
export const container = $(".container");
function RenderCorrectBottom() {
  var html = `<span>Correct</span>`;
  var divBottom = document.createElement("div");
  divBottom.innerHTML = html;
  divBottom.className = "bottom";
  container.append(divBottom);
}

function RenderHtml({ title, numberCorrect, answers }) {
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
      console.log(e.target.dataset.correct);
      if (e.target.dataset.correct === true) {
        console.log(e.target);
        e.target.classList.add(".correct");
      } else {
      }
    });
  });
  questions.append(div);
}

export function RenderUi() {
  var options = {
    _limit: LIMIT_NUMBER,
    _page: 2,
  };
  var queryString = new URLSearchParams(options).toString();
  const getQuestions = client.get("/questions/?" + queryString);
  getQuestions.then(({ data }) => {
    RenderHtml(data[0]);
  });
}
