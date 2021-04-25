<template>
  <div class="dialog-box" v-if="show">
    <div class="dialog-content">
      <img v-if="titleImg" class="title-img" :src="titleImg" alt="">
      <div class="dialog-title">{{title}}</div>
      <div class="dialog-message">{{message}}</div>
      <div class="dialog-footer">
        <div class="dialog-close w10" v-if="!hideClose" @click="onClose">{{closeTx}}</div>
        <div class="dialog-confirm" :class="!hideClose?'w10':'flex'" @click="onConfirm">{{confirmTx}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "q-dialog",
    props: {
      titleImg:{
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: "提示"
      },
      message: {
        type: String,
        default: "提示内容"
      },
      confirmTx:{
        type: String,
        default: "确认"
      },
      closeTx:{
        type: String,
        default: "取消"
      },
      izShow: {
        type: Boolean,
        default: false
      },
      hideClose: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false
      }
    },
    created() {
      this.show = this.izShow
    },
    methods:{
      onConfirm(){
        this.show = false;
      },
      onClose() {
        this.show = false;
        this.$emit('close')
      }
    },
    watch:{
      izShow(newVal){
        this.show = newVal;
      }
    }
  }
</script>

<style scoped lang="scss">
  .dialog-box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2020;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog-content {
      flex-direction: column;
      display:flex;
      width: 25.97rem;
      min-height: 12.3rem;
      padding: 1.92rem;
      background: #FFFFFF;
      border-radius: 0.26rem;
      .title-img{
        width:3.8rem;
        height:3.8rem;
        display: flex;
        align-self: center;
      }
      .dialog-title {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        color: #1D4E73;
        line-height: 3rem;
      }
      .dialog-message {
        flex: 1;
        margin: 0.5rem 0 1rem 0;
        text-align: center;
        min-height: 4rem;
        font-weight: 400;
        font-size: 1.33rem;
        color: #93A5B1;
        line-height: 2rem;
      }
      .dialog-footer {
        display: flex;
        justify-content: space-between;
        .flex{
          flex: 1;
        }
        .w10{
          width:10rem;
        }
        .dialog-confirm {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #3F6095;
          color: #fff;
          height: 3.3rem;
          line-height: 3.3rem;
          text-align: center;
          font-size: 1.2rem;
          border-radius: 0.39rem;
        }
        .dialog-close {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #F1F1F1;
          height: 3.3rem;
          line-height: 3.3rem;
          text-align: center;
          font-size: 1.2rem;
          color: #1d4e73;
          border-radius: 0.39rem;
        }
      }

    }

  }
</style>
