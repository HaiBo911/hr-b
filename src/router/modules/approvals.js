import Layout from '@/layout'

export default {
  path: '/approvals', // 路径
  name: 'approvals', // 命名路由
  component: Layout,
  children: [
    {
      path: '', // 二级路由(默认)
      component: () => import('@/views/approvals'),
      meta: { // 路由元信息
        title: '审批管理',
        icon: 'tree-table'
      }
    }
  ]
}
