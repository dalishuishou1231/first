import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Men from './views/Men.vue'
import Women from './views/Women.vue'
import Finish from './views/Finish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/men',
      name: 'men',
      component: Men
    },
    {
      path: '/women',
      name: 'women',
      component: Women
    },
    {
      path: '/finish',
      name: 'finish',
      component: Finish
    },
  ]
})
