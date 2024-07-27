import axios from "axios";

const instanceBaseurl = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

instanceBaseurl.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("tr_token");
    
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    
    return config;
  }, 
  function (error) {
    return Promise.reject(error);
  }
);

export default instanceBaseurl;
