import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MicroAppView from '../views/MicroAppView.vue'
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
  },
  {
    path: '/micro-app/:page*',
    name: 'microApp',
    component: MicroAppView
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

export default router
