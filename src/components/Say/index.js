import './index.less'

export default {
  name: 'Say',
  props: {
    name: { type: String }
  },
  render(h) {
    return h('div', { class: 'vk-say' }, [
      h('div', { class: 'vk-say__title' }, [
        `hi, my name is ${this.name}`
      ])
    ])
  }
}