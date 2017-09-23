<template>
  <div class="main">
    <div class="customTabWrapper">
      <marvel-tab-button ref="refNodeInsertS1" label="STEP1.新建华为网络"
                         v-on:onClick="onClickPhy"></marvel-tab-button>
      <marvel-tab-button ref="refNodeInsertS2" label="STEP2.环插设备"
                         v-on:onClick="onClickInsertDev"></marvel-tab-button>
      <marvel-tab-button ref="refNodeInsertS3" label="STEP3.业务搜索"
                         v-on:onClick="onClickTraffic"></marvel-tab-button>
      <marvel-tab-button ref="refNodeInsertS4" label="STEP4.割接业务"
                         v-on:onClick="onClickModifyTraffic"></marvel-tab-button>
    </div>
    <div class="topoArea">
      <div class="topoAreaCont">
        <keep-alive>
          <component v-bind:is="moduleName"
                     solutionName="solutionName"
                     v-on:onClickS2Next="onClickS2Next"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelTxtButton from "@/walle/widget/button/MarvelTxtButton";
  import MarvelTabButton from "@/walle/widget/button/MarvelTabButton";
  import NodeInsertS1 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS1";
  import NodeInsertS2 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS2";
  import NodeInsertS3 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS3";
  import NodeInsertS4 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS4";

  export default {
    components: {
      MarvelRouter,
      MarvelTabButton,
      MarvelTxtButton,
      MarvelTabItem,
      MarvelTab,
      NodeInsertS1,
      NodeInsertS2,
      NodeInsertS3,
      NodeInsertS4
    },
    name: 'SolutionDetails',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region params
        solutionName: "",
        //#endregion
        //#region moduleName
        moduleName: "NodeInsertS1"
        //#endregion
      }
    },
    mounted: function () {
      //1.get solutionName
      this.solutionName = MarvelRouter.getParam(this.$route, "name");
      //2.
      this._activeTabBtn(true, false, false, false);
    },
    methods: {
      //#region inner
      onClickPhy: function () {
        this._activeTabBtn(true, false, false, false);
        this.moduleName = "NodeInsertS1";
      },
      onClickInsertDev: function(){
        this._activeTabBtn(false, true, false, false);
        this.moduleName = "NodeInsertS2";
      },
      onClickTraffic: function () {
        this._activeTabBtn(false, false, true, false);
        this.moduleName = "NodeInsertS3";
      },
      onClickModifyTraffic: function () {
        this._activeTabBtn(false, false, false, true);
        this.moduleName = "NodeInsertS4";
      },
      _activeTabBtn : function(bIsActivePhy, bIsActiveInsertDev, bIsActiveTraffic, bIsActiveModifyTraffic){
        this.$refs.refNodeInsertS1.setActive(bIsActivePhy);
        this.$refs.refNodeInsertS2.setActive(bIsActiveInsertDev);
        this.$refs.refNodeInsertS3.setActive(bIsActiveTraffic);
        this.$refs.refNodeInsertS4.setActive(bIsActiveModifyTraffic);
      },
      //#endregion
      //#region callback
      onClickS2Next: function(){
        this._activeTabBtn(false, false, true, false);
        this.moduleName = "NodeInsertS3";
      }
      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>
  .main{
    height: 100%;
  }
  .customTabWrapper {
    height: 32px;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
  }
  .topoArea {
    height: calc(100% - 32px);
    padding: 10px;
    box-sizing: border-box;
  }
  .topoAreaCont{
    height: 100%;
    box-shadow: 1px 2px 6px rgba(0,0,0,0.25);
  }
</style>
