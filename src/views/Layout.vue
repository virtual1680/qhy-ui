<template>
  <q-layout layout-type="header-footer">
    <template>
      <div>
        <q-form ref="form" :rules="rules">
          <q-form-item star label="用户名" prop="name">
            <q-input v-model="username" @input="onInput"></q-input>
          </q-form-item>
          <q-form-item star label="密码" prop="password">
            <q-input v-model="password" @input="onInput"></q-input>
          </q-form-item>
          <q-form-item>
            <q-button type="success" plain  round @click="submit('form')">提交</q-button>
          </q-form-item>
        </q-form>
        <!--position="top"-->


        <q-form-item class="mt1" label="用户信息" position="top">
          <q-input v-model="value" @input="onInput">
            <template #left-icon>
              <div>图</div>
            </template>
            <template #right-icon>
              <div>图</div>
            </template>
          </q-input>
        </q-form-item>
        <q-input class="mt1" width="70%" v-model="value" @input="onInput">
          <template #left-icon>
            <div>图</div>
          </template>
        </q-input>
        <q-input class="mt1" width="70%" v-model="value" border="bottom" @input="onInput">
          <template #right-icon>
            <div>图</div>
          </template>
        </q-input>
        <h1 v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]" :key="item">Here might be a page title{{item}}</h1>
      </div>
    </template>
  </q-layout>
</template>

<script>
  export default {
    name: "Layout",
    data () {
      return {
        value:'',
        username:'',
        password:'',
        rules:{
          name:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    created () {
    },
    methods: {
      submit(formName){
        this.$refs[formName].validate((valid)=>{
          console.log(valid)
        });
        console.log(12212)
      },
      onInput(){
        console.log(this.value)
      }
    }
  }
</script>

<style scoped>

</style>
