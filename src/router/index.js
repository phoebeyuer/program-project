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
      //主页板块
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
      //知识体系板块
      {
        path: 'knowledge',
        name: 'Knowledge',
        component: () => import('@/pages/index/components/knowledge'),
        redirect: {name: 'KnowledgeAll'},
        children: [
        {
          path: 'knowledgeAll',
          name: 'KnowledgeAll',
          component: () => import('@/pages/knowledge/knowledgeAll')
        },
        {
          path: 'knowledgeHtml',
          name: 'KnowledgeHtml',
          component: () => import('@/pages/knowledge/knowledgeHtml')
        },
        {
          path: 'knowledgeCss',
          name: 'KnowledgeCss',
          component: () => import('@/pages/knowledge/knowledgeCss')
        },
        {
          path: 'knowledgeJavascript',
          name: 'KnowledgeJavascript',
          component: () => import('@/pages/knowledge/knowledgeJavascript')
        },
        {
          path: 'knowledgeWebpack',
          name: 'KnowledgeWebpack',
          component: () => import('@/pages/knowledge/knowledgeWebpack')
        },
        ]
      },
      //话题板块（该板块暂未填充内容）
      {
        path: 'topic',
        name: 'Topic',
        component: () => import('@/pages/index/components/topic')
      },
      //博客板块
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/pages/index/components/blog'),
        redirect: {name: 'BlogAllType'},
        children: [
        {
          path: 'blogAllType',
          name: 'BlogAllType',
          component: () => import('@/pages/blog/blogAllType'),
        },
        {
          path: 'blogPrimary',
          name: 'BlogPrimary',
          component: () => import('@/pages/blog/blogPrimary'),
        },
        {
          path: 'blogShareExperience',
          name: 'BlogShareExperience',
          component: () => import('@/pages/blog/blogShareExperience'),
        },
        {
          path: 'blogShareProject',
          name: 'BlogShareProject',
          component: () => import('@/pages/blog/blogShareProject'),
        },
        ]
      },
      //登录功能
      {
        path: 'loggin',
        name: 'Loggin',
        component: () => import('@/pages/loggin/loggin')
      },
      //注册功能
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/pages/register/register')
      },
      //写博客功能，采用富文本实现
      {
        path: 'blogWrite',
        name: 'BlogWrite',
        component: () => import('@/pages/blog/blogWrite'),
      },
        ]     
    }
  ]
})
