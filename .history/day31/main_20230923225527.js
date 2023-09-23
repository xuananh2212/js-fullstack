const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");
let dateNow = new Date();
const dateEnd = new Date();
dateEnd.setTime(dateNow.getTime() + 30000);
var isFocus = true;

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "visible") {
    console.log(1);
    isFocus = true;
  } else {
    isFocus = false;
    console.log(2);
  }
});

function countDown() {
  console.log("vao");
  counter.innerHTML = Math.floor(
    (dateEnd.getTime() - dateNow.getTime()) / 1000
  );
  if (isFocus) {
    dateNow = new Date();
  }

  if (dateEnd.getTime() >= dateNow.getTime()) {
    requestAnimationFrame(countDown);
  } else {
    btn.classList.add("is-show");
  }
}
countDown();

btn.addEventListener("click", function (e) {
  if (+counter === 0) window.location.href = "https://fullstack.edu.vn/";
});
