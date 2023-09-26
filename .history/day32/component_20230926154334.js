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
          var _this = this;
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
            var matchString = node.outerHTML.match(/v-on:(\w+)=["'](.*)["']/);
            if (matchString) {
              node.addEventListener(matchString[1], function (e) {
                console.log(eval(matchString[2]));
                var str1 = template;
                keys.forEach((key) => {
                  str1 = str1.replace(/{{.+?}}/, window[key]);
                });
                const templateElNew = document.createElement("template");
                templateElNew.innerHTML = str1;
                const templateNodeNew = templateElNew.content.cloneNode(true);
                console.log(templateNodeNew.children);
                console.log(_this.children);
                [..._this.children].forEach((nodeElement, index) => {
                  nodeElement.innerHTML = [...templateNodeNew.children][
                    index
                  ].innerHTML;
                });
              });
            }
          });

          this.append(templateNode);
        }
      }
    );
  }
  static component(name, object) {
    if (object) {
      var data = object.data();
      if (data) {
        Object.keys(data).forEach((key) => {
          window[key] = data[key];
        });
        var templateold = object.template;
        if (templateold) {
          F8.setCustomElement(name, templateold);
        }
      }
    }
  }
}
