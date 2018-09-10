import Vue from 'vue'
import Router from 'vue-router'
import bookshelf from '@/pages/bookshelf/bookshelf'
import bookCity from '@/pages/bookCity/bookCity'
import rankings from '@/pages/rankings/rankings'
import classification from '@/pages/classification/classification'
import my from '@/pages/my/my'

Vue.use(Router)

let router = new Router({
  routes: [
    // 书架
    {
      path: '/bookshelf',
      name: 'bookshelf',
      // 页面懒加载写法一
      component: () => import('@/pages/bookshelf/bookshelf')
      // 页面懒加载写法二
      // component: (resolve) => require(['@/pages/bookshelf/bookshelf'], resolve)
    },
    // 书城
    {
      path: '/bookCity',
      name: 'bookCity',
      component: bookCity
    },
    // 排行
    {
      path: '/rankings',
      name: 'rankings',
      component: rankings
    },
    // 分类
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    // 我的
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})

// 全局路由拦截-进入页面前执行
// router.beforeEach((to, from, next) => {
//   // 这里可以加入全局登陆判断
//   // 继续执行
//   next();
// });

// 全局后置钩子-常用于结束动画等
// router.afterEach(() => {
//   // 不接受next
// });

export default router
