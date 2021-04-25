<template>
  <div class="home">
    <!--<img @click="sayHi('qinhongyang')" v-has="'admin_user_add_btn'" alt="Vue logo" :src="randCodeImage">-->
    <!--<a-input v-model="captcha"></a-input>-->
    <!--<div ref="captcha">{{count}}/2={{getCounter}}</div>-->
    <!--<HelloWorld @add-to-count="addToCount"/>-->
    <q-star></q-star>
    <div style="display:flex;flex: 1;flex-direction:row">
      <Three1></Three1>
      <Three2></Three2>
      <Three3></Three3>
    </div>

    <q-dialog message="海景房了解到" :izShow="true" @close="handleCancel">
      <template #content="data">
        <input type="text" :value="data.message"></input>
      </template>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Emit, Vue, Ref} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Three1 from '@/components/ThreeOne.vue'; // @ is an alias to
import Three2 from '@/components/ThreeTow.vue'; // @ is an alias to
import Three3 from '@/components/ThreeThree.vue'; // @ is an alias to
import { TestModule } from '@/store/modules/Test';
import {UserModule} from "../store/modules/user";
import {Action, State} from 'vuex-class'
// @ts-ignore
import {QLoading} from '@/components/ui'

@Component({
  components: {
    HelloWorld,Three1,Three2,Three3
  }
})
export default class Home extends Vue {
    @Prop(String) propA?: string;
    @Prop([String, Number]) propB?: string | number;
    @Prop({ type: Object, default: ()=>{} }) propDD?: any;

    @State('user') stateLoginInfo:any;
    @Action('user') actionLoginInfo:any;

    /** -----------------data--------------------- */
    private captcha:string = '';
    private randCodeImage:string = '';
    private requestCodeSuccess:boolean = false;
    private currentTime:number = 0;
    token = "";
    private count:number = 0;

    @Ref("captcha") readonly divRefs!: any;


    /** -----------------lifecycle--------------------- */
    created(){
        // this.$QLoading.open();
      // this.$QDialog.open({message:'kk'})

        // QLoading.open();
      // QLoading
        console.log(TestModule.loginInfo); // state
        console.log(TestModule.userNumber); // getter
        TestModule.getZhangsan(); // actions
        TestModule.getLisi(); // actions
        /** 加载验证码 */
        // this.randCode();
        console.log("00",this.stateLoginInfo,this.actionLoginInfo);
        this.token = UserModule.getToken

    }

    /** -----------------methods--------------------- */

    randCode(){

        this.currentTime = new Date().getTime();
        this.$http.getAction(`/sys/randomImage/${this.currentTime}`).then(result=>{
            this.randCodeImage = result;
            this.requestCodeSuccess=true;
        }).catch(()=>{
            this.requestCodeSuccess=false
        })
    }
    // TS写法，入参需添加参数类型，方法名后面添加方法返回值。
    sayHi(name: string): void {
        console.log("-=-=-=-=-",this.divRefs);
        console.log(`Hi~! I am ${name}`);
        this.$store.dispatch("user/userInfoAction",{username:"admin",password:'123456',captcha:this.captcha,checkKey:this.currentTime}).then(res =>{
            let token = UserModule.getToken;
            if (res && token) {
                this.$message.success("登录成功！");
                console.log("登录成功",res,token)
            }
        })
    }
    handleCancel(){
      // this.$QToast.success('提交成功');
      // this.$QToast.error('提交失败');
      this.$QToast.warning({message:'警告',callback:()=>{console.log(12212)}});
        console.log("点击了取消")
    }

    /** -----------------computed--------------------- */
    get getCounter(): number {
        return this.count/2
    }

    /** -----------------watch--------------------- */
    @Watch('randCodeImage', {deep: true, immediate: true})
    studentChange(propDD:any = "jj") {
        console.log(`student:  new valule is ${propDD}`);
    }


    /** -----------------emit--------------------- */
    @Emit()
    addToCount(n: number) {
        this.count += n
    }

}
</script>
