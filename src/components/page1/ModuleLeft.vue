<template>
  <div class="moduleLeft">
    <div class="expand" v-bind:class="{ dpn: isHide }">
      <div class="moduleLeftCont">
        <div class="accordionLevel1">
          <div class="accordionText">moduleLeft(展示指标项)</div>
          <div class="button accordionBtn" v-on:click="clickModuleLeftConfigShow">配置</div>
        </div>
        <div class="accordionLevel2s">
          <marvel-tree v-on:clickNode="clickNode" v-on:onGetTreeData="onGetTreeData"></marvel-tree>
        </div>
      </div>
      <div class="closeBtn" v-on:click="clickModuleLeftHide">《</div>
    </div>
    <div class="folder" v-bind:class={dpn:!isHide} v-on:click="clickModuleLeftShow">三</div>
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
      imsgModuleLeftDataUpdate: function(arrModuleLeftData){
        //1.imsg
        Bus.$emit('imsgMarvelTreeSetData', arrModuleLeftData);
      },
      clickModuleLeftShow: function(){
        //1.isHide
        this.isHide = !this.isHide;

        if(!this.isHide){
          //2.post
          var arrModuleLeftData = JSON.parse(localStorage.ModuleLeftData);

          //3.imsg
          Bus.$emit('imsgMarvelTreeSetData', arrModuleLeftData);
        }
      },
      clickModuleLeftHide: function(){
        //1.isHide
        this.isHide = !this.isHide;
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
  .dpn{
    display:none;
  }
  .moduleLeft {
    position: absolute;
    left: 0;
    top: 80px;
    box-shadow: 0 5px 10px #333;
    background-color: #2c3b41;
  }
  .moduleLeft .expand{
    width: 280px;
  }
  .moduleLeft .folder{
    width: 40px;
    height: 40px;
    background-color: rgba(30,32,33,0.8);
    color: #ffffff;
    font-size: 22px;
    text-align: center;
    line-height: 40px;
    cursor:pointer;
  }
  .moduleLeft .expand .closeBtn{
    position: absolute;
    width: 14px;
    height: 14px;
    color: #ffffff;
    font-size: 14px;
    line-height: 14px;
    top: 12px;
    right: 20px;
    float:left;
    cursor:pointer;
  }
  .moduleLeft .expand .button{
    background-color:#32bbff;
    padding:0 20px;
    border-radius:6px;
    height:28px;
    color:#fff;
    line-height:28px;
    font-size:14px;

  }
  .moduleLeft .expand .accordionBtn{
    float:left;
    margin-top:-5px;
    margin-left:10px;
  }

  .moduleLeftCont .accordionLevel1{
    padding-left: 12px;
    padding-top: 9px;
    height: 39px;
    background-color: #334350;
    border-bottom: 1px solid #353434;
  }
  .moduleLeftCont .accordionLevel2s{
    padding-left: 26px;
  }
  .moduleLeftCont .accordionText{
    height: 20px;
    float: left;
    line-height: 20px;
    color: #ffffff;
    font-size: 14px;
  }
  .moduleLeftCont .expandFolderIcon{
    float: right;
    margin-right: 20px;
    color: #ffffff;
    height: 20px;
    line-height: 20px;
    cursor:pointer;
  }
</style>
