import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WalletView from '../views/WalletView.vue'
import BetView from '../views/BetView.vue'
import NotFoundView from '@/views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView
    },
    {
      path: '/bet',
      name: 'bet',
      component: BetView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }

  ]
})

export default router
