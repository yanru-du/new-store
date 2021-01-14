import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "views/tab/Home"
const routes = [
  {
    path:'',
    redirect:'/home',
  },{
    path:'/home',
    component:Home
  },{
    path:'/about',
    component:import('views/tab/About')
  },{
    path:"/car",
    component: () => import('views/tab/Car')
  },{
    path:"/profile",
    component: () => import('views/tab/Profile')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
