<template>
  <div class="q-cell" @click="handleClick">
    <div class="q-cell-title">{{title}}</div>
    <div class="q-cell-icon"></div>
  </div>
</template>

<script>
  export default {
    name: "q-cell",
    props: {
      title:{
        type: String,
        default: '',
      }
    },
    methods: {
      handleClick(e){
        this.$emit('click',e)
      }
    }
  }
</script>

<style scoped lang="scss">
.q-cell{
  padding:0 1.5rem;
  background:#fff;
  height:4rem;
  border-bottom: 0.07rem solid #dfdfdf;
  display:flex;
  justify-content: space-between;
  align-items: center;
  .q-cell-title{
    font-size:1.3rem;
    color: #666;
  }
}
</style>
