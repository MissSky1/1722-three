import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Tour from '@/pages/tour'
import Detail from '@/pages/detail'
import Order from '@/pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/tour',
      name: 'tour',
      component: Tour
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
