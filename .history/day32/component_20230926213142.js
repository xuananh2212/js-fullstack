class F8 {
  constructor() {}

  static renderTextNode(templateNode) {
    [...templateNode.children].forEach((node) => {
      var nodeStr = node.childNodes[0].textContent;
      node.innerHTML = "";
      var ArrTextNodeStr = nodeStr.split("/");
      var textNodeStr = nodeStr.match(/[/](.*)[/]/);
      if (ArrTextNodeStr) {
        ArrTextNodeStr.forEach((text) => {
          if (text) {
            const textNodeObj = document.createTextNode(text);
            if (textNodeStr && textNodeStr[1] === text) {
              textNodeObj.className = "choic";
            }
            node.append(textNodeObj);
          }
        });
      }
    });
  }
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
            str = str.replace(/{{.+?}}/, "/" + window[key] + "/");
          });
          const templateEl = document.createElement("template");
          templateEl.innerHTML = str;
          const templateNode = templateEl.content.cloneNode(true);
          F8.renderTextNode(templateNode);
          [...templateNode.children].forEach((node) => {
            var matchString = node.outerHTML.match(/v-on:(\w+)=["'](.*)["']/);
            if (matchString) {
              node.addEventListener(matchString[1], function (e) {
                console.log(eval(matchString[2]));
                var strNew = template;
                keys.forEach((key) => {
                  strNew = strNew.replace(/{{.+?}}/, "/" + window[key] + "/");
                });
                const templateElNew = document.createElement("template");
                templateElNew.innerHTML = strNew;
                const templateNodeNew = templateElNew.content.cloneNode(true);
                F8.renderTextNode(templateNodeNew);
                [..._this.children].forEach((nodeElement, index) => {
                  var textNodeTemplate = [...templateNodeNew.children][index];
                  if (
                    nodeElement.innerHTML.trim() !==
                    textNodeTemplate.innerHTML.trim()
                  )
                    [...nodeElement.childNodes].forEach(
                      (textNode, indexNode) => {
                        if (
                          textNode.textContent !==
                          [...textNodeTemplate.childNodes][indexNode]
                            .textContent
                        ) {
                          textNode.textContent = [
                            ...textNodeTemplate.childNodes,
                          ][indexNode].textContent;
                        }
                      }
                    );
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
