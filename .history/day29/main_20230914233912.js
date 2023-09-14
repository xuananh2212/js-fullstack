const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listTable = $(".list-table");
const topics = ["Nhập môn lập trình web", "Ngôn ngữ HTML", "Ngôn ngữ CSS"];
const lessions = [
    {
        topic:
            [
            "Giới thiệu Khóa học HTML-CSS",
            "Nhập môn lập trình web - Phần 1",
            "Nhập môn lập trình web - Phần 2",
            ]
    },
    {
        topic:
            [
            "Công cụ - Phần mềm cần chuẩn bị",
            "Ngôn ngữ HTML",
            "Thuộc tính Float trong CSS",
            ]
    }
        ,
    {
        topic:
            [
            "Thuộc tính Position trong CSS",
            "Tích hợp font-awesome và kỹ thuật liên quan",
            "Tạo bộ đếm (Counter) trong CSS",
            ]
    }
    
  
 
]

// render list Tab
var indexRender = 0;
const renderListTable = function () {
    topics.forEach((topic, indexTopic) => {
    var html = `<div class="list-items ative">
          <span class="text-value">Module:${indexTopic + 1}:</span>
          <span class="text-content">${topic}</span>
        </div>`;
      listTable.insertAdjacentHTML("beforeend", html);
        for (indexRender; indexRender < le)
  });
};

renderListTable();
