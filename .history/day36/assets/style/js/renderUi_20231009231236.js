import { client } from "./client.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

let LIMIT_NUMBER = 1;
let PAGE_NUMBER = 1;

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");
export const questions = $(".questions");

function renderHtml({ title, numberCorrect, answers }) {
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
  });
  questions.append(div);

  //   return `

  //             <div class="">
  //               ${answers
  //                 .map(
  //                   (answer) =>
  //                     ` <button class="btn" data-correct= ${answer.correct}>${answer.text}</button>`
  //                 )
  //                 .join("")}

  //             </div>`;
}

export function renderUi() {
  var options = {
    _limit: LIMIT_NUMBER,
    _page: 2,
  };
  var queryString = new URLSearchParams(options).toString();
  const getQuestions = client.get("/questions/?" + queryString);
  getQuestions.then(({ data }) => {});
}
