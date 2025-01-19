import { createRouter, createWebHistory } from 'vue-router'
//自动读取刚才配置的目录（views）下的页面，不需要自己再写routes
import generatedRoutes from 'virtual:generated-pages'
// 自动读取 layouts文件夹下的文件
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes), //更改原来的generatedRoutes
})

export default router
