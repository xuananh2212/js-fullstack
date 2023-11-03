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
export async function getOrders(apiKey, setOrders) {
     console.log(setOrders);
     const { data: dataOrders } = await client.get('/orders', null, apiKey);
     if (dataOrders.code === 200) {
          setOrders(dataOrders.data);
     }

}

export async function getEmailApi(email, setOrders, setLoading) {
     if (email) {
          setLoading(true);
          console.log(11);
          let url = new URLSearchParams({ email });
          const { data } = await client.get(`/api-key?${url}`);
          if (data.code === 200) {
               console.log("chay");
               const apiKey = data.data.apiKey;
               document.cookie = `apiKey=${apiKey}`;
               getName(apiKey)
               getOrders(apiKey, setOrders);
          } else {
               toast.error("Email không tồn tại trong hệ thống!")
               let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
               getEmailApi(email, setOrders, setLoading);
          }
          console.log(1);
          setLoading(false)
     } else {
          toast.error("vui lòng nhập email!")
     }
}

export async function handleCheckApi(setOrders, setLoading) {
     let apiEmail = getApiKeyCookie();
     if (apiEmail) {
          getEmailApi(apiEmail, setOrders, setLoading);

     } else {
          let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
          getEmailApi(email, setOrders, setLoading)
     }
}

