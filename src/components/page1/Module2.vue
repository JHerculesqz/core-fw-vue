<template>
  <div id="module2">
    <div v-text="vText"></div>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'module2',
    data () {
      return {
        vText: 'vText4module2'
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
        console.log("[Module2.doSth]" + JSON.stringify(oData));
        this.vText = JSON.stringify(oData);
      }
    }
  }
</script>

<style>
  #module2 {
    width:300px;
    height:300px;
    background: yellowgreen;
    float: left;
  }
</style>
