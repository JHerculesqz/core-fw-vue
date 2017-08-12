import Vue from 'vue'
import Router from 'vue-router'
import Page40 from '@/components/page4/Page40'
import Page41 from '@/components/page4/Page41'
import Page42 from '@/components/page4/Page42'
import Page43 from '@/components/page4/Page43'
import Page44 from '@/components/page4/Page44'
import Page45 from '@/components/page4/Page45'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/login',
    name: 'page40',
    component: Page40
  },{
    path: '/',
    name: 'page41',
    component: Page41,
    meta: { requireAuth: true}
  }, {
    path: '/dev',
    name: 'page42',
    component: Page42,
    meta: { requireAuth: true}
  }, {
    path: '/dashboard',
    name: 'page43',
    component: Page43,
    meta: { requireAuth: true}
  }, {
    path: '/init',
    name: 'page44',
    component: Page44,
    meta: { requireAuth: true}
  }, {
    path: '/mgr',
    name: 'page45',
    component: Page45,
    meta: { requireAuth: true}
  }]
})

