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
            label: 'moduleCenter(展示Topo)'
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
  .moduleCenter {
    height: calc(100% - 30px);
    background-color: rgba(0,255,0,0.2)
  }
</style>
