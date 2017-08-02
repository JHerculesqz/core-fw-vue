import Vue from 'vue'
import Router from 'vue-router'
import Page41 from '@/components/page4/Page41'
import Page42 from '@/components/page4/Page42'
import Page43 from '@/components/page4/Page43'
import Page44 from '@/components/page4/Page44'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'page41',
    component: Page41
  }, {
    path: '/dev',
    name: 'page42',
    component: Page42
  }, {
    path: '/dashboard',
    name: 'page43',
    component: Page43
  }, {
    path: '/init',
    name: 'page44',
    component: Page44
  }]
})

