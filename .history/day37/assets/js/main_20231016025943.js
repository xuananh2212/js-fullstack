import { renderSignInAndUp, renderBlogs } from "./render.js";
import { client } from "./client.js";
import { config } from "./config.js";
client.setUrl(config.SERVER_AUTH_API);
console.log(client.serverApi);
if (localStorage.getItem("access_token")) {
  const getUser = client.get;
  renderBlogs();
} else {
  renderSignInAndUp();
}