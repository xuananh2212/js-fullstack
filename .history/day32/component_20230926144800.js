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
          var keys = [];
          const results = template.match(/{{.+?}}/g);
          results.forEach((result) => {
            var variableResult = result.match(/{{(.+?)}}/);
            keys.push(variableResult[1].trim());
          });
          var str = template;
          keys.forEach((key) => {
            str = str.replace(/{{.+?}}/, window[key]);
          });
          const templateEl = document.createElement("template");
          templateEl.innerHTML = str;
          const templateNode = templateEl.content.cloneNode(true);
          [...templateNode.children].forEach((node) => {
            var matchString = node.outerHTML.match(/v-on:(\w+)=(\w+.*?)/);
            console.log(matchString);
            // if (matchString) {
            //   node.addEventListener(matchString[1], function (e) {});
            // }
          });

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
