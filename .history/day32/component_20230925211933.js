/**
 *  kiến thức Template
 *
 *
 */

// var template = `
//      <h1>{{ title }}</h1>
//      <h2> Đã Đếm : {{ count }} lần</h2>
//      <button v-on:click="count--">-</button>
//      <button v-on:click="count++">+</button>
//     `;

// const templateEl = document.createElement("template");
// templateEl.innerHTML = template;
// const templateNode = templateEl.content.cloneNode(true);
// console.log(templateNode);

/**
 *  custom element.
 *
 */

class F8 {
  constructor() {}
  static setCustomElement(nameTag, template) {
    customElements.define(
      nameTag,
      class extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          this.innerHTML = "Hello word!";
        }
      }
    );
  }
  static component(name, object) {
    // F8.setCustomElement(name);
    if (object) {
      var data = object.data();
      if (data) {
        Object.keys(data).forEach((key) => {
          window[key] = data[key];
        });
        var templateold = object.template;
        if (templateold) {
        }
      }
    }
  }
}
