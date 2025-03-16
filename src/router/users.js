let userRoutes = [
  {
    path: '/users',
    name: 'users',
    component: () => import('@views/Students/IndexView.vue'),
  },
  {
    path: '/users/new',
    name: 'addUser',
    component: () => import('@views/Students/IndexView.vue'),
  },
]

userRoutes = userRoutes.map(route =>{
  return {...route,meta: {requiresAuth: true}};
})


export default userRoutes;
