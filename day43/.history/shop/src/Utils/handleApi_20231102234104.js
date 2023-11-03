import { client } from './client.js'
export async function handleGetProducts(query) {
     let url = new URLSearchParams(query);
     const { data } = await client.get(`/products?${url}`);
     console.log(data.data);
     return data.data || [];
}

export async function getEmailApi() {
     let email = prompt('Enter your email address');
}