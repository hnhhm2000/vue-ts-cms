import { createRouter, createWebHistory } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const router = createRouter({
  history: createWebHistory(),
  // 路由最重要的映射关系 path => component
  routes: [
    {
      path: '/',
      redirect: 'main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/main.vue')
      // children: [
      //   {
      //     path: '/main/analysis/overview',
      //     component: () =>
      //       import('../views/main/analysis/overview/overview.vue')
      //   },
      //   {
      //     path: '/main/analysis/dashboard',
      //     component: () =>
      //       import('../views/main/analysis/dashboard/dashboard.vue')
      //   },
      //   {
      //     path: '/main/system/user',
      //     component: () => import('../views/main/system/user/user.vue')
      //   },
      //   {
      //     path: '/main/system/role',
      //     component: () => import('../views/main/system/role/role.vue')
      //   }
      // ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  // 第一个页面的匹配显示
  if (to.path === '/main') {
    return firstMenu?.url
  }
})

export default router
