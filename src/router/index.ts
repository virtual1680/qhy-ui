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
// @ts-ignore
import Mine from '../views/test/index'
// @ts-ignore
import Transform from '../views/test/subpages/transform'


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {path: '/', name:'home1', meta:{title:'首页'}, component: Home,},
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
      {path: '/', name:'three1', meta:{title:'ThreeJs'}, component: ThreeJs,},
    ]
  },
  {
    path: '/mine',
    name: 'mine',
    component: Layout,
    children:[
      {path: '/', name:'mine1', meta:{title:'小玩意'}, component: Mine,},
      {path: '/mine/transform', name:'transform', meta:{title:'transform'}, component: Transform,},
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
