<template>
  <div class="moduleCenter">
    <div v-text="label"></div>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleCenter',
    data: function() {
        return {
            label: 'moduleCenter'
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
            console.log("[moduleCenter.doSth]" + JSON.stringify(oData));
        }
    }
  }
</script>

<style>
  #moduleCenter {

  }
</style>
