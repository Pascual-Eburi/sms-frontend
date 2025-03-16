const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/LoginView.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/Auth/ForgotPasswordView.vue'),
    meta: {
      requiresAuth: false,
    }
  },
]
export default authRoutes;
