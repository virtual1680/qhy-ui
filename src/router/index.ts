import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Layout from '../views/Layout.vue'

// @ts-ignore
import TableKeyCode from '../views/TableKeyCode.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/table-key-code',
    name: 'TableKeyCode',
    component: TableKeyCode
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // @ts-ignore
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
