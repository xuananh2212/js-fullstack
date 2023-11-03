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
     return data?.data || [];
}
export async function getName(apiKey) {
     const { data: dataUser } = await client.get('/users/profile', null, apiKey);
     if (dataUser.code === 200) {
          document.cookie = `userName=${dataUser.data.emailId.name}`;
     }
     return dataUser;
}

export async function getEmailApi(email, setLoading) {
     setLoading(true)
     if (email) {
          let url = new URLSearchParams({ email });
          const { data } = await client.get(`/api-key?${url}`);
          if (data.code === 200) {
               const apiKey = data.data.apiKey;
               document.cookie = `apiKey=${apiKey}`;
               getName(apiKey)
          } else {
               toast.error("Email không tồn tại trong hệ thống!");
               setTimeout(() => {
                    let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
                    getEmailApi(email);
               }, 1000)
          }
     } else {
          toast.error("vui lòng nhập email!")
     }
     setLoading(false)
}

export async function handleCheckApi(setLoading, products) {
     setLoading(true);
     const data = await handleGetProducts({ limit: 8 });
     products[0] = data;
     let apiEmail = getApiKeyCookie();
     if (apiEmail) {
          const data = await getName(apiEmail);
          if (data.code === 200) {
               toast.success(`xin chào ${getEmailCookie()} đã quay trở lại!`)
          } else {
               let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
               getEmailApi(email, setLoading);
          }

     } else {
          let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
          getEmailApi(email, setLoading)
     }
     setLoading(false);
}

export async function handlePostOderAPI(array, setCarts, setLoading) {
     setLoading(true);
     let newArray = JSON.parse(JSON.stringify(array));
     newArray?.forEach(item => {
          delete item?.price
          delete item?.name
     });
     const { data } = await client.post('/orders', newArray, getApiKeyCookie());
     if (data.code === 200) {
          toast.success("Thanh Toán Thành Công");
          localStorage.removeItem('carts');
          setCarts([]);

     } else {
          toast.error("thành công thất bại")
     }
     setLoading(false)
}

