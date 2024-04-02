import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WallPanel from '@/components/WallPanel.vue'
import GardenView from '@/components/GardenView.vue'
import JewelleryView from '@/components/JewelleryView.vue'
import LawnView from '@/components/LawnView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/WallPanel',
    name: 'WallPanel',
    component: WallPanel
  },
  {
    path: '/GardenView',
    name: 'GardenView',
    component: GardenView
  },
  {
    path: '/JewelleryView',
    name: 'JewelleryView',
    component: JewelleryView
  },
  {
    path: '/LawnView',
    name: 'LawnView',
    component: LawnView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
