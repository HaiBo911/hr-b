import Layout from '@/layout'

export default {
  path: '/departments', // 路径
  name: 'departments', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/departments'),
      meta: { // 路由元信息
        title: '组织架构',
        icon: 'tree'
      }
    }
  ]
}
