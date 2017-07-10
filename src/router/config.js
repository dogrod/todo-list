export default [
  {
    path: '/',
    component: r => require.ensure([], () => r(require('@/views/index/index')), 'index'),
    children: [{
      path: '',
      name: 'Todos',
      component: r => require.ensure([], () => r(require('@/views/todos/todos')), 'todos'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: r => require.ensure([], () => r(require('@/views/login/login')), 'login'),
  },
  {
    path: '*',
    redirect: '/',
  },
]
