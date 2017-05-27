import App from '@/app'

export default [
  {
    path: '/',
    component: App,
    children: [{
      path: '',
      name: 'Todos',
      component: r => require.ensure([], () => r(require('@/views/todos/todos')), 'todos')
    }, {
      path: 'login',
      name: 'Login',
      component: r => require.ensure([], () => r(require('@/views/login/login')), 'login')
    }]
  }
]
