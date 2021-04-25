<template>
  <div class="loading-box" v-if="show">
    <div class="loading-content">
      <div class="c">
        <div class="loading-flower">
          <div class="line">
            <div class="item item1">
              <span></span>
              <span></span>
            </div>
            <div class="item item2">
              <span></span>
              <span></span>
            </div>
            <div class="item item3">
              <span></span>
              <span></span>
            </div>
            <div class="item item4">
              <span></span>
              <span></span>
            </div>
            <div class="item item5">
              <span></span>
              <span></span>
            </div>
            <div class="item item6">
              <span></span>
              <span></span>
            </div>
            <div class="item item7">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="loading-message">{{message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "q-loading",
    props:{
      message:{
        type:String,
        default:'加载中...'
      },
      izShow:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return {
        show:false
      }
    },
    created() {
      this.show = this.izShow;
      let timer = setTimeout(()=>{
        if (this.show) {
          this.show = false;
        }
        clearTimeout(timer);
      },6000)
    },

    watch: {
      izShow(newVal){
        this.show = newVal
      }
    }

  }
</script>

<style scoped lang="scss">
  .loading-box{
    width:100vw;
    height:100vh;
    position:fixed;
    top: 0;
    left: 0;
    z-index: 2020;
    background:transparent;
    display:flex;
    justify-content: center;
    align-items: center;
    .loading-content{
      padding:1rem;
      width:9rem;
      height:9rem;
      background:rgba(0, 0, 0,0.5);
      border-radius:1rem;
      color:white;
      display:flex;
      flex-direction: column;
      justify-content: center;
      .c{
        height:36px;
        .loading-flower{
          position:relative;
          left:50%;
          margin-left:-18px;
          .line{
            .item{position:absolute;width:2px;
              animation:turn 1.4s linear infinite;
              display:flex;
              flex-direction: column;
              top:0;
              left:16px;
              span{
                height:9px;
                background: white;
                border-radius:5px;
              }
              span:nth-child(1){
                margin-bottom: 15px;
              }
            }
            div:nth-child(1){-webkit-transform:rotate(0deg);}
            div:nth-child(2){-webkit-transform:rotate(30deg);}
            div:nth-child(3){-webkit-transform:rotate(60deg);}
            div:nth-child(4){-webkit-transform:rotate(90deg);}
            div:nth-child(5){-webkit-transform:rotate(120deg);}
            div:nth-child(6){-webkit-transform:rotate(150deg);}
            div:nth-child(7){-webkit-transform:rotate(180deg);}

            @-webkit-keyframes load{
              0%{opacity:0.2;}
              100%{opacity:1;}
            }
            .item1 span:first-child{-webkit-animation:load 1.4s linear 0s infinite;}
            .item2 span:first-child{-webkit-animation:load 1.4s linear 0.1s infinite;}
            .item3 span:first-child{-webkit-animation:load 1.4s linear 0.2s infinite;}
            .item4 span:first-child{-webkit-animation:load 1.4s linear 0.3s infinite;}
            .item5 span:first-child{-webkit-animation:load 1.4s linear 0.4s infinite;}
            .item6 span:first-child{-webkit-animation:load 1.4s linear 0.5s infinite;}
            .item7 span:first-child{-webkit-animation:load 1.4s linear 0.6s infinite;}

            .item1 span:last-child{-webkit-animation:load 1.4s linear 0.7s infinite;}
            .item2 span:last-child{-webkit-animation:load 1.4s linear 0.8s infinite;}
            .item3 span:last-child{-webkit-animation:load 1.4s linear 0.9s infinite;}
            .item4 span:last-child{-webkit-animation:load 1.4s linear 1s infinite;}
            .item5 span:last-child{-webkit-animation:load 1.4s linear 1.1s infinite;}
            .item6 span:last-child{-webkit-animation:load 1.4s linear 1.2s infinite;}
            .item7 span:last-child{-webkit-animation:load 1.4s linear 1.3s infinite;}
          }
        }
      }
      .loading-message{
        text-align: center;
        font-size:1.2rem;
      }
    }
  }

</style>
