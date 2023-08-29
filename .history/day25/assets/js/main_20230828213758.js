const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPrev = $(".prev");
const btnNext = $(".next");
const carousel = $(".carousel");
const carouselItems = [...$$(".carousel__items")];
const carouselInner = $(".carousel__inner");
const dots = $(".dots");
var position = 0;
var totalWidth = carousel.offsetWidth * carouselItems.length;

if (carouselItems) {
  carouselItems.forEach((items, index) => {
    var html = `<div class="dot__item" data-index=${index}></div>`;
    dots.insertAdjacentHTML("beforeend", html);
  });
  dots.firstElementChild && dots.firstElementChild.classList.add("active");
}

btnNext.addEventListener("click", function (e) {
  if (Math.abs(position) < totalWidth) {
    position -= carousel.offsetWidth;
    carouselInner.style.traslate = `${-1 * position}px`;
  }
});
