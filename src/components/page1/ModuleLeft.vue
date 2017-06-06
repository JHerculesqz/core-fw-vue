<template>
  <div class="moduleLeft" v-bind:class="{ dpn: isHide }">
    <div>moduleLeft(展示指标项)</div>
    <button v-on:click="clickModuleLeftConfigShow">配置</button>
    <marvel-tree v-on:clickNode="clickNode" v-on:onGetTreeData="onGetTreeData"></marvel-tree>
  </div>
</template>

<script>
  import Bus from "@/walle/core/bus.js";
  import MarvelTree from "@/walle/widget/tree/MarvelTree";

  export default {
    name: 'moduleLeft',
    components: { MarvelTree },
    data: function(){
      return {
        isHide: true
      }
    },
    created: function () {
      //region Mock
      localStorage.ModuleLeftData = JSON.stringify([{
        id: 1,
        label: "指标1",
        show: true,
        tag: "moduleRight2"
      }, {
        id: 2,
        label: "指标2",
        show: true,
        tag: "moduleRight1"
      }, {
        id: 3,
        label: "指标3",
        show: true,
        tag: "moduleRight1"
      }]);
      //endregion

      Bus.$on('imsgModuleLeftShow', this.imsgModuleLeftShow);
      Bus.$on('imsgModuleLeftDataUpdate', this.imsgModuleLeftDataUpdate);
    },
    beforeDestroy: function () {
      Bus.$off('imsgModuleLeftShow', this.imsgModuleLeftShow);
      Bus.$off('imsgModuleLeftDataUpdate', this.imsgModuleLeftDataUpdate);
    },
    methods:{
      imsgModuleLeftShow: function(){
        //1.isHide
        this.isHide = !this.isHide;

        if(!this.isHide){
          //2.post
          var arrModuleLeftData = JSON.parse(localStorage.ModuleLeftData);

          //3.imsg
          Bus.$emit('imsgMarvelTreeSetData', arrModuleLeftData);
        }
      },
      imsgModuleLeftDataUpdate: function(arrModuleLeftData){
        //1.imsg
        Bus.$emit('imsgMarvelTreeSetData', arrModuleLeftData);
      },
      clickModuleLeftConfigShow: function(){
        //1.imsg
        Bus.$emit("imsgMarvelTreeGetData");
      },
      onGetTreeData: function(arrTreeNodes){
        //1.imsg
        var arrModuleLeftData = arrTreeNodes;
        Bus.$emit("imsgModuleLeftConfigShow", arrModuleLeftData);
      },
      clickNode: function(oTreeNode){
        //1.imsg
        Bus.$emit("imsgModuleRightUpdate", oTreeNode.tag);
        Bus.$emit("imsgModuleCenterSetData", oTreeNode.label);
      }
    }
  }
</script>

<style>
  .moduleLeft {
    position: absolute;
    height: 100%;
    width: 200px;
    left: 0;
    top: 30px;
    background-color: #e8e8e8
  }
  .dpn{
    display: none;
  }
</style>
