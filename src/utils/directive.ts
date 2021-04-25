import { UserModule } from '@/store/modules/user';
export default {
    install(Vue:any) {
        Vue.directive('has', {
            inserted: (el:any, binding:any, vnode:any)=>{
                console.log("内容权限控制----");
                const permissions = UserModule.getPermissions;
                if (!permissions.includes(binding.value)){
                    el.remove();
                }
                el.style.backgroundColor = "red";
            }
        });
    }
};
