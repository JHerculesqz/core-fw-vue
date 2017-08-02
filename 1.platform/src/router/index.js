import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1/Page1'
import Page2 from '@/components/page2/Page2'
import Page3 from '@/components/page3/Page3'
import Page4Frame from '@/components/page3/Page4Frame'
import Page4Layout1 from '@/components/page3/Page4Layout1'
import Page4Layout2 from '@/components/page3/Page4Layout2'
import Page4Loading1 from '@/components/page3/Page4Loading1'
import Page4Loading2 from '@/components/page3/Page4Loading2'
import Page4Menu from '@/components/page3/Page4Menu'
import Page4Accordion from '@/components/page3/Page4Accordion'
import Page4Wizard from '@/components/page3/Page4Wizard'
import Page4Crumb from '@/components/page3/Page4Crumb'
import Page4Button from '@/components/page3/Page4Button'
import Page4Link from '@/components/page3/Page4Link'
import Page4Select from '@/components/page3/Page4Select'
import Page4Warning from '@/components/page3/Page4Warning'
import Page4Input from '@/components/page3/Page4Input'
import Page4DashBoard from '@/components/page3/Page4DashBoard'
import Page4Tab from '@/components/page3/Page4Tab'
import Page4Date from '@/components/page3/Page4Date'
import Page4Leaflet from '@/components/page3/Page4Leaflet'
import Page4Chart from '@/components/page3/Page4Chart'
import Page4Grid from '@/components/page3/Page4Grid'
import Page4Location from '@/components/page3/Page4Location'

Vue.use(Router);

export default new Router({
  mode: 'hash',
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
    path: '/page3/page4Loading1',
    name: 'page4Loading1',
    component: Page4Loading1
  }, {
    path: '/page3/page4Loading2',
    name: 'page4Loading2',
    component: Page4Loading2
  }, {
    path: '/page3/page4Menu',
    name: 'page4Menu',
    component: Page4Menu
  }, {
    path: '/page3/page4Accordion',
    name: 'page4Accordion',
    component: Page4Accordion
  }, {
    path: '/page3/page4Wizard',
    name: 'page4Wizard',
    component: Page4Wizard
  }, {
    path: '/page3/page4Crumb',
    name: 'page4Crumb',
    component: Page4Crumb
  }, {
    path: '/page3/page4Button',
    name: 'page4Button',
    component: Page4Button
  }, {
    path: '/page3/page4Link',
    name: 'page4Link',
    component: Page4Link
  }, {
    path: '/page3/page4Select',
    name: 'page4Select',
    component: Page4Select
  }, {
    path: '/page3/page4Warning',
    name: 'page4Warning',
    component: Page4Warning
  }, {
    path: '/page3/page4Input',
    name: 'page4Input',
    component: Page4Input
  }, {
    path: '/page3/page4DashBoard',
    name: 'page4DashBoard',
    component: Page4DashBoard
  }, {
    path: '/page3/page4Leaflet',
    name: 'page4Leaflet',
    component: Page4Leaflet
  }, {
    path: '/page3/page4Chart',
    name: 'page4Chart',
    component: Page4Chart
  }, {
    path: '/page3/page4Grid',
    name: 'page4Grid',
    component: Page4Grid
  }, {
    path: '/page3/page4Tab',
    name: 'page4Tab',
    component: Page4Tab
  }, {
    path: '/page3/page4Date',
    name: 'page4Date',
    component: Page4Date
  }, {
    path: '/page3/page4Location',
    name: 'page4Location',
    component: Page4Location
  }]
})

