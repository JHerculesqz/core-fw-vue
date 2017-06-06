<template>
  <div class="moduleCenter">
    <div v-text="data"></div>
  </div>
</template>

<script>
  import Bus from '@/walle/core/bus.js';
  export default {
    name: 'moduleCenter',
    data: function() {
        return {
          data: ""
        }
    },
    created: function () {
      Bus.$on('imsgModuleCenterSetData', this.imsgModuleCenterSetData);
    },
    beforeDestroy: function () {
      Bus.$off('imsgModuleCenterSetData', this.imsgModuleCenterSetData);
    },
    methods:{
      imsgModuleCenterSetData: function(strData){
        this.data = strData + "的坐标";
      }
    }
  }
</script>

<style>
  .moduleCenter {
    height: calc(100% - 30px);
    background-color: rgba(0,255,0,0.2)
  }
  .moduleCenter div{
    position: absolute;
    top: 50px;
    left: 200px;
  }
</style>
