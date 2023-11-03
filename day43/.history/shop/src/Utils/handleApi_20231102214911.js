import { client } from './client.js'
export async function handleGetProducts(products) {
     const { data } = await client.get(`/products`);
     products = data.data;
     console.log(products)
}