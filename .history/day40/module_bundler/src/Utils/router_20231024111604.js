import Navigo from 'navigo';
const routerObj = new Navigo('/', { linksSelector: "a" });
const root = document.querySelector('#root');
console.log(root);
function renderRoot(root, html) {
     root.innerHTML = html;
}
function renderHtml(defaultLayout, params) {
     var html = defaultLayout();
     html = html.replace(/\{.*\}/g, patchItems.component(params));
     return html;
}
console.log(routerObj);
function router(arrayPath, defaultLayout) {
     if (Array.isArray(arrayPath)) {
          arrayPath.forEach(patchItems => {
               routerObj.on(patchItems.path, (params) => renderRoot(root, renderHtml(defaultLayout, params)))
          })
          routerObj.resolve();
     }

}

export { router };