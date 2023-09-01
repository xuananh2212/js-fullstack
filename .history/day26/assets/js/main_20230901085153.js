const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnToggle = $(".btn-toggle");
const btnPrev = $(".btn-prev");
const btnNext = $(".btn-next");
const btnRandom = $(".btn-random");
const audio = $("audio");

btnToggle.addEventListener("click", function (e) {
  const iconToggle = btnToggle.firstElementChild;
  if (iconToggle.classList.contains("fa-play")) {
    audio.play();
    iconToggle.classList.remove("fa-play");
    iconToggle.classList.add("fa-pause");
  }
});
