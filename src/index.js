import Hello from './components/hello'
import Say from './components/say'

const components = { Hello, Say }

var VuePlugin = {}
VuePlugin.install = function(Vue) {
  Object.keys(components).forEach(name => {
    Vue.component('Vk'+name, components[name])
  })
}

export default VuePlugin

