import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'

Vue.use(Router)

const routes = [{
  path: '/register',
  name: 'register',
  component: Register
}]

export default new Router({
  routes
})
