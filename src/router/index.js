import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/Occupation',
    name: 'Occupation',
    component: () => import('../views/Occupation.vue')
  },
  {
    path: '/detailedInfo',
    name: 'CharactersInformation',
    component: () => import('../views/CharactersInformation.vue')
  },

]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;