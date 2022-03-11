import axios from 'axios';

const request = axios.create({});

// 请求拦截器
request.interceptors.request.use(
  (req) => req,
  (err) => err,
);

// 响应拦截器
request.interceptors.response.use(
  (res) => res,
  (err) => err,
);

export default request;
