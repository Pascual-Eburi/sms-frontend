let teacherRoutes = [
  {
    path: '/teachers',
    name: 'teachers',
    component: () => import('@views/Teachers/IndexView.vue'),
  },
  {
    path: '/teachers/create',
    name: 'addTeacher',
    component: () => import('@views/Teachers/IndexView.vue'),
  },
]

teacherRoutes = teacherRoutes.map(route =>{
  return {...route,meta: {requiresAuth: true}};
})


export default teacherRoutes;
