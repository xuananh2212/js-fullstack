const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");

let dateNow = new Date();
const dateEnd = new Date();
console.log(dateNow.getTime());
console.log(dateNow.getTime() + 30000);
dateEnd.setTime(dateNow.getTime() + 30000);
console.log(dateEnd.getTime(), dateNow.getTime());
counter.innerHTML = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

function countDown() {
  console.log(1);
  console.log(2);
  requestAnimationFrame(countDown);
}
countDown();

// console.log(dateNow.getTime(), dateEnd.getTime());
// console.log("vao");
// counter.innerHTML = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);
// if (dateEnd.getTime() < dateNow.getTime());
// console.log(Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000));
// dateNow.setTime(new Date().getTime());
