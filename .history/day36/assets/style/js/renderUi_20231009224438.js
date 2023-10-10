import { client } from "./client.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

let LIMIT_NUMBER = 1;
let PAGE_NUMBER = 1;

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");
export const questions = $(".questions");

function returnHtml({ title, numberCorrect, answers }) {
  console.log(answers);
  return `
            <div class="title">
                <h2 class="heading-lv2">${title}</h2>
               ${
                 numberCorrect > 1
                   ? `<span class="value-correct">Số câu trả lời đúng: ${numberCorrect}</span>`
                   : ""
               }
            </div>
            <div class="answers">
              ${answers
                .map(
                  (answer) =>
                    ` <button class="btn" data-correct= ${answer.correct}>${answer.text}</button>`
                )
                .join("")}
               
            </div>`;
}

export function renderUi() {
  var options = {
    _limit: LIMIT_NUMBER,
    _page: 2,
  };
  var queryString = new URLSearchParams(options).toString();
  const getQuestions = client.get("/questions/?" + queryString);
  getQuestions.then(({ data }) => {
    console.log(data);
    console.log(data[0]);
    questions.innerHTML = "";
    questions.innerHTML = returnHtml(data[0]);
  });
}
