import { client } from "./client";

const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/posts?${queryString}`);
};
