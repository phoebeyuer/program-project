// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import 'lib-flexible'
import './assets/reset.css'                  //导入重置样式
import './assets/styles/iconfont.css'        //导入iconfont样式

// 将aixos改写为Vue的原型属性
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
