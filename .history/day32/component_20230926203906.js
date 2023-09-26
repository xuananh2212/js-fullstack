class F8 {
  constructor() {}
  static setCustomElement(nameTag, template, data) {
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
          if (results) {
            results.forEach((result) => {
              var variableResult = result.match(/{{(.+?)}}/);
              keys.push(variableResult[1].trim());
            });
          }
          var str = template;
          keys.forEach((key) => {
            str = str.replace(/{{.+?}}/, "+" + window[key] + "+");
          });
          const templateEl = document.createElement("template");
          templateEl.innerHTML = str;
          const templateNode = templateEl.content.cloneNode(true);
          [...templateNode.children].forEach((node) => {
            console.log(node.children);
          });

          [...templateNode.children].forEach((node) => {
            var matchString = node.outerHTML.match(/v-on:(\w+)=["'](.*)["']/);
            if (matchString) {
              node.addEventListener(matchString[1], function (e) {
                console.log(eval(matchString[2]));
                var strNew = template;
                keys.forEach((key) => {
                  strNew = strNew.replace(/{{.+?}}/, window[key]);
                });
                const templateElNew = document.createElement("template");
                console.log(strNew);
                templateElNew.innerHTML = strNew;
                const templateNodeNew = templateElNew.content.cloneNode(true);
                [..._this.children].forEach((nodeElement, index) => {
                  console.log(nodeElement.childNodes);
                  if (
                    nodeElement.innerHTML.trim() !==
                    [...templateNodeNew.children][index].innerHTML.trim()
                  )
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
      var data = object.data;
      var templateold = object.template;
      if (data) {
        console.log(data());
        Object.keys(data()).forEach((key) => {
          window[key] = data()[key];
        });

        if (templateold) {
          F8.setCustomElement(name, templateold);
        }
      } else {
        F8.setCustomElement(name, templateold);
      }
    }
  }
}
