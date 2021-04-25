/**
 *
 *mac
 *2021/4/8
 *495301515@qq.com
 */

import Vue from 'vue';
import DialogComponent from "./index.vue";
const DialogClass = Vue.extend(DialogComponent);

class QDialog extends DialogClass{
  constructor(){
    super();
    this.$mount(document.createElement('div'));
    document.body.appendChild(this.$el);
  }
  open({title,message,onConfirm,onClose}){
    this.izShow = true;
    if (title) {
      this.title = title
    }
    if (message) {
      this.message = message
    }
    this.onConfirm = () => {
      clear();
      onConfirm && onConfirm(this.izShow)
    };
    this.onClose = ()=> {
      clear();
      onClose && onClose(this.izShow)
    };
    let clear=()=>{
      this.izShow = false;
      this.hideClose = false;
      this.confirmTx = '确认';
      this.closeTx = '取消';
      this.titleImg = '';
    };
    return this;
  }
  setConfirmTx(text) {
    if (text) {
      this.confirmTx = text;
    }
    return this;
  }
  setCloseTx(text) {
    if (text) {
      this.closeTx = text;
    }
    return this;
  }
  setTitleImg(url){
    if (url) {
      this.titleImg = url;
    }
    return this;
  }
}
QDialog.install = function () {
  Vue.use(QDialog);
};

Vue.prototype.$QDialog = new QDialog();

export default new QDialog();
