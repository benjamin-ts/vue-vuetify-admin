// Just a mock data

const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/Login/index'),
        hidden: true
      },
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

const asyncRoutes = [
    {
        path: '/',
        icon: 'mdi-domain',
        component: Layout,
        // name: 'Home',
        // children: [
        //   {
        //     path: 'index',
        //     component: () => import('@/views/Home/index'),
        //     // name: 'Home',
        //     meta: { title: 'Home', icon: 'mdi-domain', noCache: true }
        //   }
        // ]
      },
      {
        path: '/Warehouse',
        icon: '',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/Warehouse.vue')
        component: Layout,
        // name: 'Warehouse',
        // children: [
        //   {
        //     path: '/Warehouse',
        //     component: () => import('@/views/Warehouse/index'),
        //     // name: 'Warehouse',
        //     meta: { title: 'Warehouse', icon: 'mdi-message-text', noCache: true }
        //   }
        // ]
      },
      {
        path: '/ReservoirArea',
        icon: '',
        component: Layout,
        // name: 'ReservoirArea',
        // children: [
        //   {
        //     path: '/ReservoirArea',
        //     component: () => import('@/views/ReservoirArea/index'),
        //     // name: 'ReservoirArea',
        //     meta: { title: 'ReservoirArea', icon: 'mdi-dialpad', noCache: true }
        //   }
        // ]
      },
      {
        path: '/StorageRack',
        icon: '',
        component: Layout,
        // name: 'StorageRack',
        // children: [
        //   {
        //     path: '/StorageRack',
        //     component: () => import('@/views/StorageRack/index'),
        //     // name: 'StorageRack',
        //     meta: { title: 'StorageRack', icon: 'mdi-email', noCache: true }
        //   }
        // ]
      },
      {
        path: '/StockIn',
        icon: '',
        component: Layout,
        // name: 'StockIn',
        // children: [
        //   {
        //     path: '/StockIn',
        //     component: () => import('@/views/StockIn/index'),
        //     // name: 'StockIn',
        //     meta: { title: 'StockIn', icon: 'mdi-call-split', noCache: true }
        //   }
        // ]
      },
      {
        path: '/StockOut',
        component: Layout,
        // name: 'StockOut',
        // children: [
        //   {
        //     path: '/StockOut',
        //     component: () => import('@/views/StockOut/index'),
        //     // name: 'StockOut',
        //     meta: { title: 'StockOut', icon: 'mdi-arrow-up-bold-box-outline', noCache: true }
        //   }
        // ]
      },
      {
        path: '/Inventory',
        icon: '',
        component: Layout,
        // name: 'Inventory',
        // children: [
        //   {
        //     path: '/Inventory',
        //     component: () => import('@/views/Inventory/index'),
        //     // name: 'Inventory',
        //     meta: { title: 'Inventory', icon: 'mdi-checkbox-marked-circle', noCache: true }
        //   }
        // ]
      },
      {
        path: '/InventoryRecord',
        icon: '',
        component: Layout,
        // name: 'InventoryRecord',
      //   children: [
      //   {
      //     path: '/InventoryRecord',
      //     component: () => import('@/views/InventoryRecord/index'),
      //     // name: 'InventoryRecord',
      //     meta: { title: 'InventoryRecord', icon: 'mdi-minus-circle', noCache: true }
      //   }
      // ]
      },
      // 404 page must be placed at the end !!!
      { path: '*', redirect: '/404', hidden: true }
]

module.exports = {
  constantRoutes,
  asyncRoutes
}
