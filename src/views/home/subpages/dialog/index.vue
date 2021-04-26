<template>
  <q-layout layout-type="header">
    <template #header>
      <van-nav-bar :title="$route.meta.title" left-text="返回" left-arrow  @click-left="$router.go(-1)"></van-nav-bar>
    </template>
    <div class="container">
      <q-cell title="默认" @click="show('success')"></q-cell>
    </div>
  </q-layout>
</template>

<script>
  export default {
    name: "index",
    methods: {
      show(type){
        if (type === 'success') {
          this.$QDialog.open({
            title:'提示',
            message:'恭喜您获得一份大礼！',
            onConfirm:()=>{
              console.log(111)
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.container{
  padding:1rem;
}
</style>
