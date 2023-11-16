import type { RouteRecordRaw } from 'vue-router'

export const stockRouter: RouteRecordRaw[] = [
  {
    path: '/stock',
    name: 'stock',
    component: () => import('./views/StockView.vue')
  },
  {
    path: '/stock/add',
    name: 'add',
    component: () => import('./views/AddView.vue')
  }
]
