import { getPosts } from "./crud.js";

export let _limit = 5;
export let _page = 1;
export let totalPage = null;

getPosts(_limit, _page);

window.addEventListener("scroll", function (e) {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  console.log(scrollHeight, scrollTop, clientHeight);
  if (clientHeight + scrollTop >= scrollHeight - 1) {
    console.log("chay");
    getPosts(_limit, ++_page);
  }
});
