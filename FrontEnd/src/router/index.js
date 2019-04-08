import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
