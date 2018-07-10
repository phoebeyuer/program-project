import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pannel',
      component: () => import('@/pages/index/pannel'),
      redirect: {name: 'Home'},
      children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/index/components/home'),
        redirect: {name: 'HomeHotArtical'},
        children: [
        {
          path: 'homeHotArtical',
          name: 'HomeHotArtical',
          component: () => import('@/pages/home/components/homeHotArtical')
        },
        {
          path: 'homeHtml',
          name: 'HomeHtml',
          component: () => import('@/pages/home/components/homeHtml')
        },
        {
          path: 'homeCss',
          name: 'HomeCss',
          component: () => import('@/pages/home/components/homeCss')
        },
        {
          path: 'homeJavascript',
          name: 'HomeJavascript',
          component: () => import('@/pages/home/components/homeJavascript')
        },
        {
          path: 'homeWebpack',
          name: 'HomeWebpack',
          component: () => import('@/pages/home/components/homeWebpack')
        }
        ]
      },
      {
        path: 'knowledge',
        name: 'Knowledge',
        component: () => import('@/pages/index/components/knowledge')
      },
      {
        path: 'topic',
        name: 'Topic',
        component: () => import('@/pages/index/components/topic')
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/pages/index/components/blog')
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
