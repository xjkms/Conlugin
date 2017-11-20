<template>
  <div class="cn-dropdown">
      <span class="content">{{ value }}</span>
      <cn-dropdown-item :menuItems="menuItems" @updateMenuState="changeMenuState"></cn-dropdown-item>
  </div>
</template>
<script>
  export default {
    name: 'cn-dropdown',
    components: {
    },
    render: function(createElement) {
      return createElement(
        'h1',
        this.value
      )
    },
    data() {
      return {
        value: '请选择',
        menuItems: [
          {
            value: 'option1',
            id: '1',
            show: true,
            subMenuItems: [{
              value: 'subOption11',
              id: '11',
            },{
              value: 'subOption12',
              id: '12'
            },{
              value: 'subOption13',
              id: '13',
              show: false,
              subMenuItems: [{
                value: 'subOption131',
                id: '131'
              },{
                value: 'subOption132',
                id: '132'
              }]
            }]
          },
          {
            value: 'option2',
            id: '2',
            subMenuItems: []
          },
          {
            value: 'option3',
            id: '3',
            subMenuItems: []
          },
          {
            value: 'option4',
            id: '4',
            subMenuItems: []
          }
        ]
      }
    },
    methods: {
      itemClicked (item) {
        this.value = item.value;
      },
      changeMenuState(item) {
        console.log('state change triggered!');
        console.log(item);

        const target = this.findInArrayByName(this.menuItems, 'id', item.id, 'subMenuItems');
        target.show = !item.show;
      },
      findInArrayByName(targetArray, attrName, attrValue, subArray) {
        const that = this;
        let result = null;
        for(let index in targetArray) {
          const item = targetArray[index]
          if(item[attrName] === attrValue) {
            result = item;
            break;
          } else {
            if(item[subArray]) {
              result = that.findInArrayByName(item[subArray], attrName, attrValue, subArray)
              if(result) break;
            }
          }
        }
        return result;
      }
    },
    computed: {

    },
    beforeMount() {

    }
  }
</script>
<style lang="scss">
    @import "";
    @import './dropdown.scss';
</style>
