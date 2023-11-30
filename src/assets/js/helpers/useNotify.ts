import Vue from 'vue'
import { NotificationOptions } from 'vue-notification'

export const notify = (options: NotificationOptions) => {
  Vue.notify({
    group: 'app-front',
    title: 'Error',
    type: 'error',
    ...options,
  })
}