import Vue from 'vue'
import VueRouter from 'vue-router'
import Episodes from '../views/Episodes.vue'
import Characters from '../views/Characters.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Episodes
  },
  {
    path: '/characters',
    name: 'Characters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
