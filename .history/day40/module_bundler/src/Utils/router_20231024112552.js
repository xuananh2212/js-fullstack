import Navigo from 'navigo';
const routerObj = new Navigo('/', { linksSelector: "a" });
const root = document.querySelector('#root');
console.log(root);
function renderRoot(root, html) {
     root.innerHTML = html;
}
function navigate(path) {
     router.navigate("path");

}
function renderHtml(defaultLayout, componentPath, params) {
     var html = defaultLayout();
     if (html) {
          html = html.replace(/\{.*\}/g, componentPath(params));
     } else {
          html = componentPath(params);
     }

     return html;
}
console.log(routerObj);
function router(arrayPath, defaultLayout) {
     if (Array.isArray(arrayPath)) {
          arrayPath.forEach(patchItems => {
               routerObj.on(patchItems.path,
                    (params) => renderRoot(root, renderHtml(defaultLayout, patchItems.component, params)))
          })
          routerObj.resolve();
     }

}

export { router, navigate };