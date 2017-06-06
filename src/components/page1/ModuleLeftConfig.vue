<template>
  <div class="moduleLeftConfig" v-bind:class="{ dpn: isHide }">
    <div>moduleLeftConfig(展示指标配置)</div>

    <marvel-check-tree v-on:onGetTreeData="onGetTreeData"></marvel-check-tree>

    <button v-on:click="clickSave">保存</button>
    <button v-on:click="clickClose">关闭</button>
  </div>
</template>

<script>
  import Bus from '@/walle/core/bus.js';
  import MarvelCheckTree from "@/walle/widget/tree/MarvelCheckTree";

  export default {
    components: {MarvelCheckTree},
    name: 'moduleLeftConfig',
    data: function() {
      return {
        isHide: true
      }
    },
    created: function () {
        Bus.$on('imsgModuleLeftConfigShow', this.imsgModuleLeftConfigShow);
    },
    beforeDestroy: function () {
        Bus.$off('imsgModuleLeftConfigShow', this.imsgModuleLeftConfigShow);
    },
    methods:{
      imsgModuleLeftConfigShow: function(arrModuleLeftData){
        //1.isHide
        this.isHide = !this.isHide;

        if(!this.isHide){
          //2.imsg
          Bus.$emit("imsgMarvelCheckTreeSetData", arrModuleLeftData);
        }
      },
      clickSave: function(){
        //1.get arrTreeNodes
        Bus.$emit("imsgMarvelCheckTreeGetData");
      },
      onGetTreeData: function(arrTreeNodes){
        //1.post
        var arrModuleLeftData = arrTreeNodes;
        localStorage.ModuleLeftData = JSON.stringify(arrModuleLeftData);

        //2.imsg
        Bus.$emit("imsgModuleLeftDataUpdate", arrModuleLeftData);
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
