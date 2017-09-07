<template>
  <div class="moduleRight" v-bind:class="{ dpn: isHide }">
    <div class="closeBtn" v-on:click="clickClose"></div>
    <div>moduleRight(展示指标项详情)</div>
    <component v-bind:is="rightModuleName"></component>
  </div>
</template>

<script>
  import BusUtils from '@/walle/core/bus';
  import ModuleRight1 from '@/components/page3/vue_bus/ModuleRight1';
  import ModuleRight2 from '@/components/page3/vue_bus/ModuleRight2';

  export default {
    name: 'moduleRight',
    components: {ModuleRight1, ModuleRight2},
    data: function() {
      return {
        isHide: true,
        rightModuleName: "ModuleRight1"
      }
    },
    created: function () {
      BusUtils.$on('imsgModuleRightShow', this.imsgModuleRightShow);
      BusUtils.$on('imsgModuleRightUpdate', this.imsgModuleRightUpdate);
    },
    beforeDestroy: function () {
      BusUtils.$off('imsgModuleRightShow', this.imsgModuleRightShow);
      BusUtils.$off('imsgModuleRightUpdate', this.imsgModuleRightUpdate);
    },
    methods:{
      imsgModuleRightShow: function(){
        this.isHide = !this.isHide;
      },
      imsgModuleRightUpdate: function(strRightModuleName){
        this.rightModuleName = strRightModuleName;
      },
      clickClose:function(){
        this.isHide = !this.isHide;
      }
    }
  }
</script>

<style>
  .moduleRight {
    position: absolute;
    height: 100%;
    width: 500px;
    right: 0;
    top: 0px;
    background-color: #1b1e25;
    color: #ffffff;
  }
  .moduleRight .closeBtn{
    width: 23px;
    height: 50px;
    background-color: #181b21;
    position: absolute;
    top: 50%;
    margin-top: -25px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 100%;
    cursor:pointer;
  }
  .dpn{
    display: none;
  }
</style>
