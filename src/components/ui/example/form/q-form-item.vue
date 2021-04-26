<template>
  <div class="q-form-item-container flex"
       :class="position==='top'?'flex-column':'flex-row'">
    <label v-if="label"
           class="q-form-item__label"
           :style="`width:${width?width:'10rem'}`"
           :class="`${position==='top'?'q-form-item__label__top':''}
                    ${star?'q-form-item__label__star':''}`">{{label}}</label>
    <div class="q-form-item__input-box">
      <slot></slot>
      <div class="q-form-item__message-tip" v-if="errorMessage">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "q-form-item",
    props:{
      label:{
        type:String,
        default:''
      },
      position:{
        type:String,
        default:''  //top
      },
      width:{
        type:String,
        default:''
      },
      star:{
        type:Boolean,
        default:false,
      }
    },
    data() {
      return {
        izTop:false,
        errorMessage:'',
        rule:[]
      }
    },
    mounted(){
      let slot = this.$slots.default[0];
      this.$nextTick().then(()=>{
        //获取q-form传过来的验证规则
        this.rule = slot.componentInstance.$parent.$attrs['rule'] || [];
        this.findChild(slot,null);
      })
    },
    methods: {
      findChild(slot,callback) {
        if (slot) {
          let vnodeChild = slot.componentInstance['_vnode'].children;
          if (vnodeChild.length>3){
            vnodeChild.forEach(item =>{
              if (item.tag === 'input') {
                  this.checking(item,callback);
              }
            })
          }
        }
      },
      checking(dom,callback){
        //根据验证规则添加监听事件
        if (this.rule.length>0){
          let arr = [];
          this.rule.forEach((item,index) => {
            if (item.trigger) {
              if (callback) {
                let result = this.required(dom,item);
                arr.push(result)
              }else{
                dom.elm.addEventListener(item.trigger,()=>{
                  this.required(dom,item,null)
                  // console.log(dom.context.value,"8989898")
                })
              }
            }
          });
          arr.length > 0 && callback(!arr.includes(false))
        }
      },
      required(dom,item){
        let value = dom.context.value;
        // console.log(dom);
        if (item.required) {
          //TODO 需要判断border__bottom的情况
          if (value) {
            if (dom.elm.className.includes('q-input-inner__border__error')) {
              dom.elm.className = dom.elm.className.replaceAll('q-input-inner__border__error','')
            }
            //q-input-inner__border__bottom
            this.errorMessage = '';
            return true;
          }else{
            if (dom.elm.className.includes('q-input-inner__border')) {
              dom.elm.className.replaceAll('q-input-inner__border','')
            }
            dom.elm.className =dom.elm.className+ ' q-input-inner__border__error';
            this.errorMessage = item.message;
            return false;
          }
        }
      }
    },

    watch: {

    }
  }
</script>

<style scoped lang="scss">
  .q-form-item-container{
    padding:0 1.5rem 1.5rem;
    display:flex;
    .q-form-item__label{
      align-self: center;
      text-align: right;
      vertical-align: middle;
      font-size: 1.3rem;
      color: #606266;
      padding: 0 1.2rem 0 0;
      box-sizing: border-box;
      &.q-form-item__label__top{
        display: inline-block;
        text-align: left;
        align-self: flex-start;
      }
      &.q-form-item__label__star{
        &:before{
          content: '*';
          color: #f56c6c;
          margin-right: 0.2rem;
        }
      }
    }
    .q-form-item__input-box{
      width:100%;
      position: relative;
      .q-form-item__message-tip{
        position: absolute;
        bottom: -1.55rem;
        left: 0;
        font-size:1rem;
        color: #f56c6c;
      }
    }
  }

</style>
