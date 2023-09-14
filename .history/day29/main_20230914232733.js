const $ = document.querySelector.bind(document);
const $$ = documnet.querySelectorAll.bind(document);

const topics = ["Nhập môn lập trình web", "Ngôn ngữ HTML", "Ngôn ngữ CSS"];
const lessions = [
  "Giới thiệu Khóa học HTML-CSS",
  "Nhập môn lập trình web - Phần 1",
  "Nhập môn lập trình web - Phần 2",
  "Công cụ - Phần mềm cần chuẩn bị",
  "Ngôn ngữ HTML",
  "Thuộc tính Float trong CSS",
  "Thuộc tính Position trong CSS",
  "Tích hợp font-awesome và kỹ thuật liên quan",
  "Tạo bộ đếm (Counter) trong CSS",
];

// render list Tab

const renderListTable = function () {
  topics.forEach((topic) => {
    var html = `<div class="list-items">
          <span class="text-value">Bài 1:</span>
          <span class="text-content">Ngôn ngữ</span>
        </div>;`;
  });
};
