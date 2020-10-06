import Axios from 'axios';


const config=require('./config')[process.env.REACT_APP_NODE_ENV||'development']

export const axiosInstance = Axios.create({
  baseURL:config.API_BASE_URL,
  method: 'post',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    },
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (request && request.data) {
    }
    return request;
  },
  err => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
 
    return response;
  },
  err => Promise.reject(err)
);

export const axiosGetInstance = Axios.create({
  baseURL:config.API_BASE_URL,
  method: 'get',
  withCredentials: true,
  headers: {
  Accept: 'application/json',
  }
});
