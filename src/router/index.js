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
    path: '/leGite',
    name: 'leGite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/leGite.vue')
  },
  {
    path: '/activites',
    name: 'activites',
    component: () => import('../views/activites.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    component: () => import('../views/photos.vue')
  },
  {
    path: '/tarifs',
    name: 'tarifs',
    component: () => import('../views/tarifs.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
