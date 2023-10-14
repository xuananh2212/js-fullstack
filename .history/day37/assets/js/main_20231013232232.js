import { renderSignInAndUp } from "./render.js";
import { client } from "./client.js";
import { config } from "./config.js";
client.setUrl(config.SERVER_AUTH_API);

renderSignInAndUp();
