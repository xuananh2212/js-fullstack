import { SERVER_API } from "./config";

const client = {
  server_api: SERVER_API,
  setURL(url) {
    this.server_api = url;
  },
  send: async function (method = "GET", body = null) {
    const options = {
      method,
      headers: {
        "content-type": "application/json",
      },
    };
  },
};
