import _Vue from 'vue'

const filesLayouts = require.context('.', true, /\.vue$/i)

export default {
  install(Vue: typeof _Vue) {
    const globalLayouts = filesLayouts.keys().filter((key) => key.split('/').length === 2)
    globalLayouts.map((key: string) =>
      Vue.component(
        key?.split('/')?.pop()?.split('.')[0] || 'defaultName',
        filesLayouts(key).default))
  },
}