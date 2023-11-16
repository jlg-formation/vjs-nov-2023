import type { RouteRecordRaw } from 'vue-router'

export const stockRouter: RouteRecordRaw = {
  path: '/stock',
  name: 'stock',
  component: () => import('./views/StockView.vue')
}
