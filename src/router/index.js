import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/recherche",
    name: "Recherche",
    component: () => import("../views/Recherche.vue"),
  },
  {
    path: "/visibleStars",
    name: "VisibleStars",
    component: () => import("../views/VisibleStars.vue"),
  },
  {
    path: "/starOfTheDay",
    name: "StarOfTheDay",
    component: () => import("../views/starOfTheDay.vue"),
  },
  {
    path: "/planetes",
    name: "Planetes",
    component: () => import("../views/Planet.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
