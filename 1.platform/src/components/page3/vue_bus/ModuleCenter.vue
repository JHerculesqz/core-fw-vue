<template>
  <div class="moduleCenter">
    <div v-text="data"></div>
  </div>
</template>

<script>
  import BusUtils from '@/walle/core/bus';

  export default {
    name: 'moduleCenter',
    data: function() {
        return {
          data: ""
        }
    },
    created: function () {
      BusUtils.$on('imsgModuleCenterSetData', this.imsgModuleCenterSetData);
    },
    mounted: function(){

    },
    beforeDestroy: function () {
      BusUtils.$off('imsgModuleCenterSetData', this.imsgModuleCenterSetData);
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
    height: calc(100% - 40px);
    background: url("/static/walle/map.jpg") no-repeat center;
    background-size: cover;
  }
  .moduleCenter div{
    position: absolute;
    top: 50px;
    left: 200px;
    color: #ffffff;
  }
</style>
