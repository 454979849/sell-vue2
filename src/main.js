import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Goods from './components/goods/goods'
import  Ratings from './components/ratings/ratings'
import  Seller from './components/seller/seller'
import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    }
  ],
  linkActiveClass:'active'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
