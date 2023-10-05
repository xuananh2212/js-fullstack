import { client } from "./client.js";
import { renderUi } from "./renderUi.js";
const getPosts = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/${path}?${queryString}`);
};
