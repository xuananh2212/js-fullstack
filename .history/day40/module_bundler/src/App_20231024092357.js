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
