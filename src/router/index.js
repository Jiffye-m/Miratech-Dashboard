import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },  {
    path: '/articles',
    name: 'articles',
    component: function () {
      return import(/* webpackChunkName: "articles" */ '../views/Articles.vue')
    }
  },  {
    path: '/orders',
    name: 'orders',
    component: function () {
      return import(/* webpackChunkName: "orders" */ '../views/Orders.vue')
    }
  },  {
    path: '/customers',
    name: 'customers',
    component: function () {
      return import(/* webpackChunkName: "customers" */ '../views/Customers.vue')
    }
  },  {
    path: '/products',
    name: 'products',
    component: function () {
      return import(/* webpackChunkName: "products" */ '../views/Products.vue')
    }
  },
    {
      path: '/settings',
      name: 'settings',
      component: function () {
        return import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
      }
  },
  {
    path:'/article/:title',
    name:'article.show',
    component: () => import(/* webpackChunkName: "articleshow" */ '../views/ArticleShow.vue'),
    props: route=>({...route.params, title:route.params.title})
  },
  {
    path:'/products/:id',
    name:'product.show',
    component: () => import(/* webpackChunkName: "productshow" */ '../views/ProductShow.vue'),
    props: route=>({...route.params, id:parseInt(route.params.id)})
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
