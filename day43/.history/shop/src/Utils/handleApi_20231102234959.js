import { client } from './client.js'
import { toast } from 'react-toastify';
export async function handleGetProducts(query) {
     let url = new URLSearchParams(query);
     const { data } = await client.get(`/products?${url}`);
     console.log(data.data);
     return data.data || [];
}

export async function getEmailApi() {


}