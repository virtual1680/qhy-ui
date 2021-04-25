/**
 *
 *mac
 *2021/4/8
 *495301515@qq.com
 */

import Vue from 'vue';
import ToastComponent from "./index.vue";
const ToastClass = Vue.extend(ToastComponent);

class Toast extends ToastClass{
  constructor(){
    super();
    this.$mount(document.createElement('div'));
    document.body.appendChild(this.$el);
  }

  success(message){
    this.iconType = 'success';
    this.izShow = true;
    if (message) {
      this.message = message
    }
    this.close()
  }
  error(message){
    this.iconType = 'error';
    this.izShow = true;
    if (message) {
      this.message = message
    }
    this.close()
  }
  warning(message){
    this.iconType = 'warning';
    this.izShow = true;
    if (typeof message === 'string') {
      this.message = message
    } else if(message.hasOwnProperty('message')){
      this.message = message.message
    }
    if (message.hasOwnProperty('callback') && typeof message.callback === 'function') {
      this.close(message.callback)
    }else{
      this.close()
    }
  }
  close(callback){
    let timer = setTimeout(()=>{
      if (this.show) {
        this.show = false;
        callback && callback()
      }
      clearTimeout(timer);
    },2500)
  }
}
Toast.install = function () {
  Vue.use(Toast);
};

Vue.prototype.$QToast = new Toast();

export default new Toast();
