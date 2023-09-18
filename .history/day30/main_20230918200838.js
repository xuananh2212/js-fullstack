const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnControlsFile = $(".btn-controls-file");
const controlsLeft = $(".controls-left");
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

const controlsBtn = $$(".controls-right .btn");
console.log(controlsBtn);
function format(cmd) {
  console.log(cmd);
  document.execCommand(cmd);
}

controlsBtn.forEach((btn) => {
  console.log(btn.dataset.command);
  btn.addEventListener("click", function () {
    format(btn.dataset.command);
  });
});
