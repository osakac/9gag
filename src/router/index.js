import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue')
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: () => import('@/views/CreatePostPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
