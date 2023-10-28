//Định nghĩa các phương thức call api
import { config } from './config'
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API,

  setUrl: function (url) {
    this.serverApi = url;
  },

  send: async function (url, method = "GET", body = null, token = null) {
    url = `${this.serverApi}${url}`;

    const headers = {
      "Content-Type": "application/json"
    };
    if (token) {
      headers["Authorization"] = "Bearer " + token;
    }
    const options = {
      method,
      headers,
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);

    const data = await response.json();

    return { response, data };
  },

  get: function (url, api = null) {
    return this.send(url, "GET", api = null);
  },

  post: function (url, body = {}, api = null) {
    return this.send(url, "POST", body, api);
  },

  put: function (url, body = {}, api = null) {
    return this.send(url, "PUT", body, api);
  },

  patch: function (url, body = {}, api = null) {
    return this.send(url, "PATCH", body, api);
  },

  delete: function (url, api = null) {
    return this.send(url, "DELETE", null, api);
  },
};
