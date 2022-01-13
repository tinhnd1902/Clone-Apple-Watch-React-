import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "content-type": "application.json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
console.log(process.env.REACT_APP_API_ENDPOINT);

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
