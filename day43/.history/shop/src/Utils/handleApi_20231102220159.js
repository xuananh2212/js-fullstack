import { client } from './client.js'
export async function handleGetProducts() {
     const { data } = await client.get(`/products`);
     console.log(data.data);
     return data.data;
}