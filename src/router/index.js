import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/TopPage'
import StatusPage from '@/components/StatusPage'
import WorkPage from '@/components/WorkPage'
import CreatePage from '@/components/CreatePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/status',
      name: 'StatusPage',
      component: StatusPage
    },
    {
      path: '/work',
      name: 'WorkPage',
      component: WorkPage
    },
    {
      path: '/create',
      name: 'CreatePage',
      component: CreatePage
    }
  ],
  mode: 'history'
})
