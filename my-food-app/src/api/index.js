import axios from "axios";
import { getToken } from "@/contexts/AuthContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api/"
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers["Authorization"] = `Token ${token}`;
  return config;
});

export default api;
