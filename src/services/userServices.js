import api from "../components/api/axios";

export const getUsers = () => api.get("/users");