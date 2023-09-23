const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");
let dateNow = new Date();
const dateEnd = new Date();
dateEnd.setTime(dateNow.getTime() + 10000);
var isFocus = true;
var timeNotFouce;

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "visible") {
    isFocus = true;
    dateEnd.setTime(
      dateEnd.getTime() + (new Date().getTime() - timeNotFouce.getTime())
    );
  } else {
    isFocus = false;
    timeNotFouce = new Date();
  }
});

function countDown() {
  console.log("vao");
  counter.innerHTML = Math.floor(
    (dateEnd.getTime() - dateNow.getTime()) / 1000
  );
  dateNow = new Date();
  if (dateEnd.getTime() >= dateNow.getTime()) {
    requestAnimationFrame(countDown);
  } else {
    btn.classList.add("is-show");
  }
}
countDown();

btn.addEventListener("click", function (e) {
  if (+counter.textContent === 0)
    window.location.href = "https://fullstack.edu.vn/";
});
