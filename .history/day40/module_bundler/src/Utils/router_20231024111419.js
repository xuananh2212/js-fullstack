import Navigo from 'navigo';
const routerObj = new Navigo('/', { linksSelector: "a" });
const root = document.querySelector('#root');
console.log(root);
function renderRoot(root, html) {
     root.innerHTML = html;
}
function renderHtml(defaultLayout) {
     var html = defaultLayout();
     html = html.replace(/\{.*\}/g, patchItems.component());
}
console.log(routerObj);
function router(arrayPath, defaultLayout) {
     if (Array.isArray(arrayPath)) {
          arrayPath.forEach(patchItems => {
               var html = defaultLayout();
               console.log(patchItems.path);

               console.log(html);
               routerObj.on(patchItems.path, () => renderRoot(root, html))
          })
          routerObj.resolve();
     }

}

export { router };