import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1/Page1'
import Page2 from '@/components/page2/Page2'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'page1',
    component: Page1
  }, {
    path: '/page2',
    name: 'page2',
    component: Page2
  }]
})
