import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Tos from './views/Tos/Terms.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/terms',
      name: 'terms',
      component: Tos
    }
  ]
})
