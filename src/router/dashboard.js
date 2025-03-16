import DashboardView from '@views/Dashboard/DashboardView.vue'

const dashboardRoutes = [
  {
    path: '/',
    name: 'home',
    component: DashboardView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
    }
  },
];

export default dashboardRoutes;
