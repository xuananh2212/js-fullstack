const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");

const dateNow = new Date();
const dateEnd = new Date();
dateEnd.setTime(dateNow.getTime + 30000);
while (dateNow.getTime * 1000 <= dateEnd.getTime * 1000) {
  console.log("vao");
  counter.innerHTML = Math.floor((dateEnd.getTime - dateNow.getTime) / 1000);
  dateNow = new Date();
}
