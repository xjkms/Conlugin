<script>
  /**
   * todo:1.子菜单的打开和关闭；2.联动？3.动态加载？
    */
  export default {
    name: 'cn-dropdown-item',
    components: {
    },
    render: function(createElement) {
      const that = this;
      const triggerType = that.getTriggerType;
      const createSubMenu = function(parentItem) {
        const items = parentItem.subMenuItems;
        return createElement('div', {'class': {
          'dropdown-list-sub-menu': true,
        }, 'style': {'display': parentItem.show?'': 'none'}}, items.map(function(item) {
          if(item.subMenuItems && item.subMenuItems.length > 0) {
            return createElement('div', {
              'class': {
                'dropdown-list-item': true,
                'opened': item.show
              },
              'on': {
                '!click': function(e) {
                  e.stopPropagation();
                  that.emitMenuState(item)
                }
              }
            },[
              createElement('div', [
                createElement('span', item.value),
                createElement('i', {'class': {'arrow-down': true}})
              ]),
              createSubMenu(item)
            ])
          } else {
            return createElement('div', {'class': {'dropdown-list-item': true}}, [
              createElement('span', item.value)
            ])
          }
        }))
      }
      return createElement('div',
        {
            'class': {
              'cn-dropdown-item-wrapper': true
            }
        }, this.menuItems.map(function(item) {
          if(item.subMenuItems.length > 0) {
            return createElement('div',
              {'class':
                {'dropdown-list-item': true,
                  'opened': item.show
                },
                on: {
                  'click': function(e) {
                    that.emitMenuState(item)
                  }
                },
              },[
              createElement('div', [
                createElement('span', item.value),
                createElement('i', {'class': {'arrow-down': true}})
              ]),
              createSubMenu(item)
            ])
          } else {
            return createElement('div', {'class': {'dropdown-list-item': true}}, [
              createElement('span', item.value)
            ])
          }
        })
      )
    },
    props: {
      menuItems: {
        type: Array,
        require: true,
        default: []
      },
      triggerType: {
        type: String,
        default: 'hover'
      }
    },
    data() {
      return {
        value: '请选择'
      }
    },
    methods: {
      itemClicked (item) {
        this.value = item.value;
      },
      emitMenuState(item) {
        this.$emit('updateMenuState', item);
      }
    },
    computed: {
      getTriggerType() {
        return this.triggerType === 'hover'? 'mouseover': 'click'
      }
    },
    beforeMount() {
    }
  }
</script>
<style lang="scss">@import 'dropdown-item.scss';
</style>
