<template>
  <div id="app">
      <cn-dropdown :menuItems="menuItems"></cn-dropdown>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
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
            show: true,
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
  }
}
</script>

<style lang="scss">
</style>
