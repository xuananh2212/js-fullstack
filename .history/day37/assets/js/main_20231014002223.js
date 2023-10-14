import { renderSignInAndUp } from "./render.js";
import { client } from "./client.js";
import { config } from "./config.js";
client.setUrl(config.SERVER_AUTH_API);
console.log(client.serverApi);
renderSignInAndUp();
async function getBlogs() {
  const { data: blogs } = await client.get("/blogs");
  const { data: users } = await client.get("/users");
  console.log(blogs, users);
}
getBlogs();
