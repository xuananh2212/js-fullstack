import { getPosts } from "./crud.js";

let _limit = 5;
let _page = 1;

getPosts(_limit, _page);

window.addEventListener("scroll", function (e) {
  console.log("chay");
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight) {
    getPosts(_limit, ++_page);
  }
});
