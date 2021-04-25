import {Mutation, getModule, Action, VuexModule, Module, MutationAction} from 'vuex-module-decorators';
import store from '@/store';
import Vue from 'vue';
import {ACCESS_TOKEN,USER_INFO,USER_PERMISSIONS} from '@/store/mutation-types';
import {postAction} from "@/api/action";

type UserEntity  = {
    avatar: string
    birthday: string
    email: string
    phone: string
    post: string
    realname: string
    sex: number
    status: number
    username: string
    workNo: string
}

@Module({name:'user',dynamic:true,namespaced:true,store})
class User extends VuexModule {
    // @ts-ignore
    public user_info:UserEntity = {};
    public token:string = '';
    public permissionList:Array<string> = ['admin_user_add_btn'];

    get getUserInfo():any {
        return this.user_info || Vue.ls.get(USER_INFO);
    }
    get getToken():string {
        return this.token || Vue.ls.get(ACCESS_TOKEN);
    }
    get getPermissions():Array<string> {
        return this.permissionList || Vue.ls.get(USER_PERMISSIONS);
    }

    @Mutation
    USER_INFO(userInfo:UserEntity):void{
        Vue.ls.set(USER_INFO,userInfo);
        this.user_info = userInfo
    }
    @Mutation
    ACCESS_TOKEN(token:string):void{
        Vue.ls.set(ACCESS_TOKEN,token);
        this.token = token;
    }
    @Mutation
    USER_PERMISSIONS(permissionList:Array<string>):void{
        Vue.ls.set(USER_PERMISSIONS,permissionList);
        this.permissionList = permissionList;
    }

    @Action({commit:USER_INFO})
    userInfoAction(data:any):any{
        console.log(data,"我要登录了");
        return postAction('/sys/login',data).then((result:any) =>{
            console.log(result);
            this.context.commit(USER_INFO,result['userInfo']);
            this.context.commit(ACCESS_TOKEN,result?.token);
            return true
        }).catch((error:any) =>{
            console.log("错了",error);
            return false
        })
    }

    @MutationAction({ mutate: ['user_info', 'token'] })
    async setPassenger(name: string) {
        // const response: any = await request(name); // 接口返回 [{name:'张三',password:'123456'}]
        return {
            user_info: "user_info",
            token: "token",
        };
    }



}

export const UserModule = getModule(User);
