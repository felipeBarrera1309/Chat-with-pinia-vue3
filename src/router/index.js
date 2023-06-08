import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeMain',
      component: HomeView,
      children: [
        {
          path: ':id(\\d+)',
          component: () => import('../pages/MessagesView.vue')
        },
        {
          path: ':(.*)',
          component: () => import('../pages/VoidMessagesView.vue')
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/ProfileView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue')
    }
  ]
})

export default router
