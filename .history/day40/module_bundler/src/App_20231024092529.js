import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Products } from "./Pages/Products";
import { router } from "./Utils/router"
export default function App() {
     return router(
          [
               {
                    path: "/",
                    component: Home,
               }

          ])
}
