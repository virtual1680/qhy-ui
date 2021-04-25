import '@/components/ui/example/scss/main.scss'
import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
/** 路由 */
import router from './router';
/** 状态管理 */
import store from './store';
/** 数据存储 */
import Storage from 'vue-ls';
/** 基础配置 */
import config from '@/defaultSettings';
/** UI组件 */
import AntDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
/** 自定义指令 */
import Directive from '@/utils/directive';

import * as Action from '@/api/action';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// @ts-ignore
import QUI from 'qhy-ui'

Vue.config.productionTip = false;
Vue.use(Storage, config.storageOptions);
Vue.use(AntDesign);
Vue.use(Directive);
Vue.use(QUI);

Vue.prototype.$http = Action;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
