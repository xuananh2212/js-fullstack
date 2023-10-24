import { App } from "./src/App";
import { routerObj } from "./src/Utils/router";
App();

function navigate(path) {
     console.log("1");
     routerObj.navigate(path);
}