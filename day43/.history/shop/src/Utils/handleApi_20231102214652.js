import { client } from './client.js'
export async function handleGetProducts() {
     const { data } = await client.get(`/products`);
     return data.data
}