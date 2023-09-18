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
const nameFile = $(`input[id="name-file"]`);
(function renderDropDow() {
  var html = ` <ul class="drop-down-list">
                        <li>
                            <button class="btn-cta btn-new">New</button>
                        </li>
                        <li>
                            <button class="btn-cta btn-save-txt">Save as TXT</button>
                        </li>
                        <li>
                            <button class="btn-cta btn-save-pdf">Save as PDF</button>
                        </li>
                    </ul>`;
  controlsLeft.insertAdjacentHTML("beforeend", html);
})();

const btnNew = $(".btn-new");
const btnSaveTxt = $(".btn-save-txt");
const btnSavePdf = $(".btn-save-pdf");

const dropDownList = $(".drop-down-list");
btnControlsFile.addEventListener("click", function () {
  dropDownList.classList.toggle("is-show");
});
// document.addEventListener("mousedown", function (e) {
//   console.log(12);
//   console.log(e.target);
//   if (!e.target.matches(".drop-down-list")) {
//     dropDownList.classList.remove("is-show");
//   }
// });
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
  var str = content.textContent.trim();
  if (str) {
    var countWord = str.split(/\s+/g).length;
    spanWord.innerHTML = `Số từ: ${countWord}`;
  } else {
    spanWord.innerHTML = `Số từ: 0`;
  }
});

console.log(btnNew);
btnNew.addEventListener("click", function (e) {
  nameFile.value = "untitled";
});

btnSaveTxt.addEventListener("click", function (e) {
  const blob = new Blob([content.innerText]);
  const url = URL.createObjectURL(blob);
  const tagALink = document.createElement("a");
  tagALink.href = url;
  tagALink.download = `${filename.value}.txt`;
  tagALink.click();
});

btnSavePdf.addEventListener("click", function (e) {
  html2pdf(content).save(nameFile.value);
});
