import axios from "axios";

const apiClient = axios.create({
  headers: {
    'Content-Type' : 'application/json',
    //'Authorization' : '${TOKEN}',
  },
  baseURL: import.meta.env.VITE_API,
});

export default apiClient;