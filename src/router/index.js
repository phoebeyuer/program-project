import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pannel',
      component: () => import('@/pages/index/pannel'),
      children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/index/components/home')
      },
      {
        path: 'knowledge',
        name: 'Knowledge',
        component: () => import('@/pages/index/components/knowledge')
      },
      {
        path: 'loggin',
        name: 'Loggin',
        component: () => import('@/pages/loggin/loggin')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/pages/register/register')
      }]     
    }
  ]
})
