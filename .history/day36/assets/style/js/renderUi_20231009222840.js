import { client } from "./client.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");

function returnHtml({ title, numberCorrect, answers }) {
  return `<div class="questions">
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
               
            </div>
        </div> `;
}

export function renderUi() {
  var options = {
    _limit: 1,
  };
  var queryString = new URLSearchParams(options).toString();
  const getQuestions = client.post("/questions");
  getQuestions.then(({ data }) => {
    console.log(data);
  });
}
