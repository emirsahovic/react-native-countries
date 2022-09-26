import axios from "axios";

const defaultOptions = {
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    "Content-Type": "application/json",
  },
};

let apiService = axios.create(defaultOptions);

apiService.defaults.withCredentials = true;

export default apiService;
