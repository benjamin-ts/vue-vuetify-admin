import Vue from 'vue'
// import VueRouter from 'vue-router'
import Layout from '@/layout'
import Router from 'vue-router'

Vue.use(Router)
// Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index'),
    hidden: true
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
  // {
  //   path: '/',
  //   icon: 'mdi-domain',
  //   component: Layout,
  //   // name: 'Home',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/Home/index'),
  //       // name: 'Home',
  //       meta: { title: 'Home', icon: 'mdi-domain', noCache: true }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
 export const asyncRoutes = [
  {
    path: '/',
    icon: 'mdi-domain',
    component: Layout,
    name: 'Home',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home/index'),
        // name: 'Home',
        meta: { title: 'Home', icon: 'mdi-domain', noCache: true }
      }
    ]
  },
  {
    path: '/Warehouse',
    icon: 'mdi-message-text',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Warehouse.vue')
    component: Layout,
    name: 'Warehouse',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Warehouse/index'),
        // name: 'Warehouse',
        meta: { title: 'Warehouse', icon: 'mdi-message-text', noCache: true }
      }
    ]
  },
  {
    path: '/ReservoirArea',
    icon: 'mdi-dialpad',
    component: Layout,
    name: 'ReservoirArea',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ReservoirArea/index'),
        // name: 'ReservoirArea',
        meta: { title: 'ReservoirArea', icon: 'mdi-dialpad', noCache: true }
      }
    ]
  },
  {
    path: '/StorageRack',
    icon: 'mdi-email',
    component: Layout,
    name: 'StorageRack',
    children: [
      {
        path: 'index',
        component: () => import('@/views/StorageRack/index'),
        // name: 'StorageRack',
        meta: { title: 'StorageRack', icon: 'mdi-email', noCache: true }
      }
    ]
  },
  {
    path: '/StockIn',
    icon: 'mdi-call-split',
    component: Layout,
    name: 'StockIn',
    children: [
      {
        path: 'index',
        component: () => import('@/views/StockIn/index'),
        // name: 'StockIn',
        meta: { title: 'StockIn', icon: 'mdi-call-split', noCache: true }
      }
    ]
  },
  {
    path: '/StockOut',
    component: Layout,
    icon:'mdi-arrow-up-bold-box-outline',
    name: 'StockOut',
    children: [
      {
        path: 'index',
        component: () => import('@/views/StockOut/index'),
        // name: 'StockOut',
        meta: { title: 'StockOut', icon: 'mdi-arrow-up-bold-box-outline', noCache: true }
      }
    ]
  },
  {
    path: '/Inventory',
    icon: 'mdi-checkbox-marked-circle',
    component: Layout,
    name: 'Inventory',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Inventory/index'),
        // name: 'Inventory',
        meta: { title: 'Inventory', icon: 'mdi-checkbox-marked-circle', noCache: true }
      }
    ]
  },
  {
    path: '/InventoryRecord',
    icon: 'mdi-minus-circle',
    component: Layout,
    name: 'InventoryRecord',
    children: [
    {
      path: 'index',
      component: () => import('@/views/InventoryRecord/index'),
      // name: 'InventoryRecord',
      meta: { title: 'InventoryRecord', icon: 'mdi-minus-circle', noCache: true }
    }
  ]
  },
  {
    path: '/example',
    component: Layout,
    name: 'Example',
    meta: {
      title: 'Example',
      icon:'mdi-minus-circle'
    },
    children: [
      {
        path: 'create',
        component: () => import("@/views/Example/Create"),
        name:'CreateArticle'
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/Example/Edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/Example/List'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
// const router = new VueRouter({
//   mode: 'history',
//   // base: process.env.BASE_URL,
//   scrollBehavior: () => ({ y: 0 }),
//   routes:constantRoutes
// })
const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
