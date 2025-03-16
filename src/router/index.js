import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { storeToRefs } from 'pinia'
import authRoutes from '@/router/auth.js'
import dashboardRoutes from '@/router/dashboard.js'
import studentRoutes from '@/router/students.js'
import teacherRoutes from '@/router/teachers.js'
import userRoutes from '@/router/users.js'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    ...dashboardRoutes,
    ...studentRoutes,
    ...teacherRoutes,
    ...userRoutes,
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const {isAuthenticated} = storeToRefs(authStore);
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // next('/login');
    next()
  }else{
    next();
  }
})


export default router
