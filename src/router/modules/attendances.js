import Layout from '@/layout'

export default {
  path: '/attendances', // 路径
  name: 'attendances', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/attendances'),
      meta: { // 路由元信息
        title: '考勤管理',
        icon: 'skill'
      }
    }
  ]
}
