import { client } from './client.js'
export async function handleGetProducts(query) {
     var url = new URLSearchParams(query);
     const { data } = await client.get(`/products?${url}`);
     console.log(data.data);
     return data.data || [];
}

export async function getEmailApi() {

}