import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/Auth' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView.vue'),
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LoginView.vue'),
    }
  ],
})
router.beforeEach((to, from, next) => {
const user = auth.currentUser
if (to.meta.requiresAuth && !user) {
  next("/login")
}else {
  next()
}
})

export default router
