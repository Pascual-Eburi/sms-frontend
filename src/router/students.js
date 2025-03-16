let studentRoutes = [
  {
    path: '/students',
    name: 'students',
    component: () => import('@views/Students/IndexView.vue'),
  },
  {
    path: '/students/new',
    name: 'addStudent',
    component: () => import('@views/Students/IndexView.vue'),
  },
]

studentRoutes = studentRoutes.map(route =>{
  return {...route,meta: {requiresAuth: true}};
})


export default studentRoutes;
