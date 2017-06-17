import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1/Page1'
import Page2 from '@/components/page2/Page2'
import Page3 from '@/components/page3/Page3'
import Page4Frame from '@/components/page3/Page4Frame'
import Page4Layout1 from '@/components/page3/Page4Layout1'
import Page4Layout2 from '@/components/page3/Page4Layout2'
import Page4Loading from '@/components/page3/Page4Loading'
import Page4Menu from '@/components/page3/Page4Menu'

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
  }, {
    path: '/page3',
    name: 'page3',
    component: Page3
  }, {
    path: '/page3/page4Frame',
    name: 'page4Frame',
    component: Page4Frame
  }, {
    path: '/page3/page4Layout1',
    name: 'page4Layout1',
    component: Page4Layout1
  }, {
    path: '/page3/page4Layout2',
    name: 'page4Layout2',
    component: Page4Layout2
  }, {
    path: '/page3/page4Loading',
    name: 'page4Loading',
    component: Page4Loading
  }, {
    path: '/page3/page4Menu',
    name: 'page4Menu',
    component: Page4Menu
  }]
})
