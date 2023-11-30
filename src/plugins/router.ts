import Vue from 'vue'
import VueRouter from 'vue-router'
import paths from '@/router/routes'
Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  linkActiveClass: 'active',
  routes: paths,
  scrollBehavior(to, from, savedPosition): any {
    if (to.name === from.name) {
      return false
    }
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
})

export { router }
