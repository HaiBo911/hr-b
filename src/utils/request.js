import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import router from '../router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基地址
  timeout: 5000 // 超时时间
})

// 配置请求拦截器
service.interceptors.request.use(config => {
  // 请求拦截配置

  // 统一注入token
  if (store.getters.token) {
    console.log(store.getters.token)
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
})

service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  // token失效处理
  if (error.response && error.response.data.code === 10002) {
    store.dispatch('user/logout') // 退出登录
    router.push('/login') // 跳转到登录页
  }
  Message.error(error.message) // 提示错误信息
  return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
})

export default service
