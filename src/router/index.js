import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import ArchivePage from '@/views/ArchivePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/archive',
      name: 'ArchivePage',
      component: ArchivePage
    }
  ]
})
