//Định nghĩa các phương thức call api
import { config } from './config'
const { SERVER_API } = config;

export const client = {
     send: async function (url, method = "GET", body = null) {
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

     get: function (url, body = null) {
          return this.send(url, "GET", body, api);
     },

};
