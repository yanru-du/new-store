import Vue from 'vue'
import App from './App.vue'
import router from './router'


import 'assets/js/common.js'   // 字体设置
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
