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
      "Nhập môn lập trình web - Phần 3",
      "Nhập môn lập trình web - Phần 4",
      "Nhập môn lập trình web - Phần 5",
      "Nhập môn lập trình web - Phần 6",
      "Nhập môn lập trình web - Phần 7",
      "Nhập môn lập trình web - Phần 8",
      "Nhập môn lập trình web - Phần 9",
      "Nhập môn lập trình web - Phần 10",
    ],
  },
  {
    topic: [
      "Công cụ - Phần mềm cần chuẩn bị",
      "Ngôn ngữ HTML",
      "Thuộc tính Float trong CSS",
      "Nhập môn lập trình web - Phần 11",
      "Nhập môn lập trình web - Phần 12",
      "Nhập môn lập trình web - Phần 13",
      "Nhập môn lập trình web - Phần 14",
      "Nhập môn lập trình web - Phần 15",
      "Nhập môn lập trình web - Phần 16",
      "Nhập môn lập trình web - Phần 17",
      "Nhập môn lập trình web - Phần 18",
      "Nhập môn lập trình web - Phần 19",
      "Nhập môn lập trình web - Phần 20",
      "Nhập môn lập trình web - Phần 21",
      "Nhập môn lập trình web - Phần 22",
    ],
  },
  {
    topic: [
      "Thuộc tính Position trong CSS",
      "Tích hợp font-awesome và kỹ thuật liên quan",
      "Tạo bộ đếm (Counter) trong CSS",
      "Nhập môn lập trình web - Phần 23",
      "Nhập môn lập trình web - Phần 24",
      "Nhập môn lập trình web - Phần 25",
      "Nhập môn lập trình web - Phần 26",
      "Nhập môn lập trình web - Phần 27",
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
var pageYPrev;
listTable.addEventListener("dragover", function (e) {
  console.log(1);
  var itemDragging = $(".list-items.dragging");
  console.log(itemDragging);
  var listNotDragging = $$(".list-items:not(.dragging)");
  console.log(listNotDragging);
  var nodeElementNext = [...listNotDragging].find((itemNotDragging) => {
    return e.pageY <= itemNotDragging.offsetTop + itemDragging.offsetHeight / 2;
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
