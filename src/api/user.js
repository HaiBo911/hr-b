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
  // return request.post('/sys/profile')
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

// 获取用户的基本信息接口
export function getUserDetailByid(id) {
  return request.get(`/sys/user/${id}`)
}

export function logout() { }
