import './q-button.scss'

export default {
  name: "q-button",
  props: {
    //TODO 后期有需要再开发
    size: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',//primary / success / warning / error / text
    },
    /** 是否加载 */
    loading: {
      type: Boolean,
      default: false
    },
    /** 是否加载 */
    loadingTx: {
      type: Boolean,
      default: false
    },
    /** 是否圆角 */
    round: {
      type: Boolean,
      default: false
    },
    /** 背景颜色 */
    bg: {
      type: String,
      default: ''
    },
    /** 是否朴素按钮 */
    plain: {
      type: Boolean,
      default: false
    },
    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false
    },
    /** 是否块级元素 */
    block: {
      type: Boolean,
      default: false
    },
  },
  render: function (createElement) {
    return createElement(
      'button',
      {
        type: "button",
        staticClass: "q-button",
        style: this.bg ? 'background:' + this.bg : '',
        class: [
          this.type ? 'q-button__' + this.type : "",
          this.block ? "block" : "",
          this.plain ? 'plain' : '',
          this.round ? 'round' : '',
        ],
        on: {click: this.handleClick}
      },
      [
        this.loading?createElement('span', {class: "q-button__loading"}):'',
        createElement('span', {class: "q-button__text"}, this.$slots.default),
        this.disabled?createElement('div',{class:'q-button__disabled'}):'',
      ]
    )
  },
  methods: {
    handleClick: function handleClick(evt) {
      let disabled = this.disabled;
      if (this.loading) {
        disabled = this.loading
      }
      if (!disabled) {
        this.$emit('click', evt);
      }
    }
  }
}
