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
          const results = html.match(/{{.+?}}/g);
          var keys = [];
          console.log(results);
          results.forEach((result) => {
            var variableResult = result.match(/{{(.+?)}}/);
            keys.push(variableResult[1].trim());
          });
          const templateEl = document.createElement("template");
          templateEl.innerHTML = template;
          const templateNode = templateEl.content.cloneNode(true);
          console.log(templateNode.children);
          this.append(templateNode);
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
          F8.setCustomElement(name, templateold);
          //   F8.setCustomElement(name, templateold);
          // var template = `
          //      <h1>{{ title }}</h1>
          //      <h2> Đã Đếm : {{ count }} lần</h2>
          //      <button v-on:click="count--">-</button>
          //      <button v-on:click="count++">+</button>
          //     `;
        }
      }
    }
  }
}

const html = `
     <h1>{{ title }}</h1>
     <h2> Đã Đếm : {{ count }} lần</h2>
     <button v-on:click="count--">-</button>
     <button v-on:click="count++">+</button>
    `;

const results = html.match(/{{.+?}}/g);
console.log(results);

results.forEach((result) => {
  var variableResult = result.match(/{{(.+?)}}/);
  console.log(variableResult[1].trim());
});
console.log(results);
