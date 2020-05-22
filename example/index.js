import Vue from 'vue'
import vk from '../src/index.js'
import '../src/style.less'

Vue.use(vk)

const App = Vue.extend({
  render(h) {
    return h('div', {}, [
      'this is example',
      h('vk-hello'),
      h('vk-say', { props: { name: 'lily' } })
    ])
  }
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')