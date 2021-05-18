<template>
  <q-layout layout-type="header-footer" :footer-height="5" @click.native="index=!index">
    <template #header>
      <van-nav-bar :title="$route.meta.title"></van-nav-bar>
    </template>
    <div class="container">
      <!--<transition-->
              <!--name="custom-classes-transition"-->
              <!--enter-active-class="animate__animated animate__tada"-->
              <!--leave-active-class="animate__animated animate__bounceOutRight"-->
      <!--&gt;-->
        <!--<div class="text-animate" >-->
          <!--The Virtual DOM allows us to make performant update our UIs!-->
        <!--</div>-->
      <!--</transition>-->
      <!--<transition name="bounce"-->
                  <!--enter-active-class="animate__animated animate__fadeInDown"-->
                  <!--leave-active-class="animate__animated animate__bounceOutRight"-->
      <!--&gt;-->
        <!--<p v-if="index">-->
          <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis-->
          <!--enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi-->
          <!--tristique senectus et netus.-->
        <!--</p>-->
      <!--</transition>-->
      <div class="testss">
        <div style="width:10vw">
          <van-dropdown-menu active-color="#bbb">
            <van-dropdown-item title-class="dropdown-item" title="">
              <div class="select-list">
                <div class="item"></div>
              </div>
              <div style="padding: 5px 16px;">
                <van-button type="danger" block round @click="onConfirm">
                  确认
                </van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>

      </div>
    </div>
  </q-layout>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        index:false,
        value1: 0,
        value2: 'a',
        option1: [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
      }
    },
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
    .testss{
      .dropdown-item{
        /deep/ &:after{
            right:0;
          }
      }
    }
    .text-animate{
      box-shadow: -5px 18px 40px -12px rgba(0, 0, 0, 0.4);
      transform: perspective(800px) rotateY(30deg) rotateX(15deg) rotate(-2deg) scaleX(0.95);
      backface-visibility: hidden;
      transform-origin: 50% 50%;
    }
  }
</style>
