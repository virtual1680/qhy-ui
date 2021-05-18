<template>
  <q-layout layout-type="header">
    <template #header>
      <van-nav-bar :title="$route.meta.title" left-text="返回" left-arrow  @click-left="$router.go(-1)"></van-nav-bar>
    </template>
    <div class="container">
      <div>
        <q-form ref="form" :rules="rules">
          <q-form-item star label="用户名" prop="name">
            <q-input v-model="username"></q-input>
          </q-form-item>
          <q-form-item star label="密码" prop="password">
            <q-input v-model="password"></q-input>
          </q-form-item>
          <q-form-item>
            <q-button type="success" plain  round @click="submit('form')">提交</q-button>
          </q-form-item>
        </q-form>
      </div>
      <!---->
      <div>
        <q-form-item class="mt1" label="用户信息" position="top">
          <q-input v-model="value">
            <template #left-icon>
              <div>图</div>
            </template>
            <template #right-icon>
              <div>图</div>
            </template>
          </q-input>
        </q-form-item>
        <q-form-item class="mt1" star label="用户信息" position="top">
          <q-input v-model="value">
            <template #left-icon>
              <div>图</div>
            </template>
            <template #right-icon>
              <div>图</div>
            </template>
          </q-input>
        </q-form-item>
      </div>
    </div>
  </q-layout>
</template>

<script>
  export default {
    name: "index",
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
    methods: {
      submit(formName){
        this.$refs[formName].validate((valid)=>{
          if (valid) {
            this.$QToast.success('验证成功')
          } else {
            this.$QToast.error('验证失败')
          }
        });
      },
    }
  }
</script>

<style scoped lang="scss">
  .container{
    padding:1rem;
  }
</style>
