//Định nghĩa các phương thức call api
import { config } from './config'
const { SERVER_API } = config;

export const client = {
     serverApi: SERVER_API,

     setUrl: function (url) {
          this.serverApi = url;
     },

     send: async function (url, method = "GET", body = null, api = null) {
          url = `${this.serverApi}${url}`;

          const headers = {
               "Content-Type": "application/json"
          };
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

     get: function (url, body = null, api = null) {
          return this.send(url, "GET", body, api);
     },

};
