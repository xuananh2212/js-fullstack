import { renderSignInAndUp } from "./render.js";
import { client } from "./client.js";
import { config } from "./config.js";
client.setUrl(config.SERVER_AUTH_API);
console.log(client.serverApi);
renderSignInAndUp();
async function getBlogs() {
  const { blogs } = client.get("/blogs");
  const { users } = client.get("/users");
  console.log(blogs, users);
}
getBlogs();
