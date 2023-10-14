import { renderSignInAndUp } from "./render.js";
import { client } from "./client.js";
import { config } from "./config.js";
client.setUrl(config.SERVER_AUTH_API);

renderSignInAndUp();

const getUsers = client.get("/users");
getUsers.then(function (data) {
  console.log(data);
});
