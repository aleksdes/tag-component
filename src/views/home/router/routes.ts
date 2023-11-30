import { RouteConfig } from 'vue-router'
import { routeNames } from '@/router/RouteNames'

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: routeNames.home,
    component: () => import('@/views/home/index.vue'),
  },
]
export default routes
