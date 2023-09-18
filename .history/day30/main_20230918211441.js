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

console.log(controlsBtn);
function format(cmd, value = null) {
  console.log(cmd);
  if (value) {
    console.log(cmd + 1);
    document.execCommand(cmd, false, value);
  } else {
    console.log(cmd);
    document.execCommand(cmd);
  }
}

controlsBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    format(btn.dataset.command);
  });
});

inputColor.addEventListener("input", function () {
  console.log(this.value);
  format(this.dataset.command, this.value);
});

content.addEventListener("input", function () {
  console.log(content.innerHTML);
  spanChar.dispatchEvent(eventCount);
  spanWord.dispatchEvent(eventCount);
});

spanChar.addEventListener("count", function () {
  var countChar = content.textContent.length;
  console.log(countChar, content.textContent);
  spanChar.innerHTML = `Số ký tự: ${countChar}`;
  console.log(1);
});

spanWord.addEventListener("count", function () {
  console.log(2);
  var countWord = content.textContent.trim().split(/s+/).length;
  spanWord.innerHTML = `Số từ: ${countWord}`;
});
