const $ = document.querySelector.bind(document);

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

btnControlsFile.addEventListener("click", function () {
  const dropDownList = $(".drop-down-list");
  dropDownList.classList.toggle("is-show");
});
