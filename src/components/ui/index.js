/**
 *
 *mac
 *2021/4/8
 *495301515@qq.com
 */
import QDialog from './example/dialog/index';
import QLoading from './example/loading/index';
import QToast from './example/toast/index';
export {
  QDialog,
  QLoading,
  QToast
}

const resource = require.context('./example',true,/\.(vue|js)$/);

const components = (r => {
  return r.keys().map(key => r(key))
})(resource);

const mapComponents = (Vue)=>{
  components.map(item =>{
    let component = item.default;
    console.log(component,component.name,component.install);
    if (component.name) {
      if (component.name.slice(0, 2) !=='q-'){
        component.name = 'q-'+component.name;
      }
      Vue.component(component.name,component)
    }else{
      Vue.use(component)
    }
  })
};

export const version = '1.0.0';

function install(Vue) {
  mapComponents(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

let _default = {
  install: install,
  version: version
};
export default _default;




