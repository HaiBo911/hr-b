// 组织架构接口
import request from '../utils/request'

/**
 * 获取组织架构数据
 * @returns
 */
export function getDepartments() {
  return request.get('/company/department')
}
