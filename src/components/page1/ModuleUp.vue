<template>
  <div class="moduleUp">
    <div v-text="label"></div>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleUp',
    data: function() {
      return {
          label: 'moduleUp'
      }
    },
    created: function () {

    },
    beforeDestroy: function () {

    },
    methods:{

    }
  }
</script>

<style>
  .moduleUp {

  }
</style>
