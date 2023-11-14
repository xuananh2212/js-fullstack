import Home from "../Pages/Home/Home";
import CartsPage from "../Pages/Carts/CartsPage";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import NotFoundPage from "../Components/NotFoundPages/NotFoundPage";

const routes = [
     { path: '/', Component: Home },
     // { path: '/product/:page', Component: Home },
     { path: '/carts', Component: CartsPage },
     { path: '/product-detail/:id', Component: ProductDetail },
     { path: '*', Component: NotFoundPage }
]
export default routes;

