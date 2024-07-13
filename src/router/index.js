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
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('../views/Errorpage.vue'),
      meta: {
        tittle: 'NotFound',
        description: 'This is the 404 page'
      }
    },

    {
      path: '/errorboundary',
      name: 'error-boundary',
      component: () => import('../views/Errorpage.vue')
    },

    {
      path: '/repopage/:name',
      name: 'repo-details',
      component: () => import('../views/Repopage.vue')
    }
  ]
})

export default router
