<template>
  <q-layout layout-type="header">
    <template #header>
      <van-nav-bar :title="$route.meta.title" left-text="返回" left-arrow  @click-left="$router.go(-1)"></van-nav-bar>
    </template>
    <div class="container">
      <div>
        <q-input></q-input>
        <q-input class="mt1" v-model="value" @input="onInput">
          <template #left-icon>
            <div>图</div>
          </template>
          <template #right-icon>
            <div>图</div>
          </template>
        </q-input>
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
      </div>
    </div>
  </q-layout>

</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        value:'',
      }
    },
    methods: {
      onInput(value){
        console.log(value)
      }
    }
  }
</script>

<style scoped lang="scss">
  .container{
    padding:1rem;
  }
</style>
