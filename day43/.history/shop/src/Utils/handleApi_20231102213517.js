import { client } from './Utils/client.js'
export async function handleGetProducts(query) {
     const url = new URLSearchParams(query);
     const { data } = await client.get(` /products${url}`);
     console.log(data);

}