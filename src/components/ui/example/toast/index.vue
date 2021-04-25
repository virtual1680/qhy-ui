<template>
  <div class="loading-box" v-if="show">
    <div class="loading-content">
      <div class="icon">
        <svg width="4rem" height="4rem">
          <circle r="18" class="circle" fill="none" :stroke="circleColor" stroke-width="3" cx="20" cy="20" stroke-linecap="round" transform="rotate(0 0 0)" ></circle>
          <polyline v-if="iconClass('success')" fill="none" :stroke="circleColor" stroke-width="3" points="7,18 17,28 32,12" stroke-linecap="round" stroke-linejoin="round" class="tick"></polyline>
          <polyline v-if="iconClass('error')" fill="none" :stroke="circleColor" stroke-width="3" points="12,28 20,20 28,12" stroke-linecap="round" stroke-linejoin="round" class="tick"></polyline>
          <polyline v-if="iconClass('error')" fill="none" :stroke="circleColor" stroke-width="3" points="12,12 20,20 28,28" stroke-linecap="round" stroke-linejoin="round" class="tick"></polyline>
          <polyline v-if="iconClass('warning')" fill="none" :stroke="circleColor" stroke-width="3" points="20,8 20,20 20,25" stroke-linecap="round" stroke-linejoin="round" class="tick"></polyline>
          <polyline v-if="iconClass('warning')" fill="none" :stroke="circleColor" stroke-width="3" points="20,30 20,31" stroke-linecap="round" stroke-linejoin="round" class="tick"></polyline>
        </svg>
      </div>
      <div class="loading-message">{{message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "q-toast",
    props:{
      iconType:{
        type:String,
        default:'success'
      },
      message:{
        type:String,
        default:''
      },
      izShow:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return {
        show:false,
        circleColor:'#2de540',
      }
    },
    created() {

    },
    methods: {
      iconClass(type){
        return this.iconType === type
      },
    },
    watch: {
      izShow(newVal){
        this.show = newVal;

      },
      iconType(newVal){
        switch(newVal){
          case 'success' : this.circleColor = '#2de540';break;
          case 'warning' : this.circleColor = '#cebd4e';break;
          case 'error' : this.circleColor = '#e54a2f';break;
        }
      }
    },
    computed:{

    }

  }
</script>

<style scoped lang="scss">
  .circle {
    stroke-dasharray: 350;
    stroke-dashoffset: 350;
    animation:circle 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .tick{
    stroke-dasharray: 350;
    stroke-dashoffset: 350;
    animation:tick1 .5s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes circle {
    from {
      stroke-dashoffset: 250;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes tick1 {
    from {
      stroke-dashoffset: 450;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

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
      min-width:9rem;
      max-width:11rem;
      min-height:9rem;
      max-height:11rem;
      background:rgba(0, 0, 0,0.5);
      border-radius:1rem;
      color:white;
      display:flex;
      flex-direction: column;
      justify-content: center;
      .icon{
        display:flex;
        justify-content: center;
        .success{

        }
      }
      .loading-message{
        margin-top: .5rem;
        text-align: center;
        font-size:1.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;

        /*white-space: nowrap;*/
        /*word-break: break-all;*/

      }
    }
  }

</style>
