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
  {
    path: '/profile-settings',
    name: 'profile-settings',
    component: () => import('@/views/ProfileSettingsPage.vue')
  },
  {
    path: '/profile-settings-account',
    name: 'profile-settings-account',
    component: () => import('@/views/ProfileSettingsAccountPage.vue')
  },
  {
    path: '/profile-settings-password',
    name: 'profile-settings-password',
    component: () => import('@/views/ProfileSettingsPasswordPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
