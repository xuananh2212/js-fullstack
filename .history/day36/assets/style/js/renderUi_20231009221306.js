const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");

function returnHtml() {
  return `<div class="questions">
            <div class="title">
                <h2 class="heading-lv2">Tiêu Đề</h2>
                <span class="value-correct">2</span>
            </div>
            <div class="answers">
                <button class="btn">1</button>
                <button class="btn">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
            </div>
        </div> `;
}

function renderUi(questions) {
  if (questions.length > 0) {
  }
}
