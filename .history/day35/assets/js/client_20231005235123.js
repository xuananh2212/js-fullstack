import { SERVER_API } from "./config";

const client = {
  server_api: SERVER_API,
  setURL(url) {
    this.server_api = url;
  },
  send: async function (url, method = "GET", body = null) {
    this.server_api = this.server_api + "/" + url;
    const options = {
      method,
      headers: {
        "content-type": "application/json",
      },
    };
  },
};
