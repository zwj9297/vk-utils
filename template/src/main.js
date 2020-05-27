import Vue from 'vue'
import App from './app'
import router from './router'
import './style/common.less'
import vk from 'vk-utils'

Vue.use(vk)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
