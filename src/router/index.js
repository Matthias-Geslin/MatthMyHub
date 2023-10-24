import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('../views/MailView.vue')
    },
    {
      path:'/creations',
      name:'creations',
      component: () => import('../views/CreationsView.vue')
    }
  ]
})

export default router
