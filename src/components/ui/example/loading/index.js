/**
 *
 *mac
 *2021/4/8
 *495301515@qq.com
 */

import Vue from 'vue';
import LoadingComponent from "./index.vue";
const LoadingClass = Vue.extend(LoadingComponent);

class Loading extends LoadingClass{
  constructor(){
    super();
    this.$mount(document.createElement('div'));
    document.body.appendChild(this.$el);
  }
  open(message){
    this.izShow = true;
    if (message) {
      this.message = message
    }
  }
  close(){
    this.izShow = false;
  }

}
Loading.install = function () {
  Vue.use(Loading);
};

Vue.prototype.$QLoading = new Loading();

export default new Loading();
