// var str = document.getElementById("desc").innerHTML;

// setInterval(() => {
//   for (let i = 0; i < str.length; i++) {

//   }
// }, 1000);

const colorfulText = document.getElementById("colorfulText");

// Khi trang tải xong, bắt đầu animation
document.addEventListener("DOMContentLoaded", function () {
  colorfulText.classList.add("colorful-animation");
});
