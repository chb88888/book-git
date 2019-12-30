import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue'),
    children: [
      {
        path: 'page',
        name: 'page',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/homePage/Page.vue')
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/homePage/Classify.vue')
      },
      {
        path: 'among',
        name: 'among',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/homePage/Among.vue')
      },
      {
        path: 'bookrack',
        name: 'bookrack',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/homePage/BookRack.vue')
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/Detail.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
