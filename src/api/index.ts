import axios from "./axios.config";
/** api->index.js 统一命名规范
 * 接口暴露前缀统一为req -> request(请求)
 * api路径统一采用模板字符串
 * export const req[name] = axios.get(`/api/list`)
 */

// 暴露fly配置
export const axiosConfig = axios.defaults;
