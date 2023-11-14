import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import NotFoundPage from "../Components/NotFoundPages/NotFoundPage";

const routes = [
     { path: '/', component: Home },
     { path: '/cart', component: Cart },
     { path: '/:slug', component: ProductDetail },
     { path: '*', component: NotFoundPage }

]
export default routes;

