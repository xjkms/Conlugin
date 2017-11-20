<template>
  <i :class="'con-icon-'+name"></i>
</template>
<script>
  export default {
    name: 'cn-icon',

    props: {
      name: String
    }
  }
</script>
