import { useContext } from 'react';
import { client } from './client.js'
import { toast } from 'react-toastify';
export async function handleGetProducts(query) {
     let url = new URLSearchParams(query);
     const { data } = await client.get(`/products?${url}`);
     console.log(data.data);
     return data.data || [];
}

export async function getEmailApi() {
     let email = prompt('Enter your email address', 'xuantuananh2212@gmail.com');
     var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
     if (pattern.test(email)) {

     } else {

     }

}