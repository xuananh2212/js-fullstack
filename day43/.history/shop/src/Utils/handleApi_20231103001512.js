import { useContext } from 'react';
import { client } from './client.js'
import { toast } from 'react-toastify';

export const getApiKeyCookie = () => {
     const str = document.cookie + ";";
     const pattern = /apiKey=([^;]*)/
     const strSub = str.match(pattern);
     return strSub ? strSub[1] : null;
}
export const getEmailCookie = () => {
     const str = document.cookie + ";";
     const pattern = /email=([^;]*)/
     const strSub = str.match(pattern);
     return strSub ? strSub[1] : null;
}
export async function handleGetProducts(query) {
     let url = new URLSearchParams(query);
     const { data } = await client.get(`/products?${url}`);
     console.log(data.data);
     return data.data || [];
}

export async function getEmailApi() {
     let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
     if (email) {
          let url = new URLSearchParams({ email });
          const { data } = await client.get(`/api-key?${url}`);
          if (data.code === 200) {
               const apiKey = data.data.apiKey;
               document.cookie = `apiKey=${apiKey}`;
               const { data: dataUser } = await client.get('/user/profile', apiKey);
               console.log(dataUser);
          }
     } else {
          toast.error("vui lòng nhập email!")
     }

}