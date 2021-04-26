<template>
  <div class="q-container">
    <div class="q-header-box" v-if="header">
      <slot name="header"></slot>
    </div>
    <div class="q-content-box" :style="footer?`height: calc(100vh - ${footerHeight}rem - ${header?46:0}px)`:`height: calc(100vh - ${header?46:0}px)`">
      <slot></slot>
    </div>
    <div v-if="footer" class="q-footer-box" :style="`height:${footerHeight}rem;`">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "q-layout",
    props: {
      ['layout-type']:{
        type:String,
        default:'header-content' //header-content  footer
      },
      ['footer-height']:{
        type:Number,
        default:6, //单位rem
      }

    },
    data(){
      return {
        footer:false,
        header:false,
      }
    },
    created() {
      this.footer = this.layoutType.includes('footer');
      this.header = this.layoutType.includes('header')
    },
    watch: {
      layoutType(newValue){
        this.footer = newValue.includes('footer');
        this.header = this.layoutType.includes('header')
      }
    }
  }
</script>

<style scoped lang="scss">
  .q-container{
    background: #fafafa;
    .q-header-box{
      height:46px;
      overflow: hidden;
    }
    .q-content-box{
      height: calc(100vh - 46px);
      overflow-y: scroll;
    }
    .q-footer-box{
      overflow:hidden;
    }
  }

</style>
