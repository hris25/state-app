import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://state-app-dmo7.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;