import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/ListView.vue'

const routes = [
  {
    path: '/listview',
    name: 'ListView',
    component: Home
  },
  {
    path: '/checkoutview',
    name: 'CheckoutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckoutView.vue')
  },
  {
    path: '/detailsview',
    name: 'DetailsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue')
  },
  {
    path: '/item/:id',
    name: 'ItemDetails',
    component: () => import(/* webpackChunkName: "about" */ '../components/ItemDetails.vue')
  }
  // {
  //   path: '/tradfrialampor',
  //   name: 'TradfriaLampor',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/TradfriaLampor.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
