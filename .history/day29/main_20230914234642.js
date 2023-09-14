const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listTable = $(".list-table");
const topics = ["Nhập môn lập trình web", "Ngôn ngữ HTML", "Ngôn ngữ CSS"];
const lessons = [
  {
    topic: [
      "Giới thiệu Khóa học HTML-CSS",
      "Nhập môn lập trình web - Phần 1",
      "Nhập môn lập trình web - Phần 2",
    ],
  },
  {
    topic: [
      "Công cụ - Phần mềm cần chuẩn bị",
      "Ngôn ngữ HTML",
      "Thuộc tính Float trong CSS",
    ],
  },
  {
    topic: [
      "Thuộc tính Position trong CSS",
      "Tích hợp font-awesome và kỹ thuật liên quan",
      "Tạo bộ đếm (Counter) trong CSS",
    ],
  },
];

// render list Tab
var indexLession = 1;
const renderListTable = function () {
  topics.forEach((topic, indexTopic) => {
    var htmlActive = `<div class="list-items active">
          <span class="text-value">Module:${indexTopic + 1}:</span>
          <span class="text-content">${topic}</span>
        </div>`;
    listTable.insertAdjacentHTML("beforeend", htmlActive);
    lessons[indexTopic].topic.forEach((lesson) => {
      var htmlNotActive = `<div class="list-items">
          <span class="text-value">bài:${indexLession++}:</span>
          <span class="text-content">${lesson}</span>
        </div>`;
      listTable.insertAdjacentHTML("beforeend", htmlNotActive);
    });
  });
};
renderListTable();

const listItems = $$(".list-items");

listItems.forEach((items) => {
  items.addEventListener("dragstart", () => {
    items.classList.add("dragging");
  });
  items.addEventListener("dragend", () => {
    console.log("nhar");
    items.classList.remove("dragging");
  });
});
