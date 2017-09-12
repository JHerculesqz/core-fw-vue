import Vue from 'vue'
import Router from 'vue-router'
import ImportEx from '@/components/1.importex/ImportEx'
import Topo from '@/components/2.topo/Topo'
import Plan from '@/components/3.buPlan/Plan'
import Design from '@/components/4.buDesign/Design'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'ImportEx',
    component: ImportEx
  }, {
    path: '/Topo',
    name: 'Topo',
    component: Topo
  }, {
    path: '/Plan',
    name: 'Plan',
    component: Plan
  }, {
    path: '/Design',
    name: 'Design',
    component: Design
  }]
})

