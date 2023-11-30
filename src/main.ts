import Vue, {markRaw} from 'vue'
import pinia from '@/plugins/pinia'
import layouts from '~/layouts/index'
import { router } from '@/plugins/router'
import vuetify from '@/plugins/vuetify'
import '@/plugins/vue-fullscreen'
import './plugins/vee-validate'
import { createHead, HeadVuePlugin } from '@vueuse/head'
import '@/assets/styles/styles.scss'
import '@/assets/fonts/kisMrtIconFont/style.scss'
import moment from 'moment-timezone'

import App from '@/App.vue'
import Notifications from 'vue-notification'

const head = createHead()

Vue.config.productionTip = false
Vue.use(HeadVuePlugin, head)
Vue.use(head)
Vue.use(layouts)
Vue.use(Notifications)

require('moment/locale/ru')
moment.tz.setDefault(process.env.VUE_APP_TIME_ZONE_USER)
Vue.use(require('vue-moment'), { moment })

const app = new Vue({
  pinia,
  router,
  vuetify,
  render: (h) => h(App),
})

app.$mount('#app')
