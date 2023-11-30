import { RouteConfig } from 'vue-router'
import { routeNames } from '@/router/RouteNames'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: routeNames.pageNotFound,
    path: '*',
    meta: {
      layout: 'Page404',
    },
    component: () => import('@/views/NotFound.vue'),
  },
]

const routesMyArray = require.context('@/views', true, /routes\.ts$/i)
routesMyArray.keys().map((key: string) => {
  routes.push(...routesMyArray(key).default)
})

export default routes
