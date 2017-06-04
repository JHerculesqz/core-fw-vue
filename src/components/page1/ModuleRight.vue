<template>
  <div class="moduleRight">
    <div v-text="label"></div>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleRight',
    data: function() {
      return {
        label: 'moduleRight'
      }
    },
    created: function () {
      Bus.$on('imsg1', this.doSth);
    },
    beforeDestroy: function () {
      Bus.$off('imsg1', this.doSth);
    },
    methods:{
      doSth: function(oData){
        console.log("[moduleRight.doSth]" + JSON.stringify(oData));
      }
    }
  }
</script>

<style>
  .moduleRight {

  }
</style>
