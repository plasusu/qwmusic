import Vue from 'vue'
import Router from 'vue-router'
import home from 'pages/home'
import rank from 'pages/rank'
import search from 'pages/search'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
