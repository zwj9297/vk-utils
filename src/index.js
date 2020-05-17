// import Hello from './components/hello.vue'
// import Say from './components/say.vue'

// export { Hello, Say }

import * as components from './components'
var VuePlugin = {}
VuePlugin.install = function(Vue, options) {
    for(let component in components) {
        Vue.component('Vk'+component, components[component]);
    }
}
export default VuePlugin

