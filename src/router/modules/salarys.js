import Layout from '@/layout'

export default {
  path: '/salarys', // 路径
  name: 'salarys', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/salarys'),
      meta: { // 路由元信息
        title: '工资管理',
        icon: 'money'
      }
    }
  ]
}
