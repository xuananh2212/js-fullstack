const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const controlsBtn = $$(".controls-right .btn");
const btnControlsFile = $(".btn-controls-file");
const controlsLeft = $(".controls-left");
const inputColor = $(`input[id="color"]`);
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
function format(cmd) {
  console.log(cmd);
  document.execCommand(cmd, false, this.value);
}

controlsBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    format(btn.dataset.command);
  });
});

inputColor.addEventListener("change", function () {
  console.log(this.value);
  format(this.dataset.command, this.value);
});
