<template>
  <div class="q-cell" @click="handleClick">
    <div class="q-cell-title">{{title}}</div>
    <div class="q-cell-detail">{{detail}}<i v-if="arrow" class="q-cell-icon"></i></div>
  </div>
</template>

<script>
  export default {
    name: "q-cell",
    props: {
      title:{
        type: String,
        default: '',
      },
      detail:{
        type:String,
        default: ''
      },
      /** 是否显示箭头 */
      arrow:{
        type:Boolean,
        default:true
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
  padding:0 1rem;
  background:#fff;
  height:4rem;
  border-bottom: 0.06rem solid #f2f2f2;
  display:flex;
  justify-content: space-between;
  align-items: center;
  .q-cell-title{
    font-size:1.3rem;
    color: #333;
  }
  .q-cell-detail{
    display: flex;
    align-items: center;
    font-size:1.2rem;
    color: #999;
    .q-cell-icon{
      display: inline-block;
      width: 1rem;
      height: 1rem;
      overflow: hidden;
      border-top: 0.06rem solid #e9e9e9;
      border-right: 0.06rem solid #e9e9e9;
      transform: rotate(45deg);
    }
  }
}
</style>
