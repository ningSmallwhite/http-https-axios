import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import(/* webpackChunkName: "about" */ '../views/AxiosView.vue')
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: () => import(/* webpackChunkName: "about" */ '../views/FetchView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
