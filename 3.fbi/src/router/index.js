import Vue from 'vue'
import Router from 'vue-router'
import ImportEx from '@/components/1.importex/ImportEx'
import Topo from '@/components/2.topo/2.1.main/Topo'
import Plan from '@/components/3.buPlan/Plan'
import SolutionMgr from '@/components/4.buDesign/4.1.solutionMgr/SolutionMgr'
import SolutionDetails from '@/components/4.buDesign/4.2.solutionDetails/SolutionDetails'

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
    path: '/SolutionMgr',
    name: 'SolutionMgr',
    component: SolutionMgr
  }, {
    path: '/SolutionDetails',
    name: 'SolutionDetails',
    component: SolutionDetails
  }]
})

