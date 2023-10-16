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
    const { data } = await client.post("/auth/refresh-token", {
      refreshToken: localStorage.getItem("refresh_token"),
    });
    if (data.code === 200) {
    } else {
      renderSignInAndUp();
    }
  }
} else {
  renderSignInAndUp();
}
