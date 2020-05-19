import * as components from './components'
import './components/index.less'

var VuePlugin = {}
VuePlugin.install = function(Vue, options) {
    for(let component in components) {
        Vue.component('Vk'+component, components[component]);
    }
}

export default VuePlugin

