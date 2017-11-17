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
        console.log(item);
      }
    },
    computed: {

    },
    beforeMount() {

    }
  }
</script>
<style lang="scss">@import './dropdown.scss';
</style>
