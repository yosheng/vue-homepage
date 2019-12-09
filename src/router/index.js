import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Achievement from '@/components/Achievement'
import Experience from '@/components/Experience'
import Interest from '@/components/Interest'
import Future from '@/components/Future'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Achievement
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/interest',
      name: 'Interest',
      component: Interest
    },
    {
      path: '/future',
      name: 'Future',
      component: Future
    }
  ]
})
