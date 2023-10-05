import { client } from "./client.js";
import { renderUi } from "./renderUi.js";
const gets = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/${path}?${queryString}`);
};

const patchs = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.patch(`/${path}?${queryString}`);
};

const deletes = async (query = {}, path) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.delete(`/${path}?${queryString}`);
};

const post = async (query = {}, path, dataParameter) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.post(`/${path}?${queryString}`, dataParameter);
};
