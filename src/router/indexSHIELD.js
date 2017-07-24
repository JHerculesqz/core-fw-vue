import Vue from 'vue'
import Router from 'vue-router'
import Page41 from '@/components/page4/Page41'
import Page42 from '@/components/page4/Page42'
import Page43 from '@/components/page4/Page43'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'page41',
    component: Page41
  }, {
    path: '/page4/page42',
    name: 'page42',
    component: Page42
  }, {
    path: '/page4/page43',
    name: 'page43',
    component: Page43
  }]
})

