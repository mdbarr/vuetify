import GenerateRouteLink from '../../mixins/route-link'

export default {
  name: 'breadcrumbs-item',

  mixins: [GenerateRouteLink],

  props: {
    disabled: Boolean,
    href: {
      type: String,
      default: 'javascript:;'
    },
    target: String
  },

  computed: {
    classes () {
      return {
        'breadcrumbs__item': true,
        'breadcrumbs__item--disabled': this.disabled
      }
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink()

    if (tag === 'a') {
      data.attrs.target = this.target
    }

    return h('li', {}, [
      h(tag, data, this.$slots.default)
    ])
  }
}
