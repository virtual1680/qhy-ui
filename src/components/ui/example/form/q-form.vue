<template>
  <div class="q-form-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "q-form",
    props: {
      rules:{
        type:Object,
        default:{}
      }
    },
    mounted() {
      //[0].componentInstance['_vnode'].children
      let rulesKey = Object.keys(this.rules);
      if (Object.keys(this.rules).length > 0) {
        // console.log(this.$scopedSlots.default());
        this.$scopedSlots.default().forEach((item) =>{
          let prop = item.componentInstance.$attrs['prop'];
          if (prop) {
            if (rulesKey.includes(prop)) {
              item.data.attrs['rule'] = this.rules[prop]
            }
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
