import Home from "../Pages/Home/Home";
import CartsPage from "../Pages/Carts/CartsPage";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import NotFoundPage from "../Components/NotFoundPages/NotFoundPage";


const routes = [
     { path: '/', Component: Home },
     { path: '/product/:page', Component: ProductsPage },
     { path: '/carts', Component: CartsPage },
     { path: '/product-detail/:slug-:id', Component: ProductDetail },
     { path: '*', Component: NotFoundPage }
]
export default routes;

