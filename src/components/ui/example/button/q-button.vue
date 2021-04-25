<template>
  <button type="button" class="q-button"
       :style="`${bg?'background:'+bg:''}`"
       :class="`${type?'q-button__'+type:''} ${block?'block':''} ${plain?'plain':''} ${round?'round':''}`" >
    <span class="q-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: "q-button",
    props:{
      //TODO 后期有需要再开发
      size:{
        type:String,
        default:'',
      },
      type:{
        type:String,
        default:'',//primary / success / warning / error / text
      },
      /** 是否加载 */
      loading:{
        type:Boolean,
        default:false
      },
      /** 是否圆角 */
      round:{
        type:Boolean,
        default:false
      },
      /** 背景颜色 */
      bg:{
        type:String,
        default:''
      },
      /** 是否朴素按钮 */
      plain:{
        type:Boolean,
        default:false
      },
      /** 是否禁用 */
      disabled:{
        type:Boolean,
        default:false
      },
      /** 是否块级元素 */
      block:{
        type:Boolean,
        default:false
      },
    },
    methods:{
      click(e){
        this.$emit('click',e)
      }
    }
  }
</script>

<style scoped lang="scss">
.q-button{
  min-width: 9rem;
  height: 3.7rem;
  background: #fff;
  border: 0.07rem solid #cfcfcf;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #666;
  padding:0 1.5rem;
  display: inline-block;
  text-align: center;
  line-height: 3.7rem;
  white-space: nowrap;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  &.block{
    width: 100%;
    display: block;
  }
  &.round{
    border-radius: 3.7rem;
  }
  &.q-button__primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &.plain{
      border: 0.07rem solid #409eff;
      background: rgba(#409eff,0.1);
      color: #409eff;
    }
  }
  &.q-button__success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &.plain{
      border: 0.07rem solid #67c23a;
      background: rgba(#67c23a,0.1);
      color: #67c23a;
    }
  }
  &.q-button__warning{
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &.plain{
      border: 0.07rem solid #e6a23c;
      background: rgba(#e6a23c,0.1);
      color: #e6a23c;
    }
  }
  &.q-button__error{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &.plain{
      border: 0.07rem solid #f56c6c;
      background: rgba(#f56c6c,0.1);
      color: #f56c6c;
    }
  }
  &.q-button__text{
    min-width: 5rem;
    color: #409eff;
    background: transparent;
    padding: 0.5rem 0;
    border: none;
  }

  .q-button__text{
    display: inline-block;
    min-width: 5rem;
  }

}
</style>
