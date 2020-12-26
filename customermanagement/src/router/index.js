import Vue from 'vue'
import VueRouter from 'vue-router'
import Customer from '../components/Customer'
import Employee from '../components/Employee'
import Ticets from '../components/Ticets'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  }, {
    path: '/ticets',
    name: 'Ticets',
    component: Ticets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
