import Vue from 'vue'
import Router from 'vue-router'
import FoodDetails from '@/components/FoodDetails'
import Home from '@/components/Home'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/foodDetails/:id',
      name: 'foodDetails',
      component: FoodDetails
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
