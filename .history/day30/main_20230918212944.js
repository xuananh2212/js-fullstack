const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const controlsBtn = $$(".controls-right .btn");
const btnControlsFile = $(".btn-controls-file");
const controlsLeft = $(".controls-left");
const inputColor = $(`input[id="color"]`);
const content = $(".content");
const spanChar = $(".count-char");
const spanWord = $(".count-word");
const eventCount = new Event("count");

(function renderDropDow() {
  var html = ` <ul class="drop-down-list">
                        <li>
                            <button class="btn-new">New</button>
                        </li>
                        <li>
                            <button class="btn-save-txt">Save as TXT</button>
                        </li>
                        <li>
                            <button class="btn-save-pdf">Save as PDF</button>
                        </li>
                    </ul>`;
  controlsLeft.insertAdjacentHTML("beforeend", html);
})();

const dropDownList = $(".drop-down-list");
btnControlsFile.addEventListener("click", function () {
  dropDownList.classList.toggle("is-show");
});
document.addEventListener("mousedown", function (e) {
  if (!e.target.matches(".drop-down-list")) {
    dropDownList.classList.remove("is-show");
  }
});
function format(cmd, value = null) {
  if (value) {
    document.execCommand(cmd, false, value);
  } else {
    document.execCommand(cmd);
  }
}

controlsBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    format(btn.dataset.command);
  });
});

inputColor.addEventListener("input", function () {
  format(this.dataset.command, this.value);
});

content.addEventListener("input", function () {
  spanChar.dispatchEvent(eventCount);
  spanWord.dispatchEvent(eventCount);
});

spanChar.addEventListener("count", function () {
  var countChar = content.textContent.length;
  spanChar.innerHTML = `Số ký tự: ${countChar}`;
});

spanWord.addEventListener("count", function () {
  var countWord = 0;
  var str = content.textContent.trim();
  for (let i = 0; i < str.length; i++) {
    if (str === " ") {
      countWord++;
    }
  }

  console.log(content.textContent, countWord);
  spanWord.innerHTML = `Số từ: ${countWord}`;
});
