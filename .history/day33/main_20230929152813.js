import { renderUi } from "./assets/ui/ui.js";

const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const root = $(".virtual-assistant");

renderUi(root);

const btnVoic = $(".btn-voic");

const status = $(".status");

const result = $(".result");
console.log(result);

const span = $(".status span");

var text = null;

var isActive = false;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "vi-VI";

recognition.continuous = false;

btnVoic.addEventListener("click", (e) => {
  e.preventDefault();
  recognition.start();
  btnVoic.classList.toggle("talking");
  status.classList.add("talking");
  result.classList.remove("is-show");
  span.innerHTML = "Hãy nói nội dung bạn muốn";
  span.classList.remove("voic-end");
});

function handleDelay(message) {
  isActive = true;
  result.innerHTML = "đang thực hiện: " + text;
  setTimeout(() => {
    window.open(message, "_blank");
  }, 1000);
}

recognition.onresult = function (e) {
  text = e.results[0][0].transcript.toLowerCase().replaceAll(",", "");
  console.log(text);
  if (text === "google") {
    handleDelay("https://www.google.com");
  } else if (text === "google maps") {
    handleDelay("https://www.google.com/maps");
  } else if (text === "google drive") {
    handleDelay("https://www.google.com/drive/");
  } else if (text === "facebook") {
    handleDelay("https://www.facebook.com/");
  } else if (text === "youtube") {
    handleDelay("https://www.youtube.com/");
  } else {
    if (text.includes("tới") || text.includes("chỉ đường")) {
      handleDelay(`https://www.google.com/maps/place/${text}`);
    } else if (text.includes("bài hát")) {
      var musicName = text.split("bài hát")[1];
      handleDelay(`https://zingmp3.vn/tim-kiem/${musicName}`);
    } else if (text.includes("video")) {
      handleDelay(`https://www.youtube.com/results?search_query=${text}`);
    } else {
      isActive = false;
      result.innerHTML = "đang thực hiện: " + text;
    }
  }
};
recognition.onerror = function (e) {
  console.log("error");
  recognition.stop();
  isActive = false;
  console.log("không thể nhận biết giọng nói này");
};
recognition.onspeechend = function (e) {
  recognition.stop();
  console.log("hoc vien ki thuat mat ma");
  btnVoic.classList.remove("talking");
  span.innerHTML = "Đã nói xong. Hy Vọng Kết quả như ý bạn";
  result.classList.add("is-show");
  span.classList.add("voic-end");
  setTimeout(() => {
    if (isActive) {
      result.innerHTML = "thực hiện thành công";
    } else {
      result.innerHTML = "Không thực hiện được yêu cầu";
    }
  }, 500);
};
