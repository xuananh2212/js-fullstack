import { client } from "./client.js";
import { renderUi, loadWrap } from "./renderUi.js";
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
  loadWrap.classList.add("is-loading");
  const dataPosts = await gets({ _limit, _page }, "posts");
  const dataUsers = await gets({}, "users");
  const dataCategories = await gets({}, "categories");
  renderUi(dataPosts, dataUsers, dataCategories);
}
