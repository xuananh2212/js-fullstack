import Home from "../Pages/Home/Home";
import Cart from "../Pages/Carts/CartsPage";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import NotFoundPage from "../Components/NotFoundPages/NotFoundPage";

const routes = [
     { path: '/', Component: Home },
     { path: '/carts', Component: Cart },
     { path: '/:id', Component: ProductDetail },
     { path: '*', Component: NotFoundPage }

]
export default routes;

