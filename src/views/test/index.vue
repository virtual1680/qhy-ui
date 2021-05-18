<template>
  <q-layout layout-type="header-footer" :footer-height="5">
    <template #header>
      <van-nav-bar :title="$route.meta.title"></van-nav-bar>
    </template>
    <div class="container">
      <q-cell title="Transform" @click="toPush('/mine/transform')"></q-cell>
      <q-cell title="dialog提示" @click="toPush('/three/dialog')"></q-cell>
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
