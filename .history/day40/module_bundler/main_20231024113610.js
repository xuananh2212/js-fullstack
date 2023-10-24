import { App } from "./src/App";
import { routerObj } from "./src/Utils/router";
App();

function navigate(path) {
     routerObj.navigate(path);
}