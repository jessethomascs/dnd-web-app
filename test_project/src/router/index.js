import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/HomeView.vue"
import Simulator from "@/views/SimulatorView.vue"

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/sim",
    name: "Simulator",
    component: Simulator,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router