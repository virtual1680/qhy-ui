import { VuexModule, Module, Mutation, getModule, Action,MutationAction } from 'vuex-module-decorators';

import store from '@/store';

type User = { username: string; password: string; }
// dynamic: true: 动态创建动态模块,即new Vuex.Store({})里面不用注册的.空着就行,
// store,当前模块注册到store上.也可以写在getModule上,即getModule(PassengerStore,store)
// namespaced: true, name: 'passenger' 命名空间
@Module({ name: 'test', dynamic: true, namespaced: true, store, })
class Test extends VuexModule  {
    // state => 要public不然外面调用不到
    public loginInfo: User[] = [];

    // getter
    get userNumber(): number {
        return this.loginInfo.length;
    }

    @Mutation
    USER_INFO(user: User): void {
        console.log(user);
        this.loginInfo.push(user);
    }
    // commit的两种调用方式,第一种,Action后面的括号里面添加commit,然后return的结果就是USERINFO的参数
    @Action({ commit: 'USER_INFO' })
    getZhangsan(): User {
        return { username: '张三', password: 'zhangsan' };
    }
    // 第二种,直接this.USER_INFO调用;
    @Action
    getLisi(): void {
        const user = { username: '李四', password: 'lisi' };
        this.context.commit('USER_INFO', user); // commit调用
        // this.USER_INFO(user); // 直接调用
    }


    public username = '';
    public password = '';

    //'username'和'password'被返回的对象替换，
    //格式必须为`{username：...，password：...}`
    @MutationAction({ mutate: ['username', 'password'] })
    async setPassenger(name: string) {
        // const response: any = await request(name); // 接口返回 [{name:'张三',password:'123456'}]
        // 此处返回值必须和上面mutate后面的名称保持一致;
        return {
            username: "name",
            password: "password",
        };
    }

}

// 使用getModule: 对类型安全的访问
export const TestModule = getModule(Test);
