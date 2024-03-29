import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'

const routes = [
  {
    path: '/',
    name: 'Home View',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'Movie View',
    component: MovieView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
