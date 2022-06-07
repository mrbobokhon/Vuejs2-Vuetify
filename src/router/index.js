import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cafe/:id',
    name: 'cafedetails',
    component: () => import(/* webpackChunkName: "cafedetail" */ '../views/CafeDetails.vue')
  },
  {
    path: '/form',
    name: 'cafeform',
    component: () => import(/* webpackChunkName: "cafeform" */ '../views/CafeForm.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
