import Layout from '@/layout'

export default {
  path: '/social', // 路径
  name: 'social', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/social'),
      meta: { // 路由元信息
        title: '社保管理',
        icon: 'table'
      }
    }
  ]
}
