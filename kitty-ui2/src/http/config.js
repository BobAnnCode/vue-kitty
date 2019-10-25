//axios 默认配置包含基础路径等信息
export default {
  method: 'get',
  baseURL:'http://localhost:8080/',
  headers: {
    'Content-type': 'application/json;charset=UTF-8'
  },
  data: {
    timeout: 10000,
    withCredentials: true,
    responseType: 'json'
  }
}
