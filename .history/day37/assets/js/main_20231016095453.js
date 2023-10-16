import { renderSignInAndUp, renderBlogs } from "./render.js";
import { client } from "./client.js";
import { config } from "./config.js";
client.setUrl(config.SERVER_AUTH_API);
console.log(client.serverApi);
if (localStorage.getItem("access_token")) {
  const { data: getUser } = await client.get(
    "/users/profile",
    localStorage.getItem("access_token")
  );
  const user = getUser.data;
  if (user) {
    renderBlogs();
  } else {
    const { data: getUser } = await client.post("/auth/refresh-token");
  }
} else {
  renderSignInAndUp();
}
