import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Showrooms from '../pages/Showrooms.vue'
import Sessions from '../pages/Sessions.vue'
import Map from '../pages/Map.vue'
import AdminDashboard from '../pages/AdminDashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/showrooms', component: Showrooms },
  { path: '/sessions', component: Sessions },
  { path: '/map', component: Map },
  { path: '/admin', component: AdminDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
