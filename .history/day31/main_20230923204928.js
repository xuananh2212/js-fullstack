const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");

const dateNow = new Date();
const dateEnd = new Date();
dateEnd.setTime(dateNow + 30000);
