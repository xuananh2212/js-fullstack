import { client } from "./client.js";
import { renderUi } from "./renderUi.js";
const gets = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/${path}?${queryString}`);
  return data;
};

const patchPosts = async (query = {}, path, dataParameter) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.patch(`/${path}?${queryString}`, dataParameter);
  return data;
};

const deletePosts = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.delete(`/${path}?${queryString}`);
  return data;
};

const postPosts = async (query = {}, path, dataParameter) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.post(`/${path}?${queryString}`, dataParameter);
  return data;
};
