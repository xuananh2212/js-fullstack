import { client } from "./client.js";
import { renderUi } from "./renderUi.js";
import { totalPage, _limit } from "./main.js";
export const gets = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/${path}?${queryString}`);
  return data;
};

export const patchs = async (query = {}, path, dataParameter) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.patch(`/${path}?${queryString}`, dataParameter);
  return data;
};

export const deletes = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.delete(`/${path}?${queryString}`);
  return data;
};

export const posts = async (query = {}, path, dataParameter) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.post(`/${path}?${queryString}`, dataParameter);
  return data;
};

export async function getPosts(_limit, _page) {
  const dataPosts = await gets({ _limit, _page }, "posts");
  totalPage = dataPosts.length / _limit;
  const dataUsers = await gets({}, "users");
  const dataCategories = await gets({}, "categories");
  renderUi(dataPosts, dataUsers, dataCategories);
}
