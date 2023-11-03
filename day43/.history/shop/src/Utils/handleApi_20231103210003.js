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
     const pattern = /userName=([^;]*)/
     const strSub = str.match(pattern);
     return strSub ? strSub[1] : null;
}
export async function handleGetProducts(query) {
     //
     let url = new URLSearchParams(query);
     const { data } = await client.get(`/products?${url}`);
     console.log(data.data);
     return data.data || [];
}
export async function getName(apiKey) {
     const { data: dataUser } = await client.get('/users/profile', null, apiKey);
     if (dataUser.code === 200) {
          document.cookie = `userName=${dataUser.data.emailId.name}`;
     }
}

export async function getEmailApi(email) {
     if (email) {
          let url = new URLSearchParams({ email });
          const { data } = await client.get(`/api-key?${url}`);
          if (data.code === 200) {
               console.log("chay");
               const apiKey = data.data.apiKey;
               document.cookie = `apiKey=${apiKey}`;
               getName(apiKey)
          } else {
               //toast.error("Email không tồn tại trong hệ thống!")
               let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
               getEmailApi(email);
          }
     } else {
          toast.error("vui lòng nhập email!")
     }
}

export async function handleCheckApi() {
     let apiEmail = getApiKeyCookie();
     if (apiEmail) {
          getEmailApi(apiEmail);

     } else {
          let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
          getEmailApi(email)
     }
}

export async function handlePostOderAPI(productId, quantity) {
     console.log(getApiKeyCookie());
     const { data } = await client.post('/orders', [{ productId, quantity }], getApiKeyCookie());
     console.log(data);
}

