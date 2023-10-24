import Navigo from 'navigo';
const routerObj = new Navigo('/', { linksSelector: "a", hash: true });
const root = document.querySelector('#root');
function renderRoot(root, html) {
     root.innerHTML = html;
}
function router(arrayPath, defaultLayout) {
     if (Array.isArray(arrayPath)) {
          arrayPath.forEach(patchItems => {
               var html = defaultLayout();
               html = html.replace(/\{.*\}/g, patchItems.component());
               routerObj.on(patchItems.path, () => renderRoot(root, html))
          })
     }

}

export { router };