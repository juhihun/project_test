import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdListView from '@/views/ProdListView.vue'
import ProdInfoView from '@/views/ProdInfoView.vue'
import NoticeListView from '@/views/NoticeListView.vue'
import NoticeInfoView from  '@/views/NoticeInfoView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board',
    name: 'board',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardView.vue')
  },
  {
    path: '/boardInsert',
    name: 'boardInsert',
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardInsertView.vue')

  },
  {
    path: '/boardInfo/:no',
    name: 'boardInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardInfoView.vue')

  },
  {
    path: '/shop',
    name: 'shop',
    component: ProdListView
  },
  {
    path: '/shopinfo',
    name: 'shopinfo',
    component: ProdInfoView
  },
  {
    path: '/notice',
    name: 'notice',
    component: NoticeListView
  },
  {
    path: '/noticeinfo',
    name: 'noticeinfo',
    component: NoticeInfoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
