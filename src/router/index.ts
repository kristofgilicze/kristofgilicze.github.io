import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'hello' }
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import(/* webpackChunkName: "base" */ '../views/About.vue')
  },
  {
    path: '/open-source',
    name: 'open source',
    component: () => import(/* webpackChunkName: "base" */ '../views/OpenSource.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import(/* webpackChunkName: "base" */ '../views/Skills.vue')
  },
  {
    path: '/awards',
    name: 'awards',
    component: () => import(/* webpackChunkName: "base" */ '../views/Awards.vue')
  },
  {
    path: '/experince',
    name: 'experince',
    component: () => import(/* webpackChunkName: "base" */ '../views/Experince.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "base" */ '../views/Education.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
