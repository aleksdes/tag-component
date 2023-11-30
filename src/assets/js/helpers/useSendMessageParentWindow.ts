import { Route } from 'vue-router/types/router'

const sendMessageParentWindow = (url: Route, settings={}) => {
  const message = JSON.stringify({
    ...settings,
    ...url?.meta,
    target: 'new-front-river',
  })

  window.parent.postMessage(message, '*')
}

export default sendMessageParentWindow
