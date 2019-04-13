import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/pages/Entry'
import Home from '@/pages/Home'
import Activity from '@/pages/Activity'
import Notice from '@/pages/Notice'
import Recruit from '@/pages/Recruit'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Entry',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/',
      name: '',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/Recruit',
      name: 'Recruit',
      component: Recruit,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta: {
        requireAuth: true
      }
    }
  ]
})
