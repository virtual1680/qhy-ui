<template>
  <q-layout layout-type="header-footer" :footer-height="5">
    <template #header>
      <van-nav-bar :title="$route.meta.title"></van-nav-bar>
    </template>
    <div class="container">
      <q-cell-group>
        <q-cell title="dialog提示" detail="确认取消" @click="handleClick('/home/dialog')"></q-cell>
        <q-cell title="输入框" @click="handleClick('/home/input')"></q-cell>
        <q-cell title="form表单" @click="handleClick('/home/form')"></q-cell>
      </q-cell-group>
    </div>
  </q-layout>
</template>

<script>
  import {Throttle} from '@/components/ui/utils'
  const _ = require('lodash/function');
  export default {
    name: "index",
    methods:{
      toPush(url){

        _.throttle(()=>{
          console.log(909090)
        },1000,{ 'trailing': false });

        // Throttle(()=>{
        //   console.log(909)
        // },5000);
      },
      handleClick(url){
          this.$router.push(url)
      }
    }
  }
</script>

<style scoped lang="scss">
.container{
  padding:1rem;
}
</style>
