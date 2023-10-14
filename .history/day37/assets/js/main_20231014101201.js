import { renderSignInAndUp } from "./render.js";
import { client } from "./client.js";
import { config } from "./config.js";
client.setUrl(config.SERVER_AUTH_API);
console.log(client.serverApi);
// renderSignInAndUp();
async function getUser() {
  const { data } = client.get(
    "/auth/users",
    localStorage.getItem("access_token")
  );
  console.log(data);
}
