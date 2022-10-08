import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo, getUserDetailByid } from '@/api/user'

const state = {
  token: getToken(), // 设置token初始状态   token持久化 => 放到缓存中
  userInfo: {} // 接收用户信息
}
const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token // 存储在vuex中
    setToken(token) // 本地存储, 实现数据持久化
  },
  // 删除token
  removeToken(state) {
    state.token = null // 清除token
    removeToken() // 清除本地存储token
  },
  // 设置用户信息
  setUserInfo(state, payload) {
    state.userInfo = { ...payload }
  },
  // 删除用户信息
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  // 定义login action  也需要参数 调用action时 传递过来的参数
  async login(context, data) {
    const result = await login(data) // 实际上就是一个promise  result就是执行的结果
    context.commit('setToken', result)
  },

  // 获取用户资料
  async getUserInfo(context) {
    const result = await getUserInfo() // 获取用户基本信息
    const baseInfo = await getUserDetailByid(result.userId) // 获取用户id
    const baseResult = { ...result, ...baseInfo }
    context.commit('setUserInfo', baseResult)
    return baseResult
  },

  // 退出登录
  async logout({ commit }) {
    // 删除token
    commit('removeToken')
    // 清空用户信息
    commit('removeUserInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

// const getDefaultState = () => {
//   return {
//     token: getToken(),
//     name: '',
//     avatar: ''
//   }
// }

// const state = getDefaultState()

// const mutations = {
//   RESET_STATE: (state) => {
//     Object.assign(state, getDefaultState())
//   },
//   SET_TOKEN: (state, token) => {
//     state.token = token
//   },
//   SET_NAME: (state, name) => {
//     state.name = name
//   },
//   SET_AVATAR: (state, avatar) => {
//     state.avatar = avatar
//   }
// }

// const actions = {
//   // user login
//   login({ commit }, userInfo) {
//     const { username, password } = userInfo
//     return new Promise((resolve, reject) => {
//       login({ username: username.trim(), password: password }).then(response => {
//         const { data } = response
//         commit('SET_TOKEN', data.token)
//         setToken(data.token)
//         resolve()
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // get user info
//   getInfo({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       getInfo(state.token).then(response => {
//         const { data } = response

//         if (!data) {
//           return reject('Verification failed, please Login again.')
//         }

//         const { name, avatar } = data

//         commit('SET_NAME', name)
//         commit('SET_AVATAR', avatar)
//         resolve(data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // user logout
//   logout({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       logout(state.token).then(() => {
//         removeToken() // must remove  token  first
//         resetRouter()
//         commit('RESET_STATE')
//         resolve()
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // remove token
//   resetToken({ commit }) {
//     return new Promise(resolve => {
//       removeToken() // must remove  token  first
//       commit('RESET_STATE')
//       resolve()
//     })
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }

