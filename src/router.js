import Vue from 'vue'
import VueRouter from 'vue-router'

import Game from '@/components/Game'
import Intro from '@/components/Intro'
import Lost from '@/components/Lost'
import Won from '@/components/Won'
// @ --> to src

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Intro
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/lost',
    component:Lost
  },
  {
    path: '/won',
    component: Won
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
