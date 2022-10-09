import Layout from '@/layout'

export default {
  path: '/permission', // 路径
  name: 'permission', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/permission'),
      meta: { // 路由元信息
        title: '权限管理'
      }
    }
  ]
}
