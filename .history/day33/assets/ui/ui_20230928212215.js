const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export const root = $(".virtual-assistant");
export const btnVoic = $(".btn-voic");

export const renderUi = function () {
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
