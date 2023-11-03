import { client } from './client.js'
export async function handleGetProducts(query) {

     const { data } = await client.get(`/products?limit=8`);
     console.log(data.data);
     return data.data || [];
}