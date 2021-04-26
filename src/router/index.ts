import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// @ts-ignore
import Layout from '../views/index'

// @ts-ignore
import Home from '../views/home/index'
// @ts-ignore
import Dialog from '../views/home/subpages/dialog'
// @ts-ignore
import Input from '../views/home/subpages/input'
// @ts-ignore
import Form from '../views/home/subpages/form'

// @ts-ignore
import ThreeJs from '../views/threejs/index'


// @ts-ignore
import TableKeyCode from '../views/test/TableKeyCode.vue'



Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: Layout,
    children: [
      {path: '/', name:'dialog', meta:{title:'首页'}, component: Home,},
      {path: '/home/dialog', name:'dialog', meta:{title:'dialog提示框'}, component: Dialog,},
      {path: '/home/input', name:'input', meta:{title:'输入框'}, component: Input,},
      {path: '/home/form', name:'form', meta:{title:'form表单'},component:Form}
    ]
  },
  {
    path: '/three',
    name: 'three',
    component: Layout,
    children:[
      {path: '/', name:'three', meta:{title:'ThreeJs'}, component: ThreeJs,},
    ]
  },
  {
    path: '/table-key-code',
    name: 'TableKeyCode',
    component: TableKeyCode
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
