<template>
  <div class="cn-dropdown">
      <span v-if="isTopLevel" class="content" @click="changeMenuShow">{{ value }}</span>
      <div class="cn-dropdown-menu" :v-show="isShow" :class="{'cn-dropdown-menu-sub': !isTopLevel}">
          <cn-dropdown-item v-for="item in menuItems" :key="item.id" :item="item" @updateMenuState="changeMenuState" @setValue="setValue">

          </cn-dropdown-item>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'cn-dropdown',
    components: {
    },
    render: function(createElement) {
      const that = this;
      return createElement(
      )
    },
    data() {
      return {
        value: '请选择',
        isShow: false
      }
    },
    props: {
      menuItems: {
        type: Array,
        default: []
      },
      isTopLevel: {
        type: Boolean,
        default: true
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeMenuShow() {
        this.isShow = !this.isShow
      },
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
      },
      setValue(item) {
        this.isTopLevel? this.value = item.value: this.$emit('setValue', item)
      }
    },
    computed: {

    },
    beforeMount() {

    }
  }
</script>
<style lang="scss">
    @import './dropdown.scss';
</style>
