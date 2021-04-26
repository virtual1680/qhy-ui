export default {
  name: "q-form",
  props: {
    rules:{
      type:Object,
      default:{}
    }
  },
  render:function(createElement) {
    return createElement(
      'div',
      {
        class:'q-form-container'
      },
      this.$slots.default
    )
  },
  mounted() {
    let rulesKey = Object.keys(this.rules);
    if (Object.keys(this.rules).length > 0) {
      this.$scopedSlots.default().forEach((item) =>{
        let prop = item.componentInstance.$attrs['prop'];
        if (prop) {
          if (rulesKey.includes(prop)) {
            item.data.attrs['rule'] = this.rules[prop]
          }
        }
      })
    }
  },
  methods:{
    validate(valid){
      let validate = false;
      this.$scopedSlots.default().forEach((slot) =>{
        slot.componentInstance.findChild(slot.componentInstance.$slots.default[0],(status)=>{
          validate = status;
        })
      });
      valid(validate);
    }
  }
}


