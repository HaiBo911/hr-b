import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基地址
  timeout: 5000 // 超时时间
})

// 配置请求拦截器
service.interceptors.request.use(config => {
  // 请求拦截配置
  return config
})

service.interceptors.response.use(response => {
  return response
})

export default service
