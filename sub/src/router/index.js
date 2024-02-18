import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { RouterLayout } from '@/layouts'

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

export default router
