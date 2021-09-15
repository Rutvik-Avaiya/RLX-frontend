import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'

// import store from '@store'
// import auth from '../middleware/auth.js'
// import navbar from '../components/navbar.vue'
// import register from '../components/forms/register.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/forms/register.vue'),
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../components/forms/welcome.vue'),
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
  ]
})



export default router
