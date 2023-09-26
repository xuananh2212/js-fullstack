/**
 *  kiến thức Template
 *
 *
 */

var template = `
     <h1>{{ title }}</h1>
     <h2> Đã Đếm : {{ count }} lần</h2>
     <button v-on:click="count--">-</button>
     <button v-on:click="count++">+</button>
    `;

const templateEl = document.createElement("template");
templateEl.innerHTML = template;
const templateNode = templateEl.content.cloneNode(true);

// class F8 {
//   constructor() {}
//   static component(name, object) {}
// }
