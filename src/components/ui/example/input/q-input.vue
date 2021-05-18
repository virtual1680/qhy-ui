<template>
  <!--q-input__right-icon-->
  <!--q-input__left-icon-->
  <!--q-input__left-icon__right-icon-->
  <!--q-input__prepend-->
  <!--q-input__append-->
  <!--q-input__prepend__append-->
  <!--q-input__prepend__right-icon-->
  <!--q-input__left-icon__append-->
  <div :class="containerClass?`q-input${containerClass}`:''" class="q-input" :style="width?`width:${width}`:''">
    <div class="q-input-icon q-input-left-icon">
      <slot name="left-icon"></slot>
    </div>
    <div class="q-input-prepend">
      <slot name="prepend"></slot>
    </div>
    <input class="q-input-inner"
           :class="border==='bottom'?'q-input-inner__border__bottom':'q-input-inner__border'"
           v-model="inputVal"
           :type="type"
           autocomplete="off"
           :placeholder="placeholder"
           @input="eventInput"
           @focus="eventFocus"
           @blur="eventBlur"
           @change="eventChange"
           />
    <div class="q-input-append">
      <slot name="append"></slot>
    </div>
    <div class="q-input-icon q-input-right-icon">
      <slot name="right-icon"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "q-input",
    model:{
      prop: 'value',
      event: 'input'
    },
    props: {
      type:{
        type:String,
        default:'text'
      },
      placeholder:{
        type:String,
        default:'请输入内容'
      },
      value:String | Number,
      border:{
        type:String,
        default:''//bottom 只显示底部边框 不传显示全部边框
      },
      width:{
        type:String,
        default:''
      }
    },
    data() {
      return {
        inputVal:'',
        slots:['left-icon','prepend','append','right-icon'],
        containerClass: ''
      }
    },
    created() {
      this.inputVal = this.value
    },
    mounted() {
      this.slots.forEach((item)=>{
        if (Boolean(this.$scopedSlots[item])) {
          this.containerClass += `__${item}`
        }
      });
    },
    methods: {
      eventInput(e){
        this.$emit('input',e.target.value);
      },
      eventFocus(e){
        this.$emit('focus',e.target.value)
      },
      eventBlur(e){
        this.$emit('blur',e.target.value)
      },
      eventChange(e){
        this.$emit('change',e.target.value)
      }
    }
  }
</script>

<style scoped lang="scss">
.q-input{
  display:inline-block;
  position: relative;
  width:100%;
  font-size: 1.3rem;
  &.q-input__left-icon__right-icon{
    .q-input-inner{
      padding:0.8rem 4rem 0.8rem 4rem;
    }
  }
  &.q-input__left-icon{
    .q-input-inner{
      padding:0.8rem 1.5rem 0.8rem 4rem;
    }
  }
  &.q-input__right-icon{
    .q-input-inner{
      padding:0.8rem 4rem 0.8rem 1.5rem;
    }
  }
  .q-input-icon{
    position:absolute;
    &.q-input-left-icon{
      padding-left: 0.5rem;
      min-width:4rem;
      top:0;
      left:0;
      height:100%;
      overflow:hidden;
      display:flex;
      justify-content:center;
      align-items: center;
    }
    &.q-input-right-icon{
      padding-right: 0.5rem;
      min-width:4rem;
      top:0;
      right:0;
      height:100%;
      overflow:hidden;
      display:flex;
      justify-content:center;
      align-items: center;
    }
  }
  .q-input-prepend{

  }
  .q-input-inner{
    width:100%;
    padding:0.8rem 1.5rem;
    border:none;
    color:#666;
    font-size: 1.3rem;
    &.q-input-inner__border{
      border-radius:0.5rem;
      border: 0.07rem solid #d7d7d7;
      &.q-input-inner__border__error{
        border: 0.07rem solid #f56c6c;
      }
      &:focus{
        border:0.07rem solid #26a2ff;
      }
    }

    &.q-input-inner__border__bottom{
      border-bottom: 0.07rem solid #d7d7d7;
      &.q-input-inner__border__bottom__error{
        border-bottom: 0.07rem solid #f56c6c;
      }
      &:focus{
        border-bottom:0.07rem solid #26a2ff;
      }
    }

  }
  .q-input-append{

  }

}
</style>
