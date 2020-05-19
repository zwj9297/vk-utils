import './index.less'

export default {
  name: 'Hello',
  render(h) {
    return h('div', { class: 'vk-hello' }, [
      h('div', { class: 'vk-hello__title' }, [
        'hello world'
      ])
    ])
  }
}