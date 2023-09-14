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
var indexRenderLesson = 1;
const renderListTable = function () {
  topics.forEach((topic, indexTopic) => {
    var htmlActive = `<div class="list-items active"  draggable="true">
          <span class="text-value">Module ${indexTopic + 1}:</span>
          <span class="text-content">${topic}</span>
        </div>`;
    listTable.insertAdjacentHTML("beforeend", htmlActive);
    lessons[indexTopic].topic.forEach((lesson) => {
      var htmlNotActive = `<div class="list-items" draggable="true">
          <span class="text-value">Bài ${indexRenderLesson++}:</span>
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
    items.classList.remove("dragging");
  });
});

listTable.addEventListener("dragover", function (e) {
  var itemDragging = $(".list-items.dragging");
  console.log(itemDragging);
  var listNotDragging = $$(".list-items:not(.dragging)");
  console.log(listNotDragging);
  var nodeElementNext = [...listNotDragging].find((itemNotDragging) => {
    return (
      e.clientY <= itemNotDragging.offsetTop + itemDragging.offsetHeight / 2
    );
  });
  listTable.insertBefore(itemDragging, nodeElementNext);
});

listTable.addEventListener("dragend", function (e) {
  const allSpanLessonValues = $$(".list-items:not(.active) .text-value");

  const allSpanTopicValues = $$(".list-items.active .text-value");
  allSpanLessonValues.forEach((spanLesson, index) => {
    console.log(index);
    spanLesson.innerHTML = `Bài ${++index}:`;
  });
  allSpanTopicValues.forEach((spanTopic, index) => {
    spanTopic.innerHTML = `Module ${++index}:`;
  });
});
