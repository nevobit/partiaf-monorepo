import axios from "axios";

export const partiafApi = axios.create({
  // baseURL: "https://partiaf-api.xyz/api/v3",
  baseURL: "http://localhost:8000/api/v3",
  headers: {
    "api-key":
      "a0341d0de71a21b122a134576803f9fea2e9841a307b4e26f9240ac2f7d363ff3018a17f2d7f3ecb5a9fe62327e4eaf306864ec741e6432aa50faaf9d92aa6bd",
  },
});
