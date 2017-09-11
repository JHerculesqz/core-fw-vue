import Vue from 'vue'
import Router from 'vue-router'
import ImportEx from '@/components/1.importex/ImportEx'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'ImportEx',
    component: ImportEx
  }]
})

