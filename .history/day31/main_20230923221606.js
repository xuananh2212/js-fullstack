const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");

let dateNow = new Date();
const dateEnd = new Date();
dateEnd.setTime(dateNow.getTime() + 30000);
function countDown() {
  console.log("vao");
  counter.innerHTML = Math.floor(
    (dateEnd.getTime() - dateNow.getTime()) / 1000
  );
  if (!document.hidden) {
    dateNow = new Date();
    console.log(1);
  } else {
    console.log(0);
  }

  if (dateEnd.getTime() >= dateNow.getTime()) {
    requestAnimationFrame(countDown);
  } else {
    btn.classList.add("is-show");
  }
}
countDown();

btn.addEventListener("click", function (e) {
  window.location.href = "https://fullstack.edu.vn/";
});
