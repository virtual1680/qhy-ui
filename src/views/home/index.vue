<template>
  <q-layout layout-type="header-footer" :footer-height="5">
    <template #header>
      <van-nav-bar :title="$route.meta.title"></van-nav-bar>
    </template>
    <div class="container">
      <q-cell title="dialog提示" @click="toPush('/home/dialog')"></q-cell>
      <q-cell title="输入框" @click="toPush('/home/input')"></q-cell>
      <q-cell title="form表单" @click="toPush('/home/form')"></q-cell>
    </div>
  </q-layout>
</template>

<script>
  export default {
    name: "index",
    methods:{
      toPush(url){
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
