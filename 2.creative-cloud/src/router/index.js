import Vue from 'vue'
import Router from 'vue-router'
import Page40 from '@/components/page4/Page40'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'page40',
    component: Page40
  }]
})

