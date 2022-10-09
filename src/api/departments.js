// 组织架构接口
import request from '../utils/request'

/**
 * 获取组织架构数据
 * @returns
 */
export function getDepartments() {
  return request.get('/company/department')
}

/**
 * 根据id删除部门
 * @param {部门id} id
 * @returns
 */
export function delDepartments(id) {
  return request.delete(`/company/department/${id}`)
}
