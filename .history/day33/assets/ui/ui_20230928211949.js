const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const root = $(".virtual-assistant");

const renderUi = function () {
  var html = `<h2 class="heading-lv2">Bạn muốn làm gì? Hãy nói cho Trợ Lý ảo biết</h2>
        <button class="btn-voic">Bấm vào đây để nói</button>
        <div class="status">
            <span>Hãy nói nội dung bạn muốn</span>
        </div>
        <div class="result">
            Không thực hiện được yêu cầu
        </div>`;
  root.insertAdjacentHTML("beforeend", html);
};
