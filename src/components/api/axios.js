import axios from "axios";

const api = axios.create({
  baseURL: "https://api.project.com", // dari backend temanmu
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;