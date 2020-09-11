import axios from "axios";

// 定义默认配置
axios.defaults.baseURL = "https://www.baidu.com";

//添加请求拦截器
axios.interceptors.request.use(config => {
  return config;
});

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return err;
  }
);

export default axios;
