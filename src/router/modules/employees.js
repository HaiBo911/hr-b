import Layout from '@/layout'

export default {
  path: '/employees', // 路径
  name: 'employees', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/employees'),
      meta: { // 路由元信息
        title: '员工管理',
        icon: 'people'
      }
    }
  ]
}
