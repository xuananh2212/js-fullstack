import Navigo from 'navigo';
const router = new Navigo('/', { linksSelector: "a" }, hash = true);
function router(array, defaultLayout) {
     return (
          <div>router</div>
     )
}

export { router };