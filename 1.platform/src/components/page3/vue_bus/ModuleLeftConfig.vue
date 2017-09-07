<template>
  <div class="moduleLeftConfig" v-bind:class="{ dpn: isHide }">
    <div>moduleLeftConfig(展示指标配置)</div>

    <marvel-check-tree v-on:onGetTreeData="onGetTreeData"></marvel-check-tree>

    <button v-on:click="clickSave">保存</button>
    <button v-on:click="clickClose">关闭</button>
  </div>
</template>

<script>
  import BusUtils from '@/walle/core/bus';
  import MarvelCheckTree from "@/walle/widget/tree/MarvelCheckTree";

  export default {
    name: 'moduleLeftConfig',
    components: {MarvelCheckTree},
    data: function() {
      return {
        isHide: true
      }
    },
    created: function () {
        BusUtils.$on('imsgModuleLeftConfigShow', this.imsgModuleLeftConfigShow);
    },
    beforeDestroy: function () {
        BusUtils.$off('imsgModuleLeftConfigShow', this.imsgModuleLeftConfigShow);
    },
    methods:{
      imsgModuleLeftConfigShow: function(arrModuleLeftData){
        //1.isHide
        this.isHide = !this.isHide;

        if(!this.isHide){
          //2.imsg
          BusUtils.$emit("imsgMarvelCheckTreeSetData", arrModuleLeftData);
        }
      },
      clickSave: function(){
        //1.get arrTreeNodes
        BusUtils.$emit("imsgMarvelCheckTreeGetData");
      },
      onGetTreeData: function(arrTreeNodes){
        //1.post
        var arrModuleLeftData = arrTreeNodes;
        localStorage.ModuleLeftData = JSON.stringify(arrModuleLeftData);

        //2.imsg
        BusUtils.$emit("imsgModuleLeftDataUpdate", arrModuleLeftData);
      },
      clickClose: function(){
        //1.isHide
        this.isHide = true;
      }
    }
  }
</script>

<style>
  .moduleLeftConfig {
    position: fixed;
    left: 400px;
    top: 200px;
    background-color: blue;
  }
  .dpn{
    display: none;
  }
</style>
