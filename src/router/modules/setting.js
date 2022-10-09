import Layout from '@/layout'

export default {
  path: '/setting', // 路径
  name: 'setting', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/setting'),
      meta: { // 路由元信息
        title: '公司设置',
        icon: 'setting'
      }
    }
  ]
}
