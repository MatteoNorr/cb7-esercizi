const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint) => {
  const res = await fetch("https://dummyjson.com" + endpoint);
  const data = await res.json();

  return data;
};
