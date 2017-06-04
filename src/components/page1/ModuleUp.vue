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
          label: 'moduleUp(展示工具栏)'
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
    height: 30px;
    background-color: rgba(255,0,0,0.2)
  }
</style>
