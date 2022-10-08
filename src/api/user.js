import request from '@/utils/request'

// 登录接口
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

// 获取用户的基本资料
export function getUserInfo() {
  return request.post('/sys/profile')
}

export function getInfo(token) { }

export function logout() { }
