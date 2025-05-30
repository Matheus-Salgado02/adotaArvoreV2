import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:5000",
});

export default async function getArvore() {
  const reponse = await url.get("/");
  return reponse.data;
}
