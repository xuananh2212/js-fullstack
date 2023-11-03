import { client } from './Utils/client.js'
export async function handleGetProducts(query) {
     const url = new URLSearchParams(query);
     const { data } = await client.get(`/${url}`);
     console.log(data);

}