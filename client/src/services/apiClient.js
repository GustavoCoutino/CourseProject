import axios from "axios";
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;
