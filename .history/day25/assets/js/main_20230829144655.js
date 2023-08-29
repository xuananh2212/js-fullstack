const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPrev = $(".prev");
const btnNext = $(".next");
const carouselItems = [...$$(".carousel__items")];
const carouselInner = $(".carousel__inner");
console.log(carouselInner.clientWidth);
const dots = $(".dots");
var position = 0;
var totalWidth = carouselInner.clientWidth * carouselItems.length;
var index = 0;

if (carouselItems) {
  carouselItems.forEach((items, index) => {
    var html = `<div class="dot__item" data-index=${index}></div>`;
    dots.insertAdjacentHTML("beforeend", html);
  });
  dots.firstElementChild && dots.firstElementChild.classList.add("active");
}
const dotItems = [...$$(".dot__item")];

function moveSlide() {
  carouselInner.style.translate = `${position}px`;
  dotItems.forEach((dot) => dot.classList.remove("active"));
  const dotFocus = dotItems.find(
    (dot) => parseInt(dot.dataset.index) === index
  );
  dotFocus.classList.add("active");
}

function hanldeBtn(btn) {
  if (btn === 1) {
    if (Math.abs(position) < totalWidth - carouselInner.clientWidth) {
      index++;
      position -= carouselInner.clientWidth;
      moveSlide();
    }
  } else {
    if (position < 0) {
      index--;
      position += carouselInner.clientWidth;
      moveSlide();
    }
  }
}

btnNext.addEventListener("click", function (e) {
  hanldeBtn(1);
});
btnPrev.addEventListener("click", function (e) {
  hanldeBtn(-1);
});

dotItems.forEach((dot) => {
  dot.addEventListener("click", function (e) {
    index = dot.dataset.index;
    position = -1 * (index * carouselInner.clientWidth);
    carouselInner.style.translate = `${position}px`;
    dotItems.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});
var flag = false;
var pageXStart = 0;
var pageXMove = 0;
var distance = 0;
carouselInner.addEventListener("mousedown", function (e) {
  flag = true;
  pageXStart = e.pageX;
  console.log("mousedow" + e.pageX);
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (flag) {
    pageXMove = e.pageX;
    distance = pageXStart - e.pageX;
    console.log(Math.abs(distance));
    if (distance > 100 && index < carouselItems.length) {
      console.log("mousemove" + e.pageX);
      hanldeBtn(1);
      flag = false;
    } else {
      carouselInner.style.translate = `${position - pageXMove}px`;
    }
  }
});
carouselInner.addEventListener("mouseup", function (e) {
  flag = false;
  e.preventDefault();
  carouselInner.style.translate = `${position}px`;
});
