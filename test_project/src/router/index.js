import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Simulator from '../views/SimulatorView.vue'
import AboutMe from '../views/AboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sim',
    name: 'Simulator',
    component: Simulator
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: AboutMe
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
