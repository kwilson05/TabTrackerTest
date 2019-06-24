import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'root',
  component: Home
},
{
  path: '/register',
  name: 'register',
  component: Register
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/songs/create',
  name: 'songs-create',
  component: CreateSong
},
{
  path: '/songs/:songId',
  name: 'song',
  component: ViewSong
},

{
  path: '/songs',
  name: 'songs',
  component: Songs
}]

export default new Router({
  routes
})
