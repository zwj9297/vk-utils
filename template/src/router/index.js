import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => import(/*webpackChunkName: "home"*/ '@/layouts/Home')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {},
      children: [
        {
          path: '/',
          component: () => import(/*webpackChunkName: "pageA"*/ 'views/PageA')
        },
        {
          path: '/a',
          component: () => import(/*webpackChunkName: "pageA"*/ 'views/PageA')
        },
        {
          path: '/b',
          component: () => import(/*webpackChunkName: "pageB"*/ 'views/PageB')
        },
        {
          path: '/c',
          component: () => import(/*webpackChunkName: "pageC"*/ 'views/PageC'),
          children: [
            {
              path: ':id',
              component: () => import(/*webpackChunkName: "pageC_id"*/ 'views/PageC/_id')
            }
          ]
        }
      ]
    },
    {
      path: '*',
      component: () => import(/*webpackChunkName: "pageB"*/ 'views/404')
    }
  ]
})

export default router

