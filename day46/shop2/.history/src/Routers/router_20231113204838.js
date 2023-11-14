import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";

const routes = [
     { path: '/', component: Home },
     { path: '/cart', component: Cart },
     { path: '/:slug', component: ProductDetail },

]


