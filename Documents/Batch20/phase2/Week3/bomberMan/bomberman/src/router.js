import Vue from 'vue'
import Router from 'vue-router'
import Pending from './views/Pending.vue'
import Homepage from './views/Homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/pending',
      name: 'pending',
      component: Pending
    }
  ]
})
