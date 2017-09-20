<template>
  <div class="main">
    <div class="customTabWrapper">
      <marvel-tab-button ref="ref4Phy" label="STEP1.新建华为网络"
                         v-on:onClick="onClickPhy"></marvel-tab-button>
      <marvel-tab-button ref="ref4InsertDev" label="STEP2.环插设备"
                         v-on:onClick="onClickInsertDev"></marvel-tab-button>
      <marvel-tab-button ref="ref4Traffic" label="STEP3.业务搜索"
                         v-on:onClick="onClickTraffic"></marvel-tab-button>
      <marvel-tab-button ref="ref4ModifyTraffic" label="STEP4.割接业务"
                         v-on:onClick="onClickModifyTraffic"></marvel-tab-button>
    </div>
    <div class="topoArea">
      <div class="topoAreaCont">
        <keep-alive>
          <component v-bind:is="moduleName"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelTxtButton from "@/walle/widget/button/MarvelTxtButton";
  import MarvelTabButton from "@/walle/widget/button/MarvelTabButton";
  import Phy from "@/components/2.topo/2.2.phy/Phy";
  import Traffic from "@/components/2.topo/2.3.traffic/Traffic";
  import SolutionDetailsS2 from "@/components/4.buDesign/4.2.solutionDetails/SolutionDetailsS2";

  export default {
    components: {
      MarvelTabButton,
      MarvelTxtButton,
      Traffic,
      MarvelTabItem,
      MarvelTab,
      Phy,
      SolutionDetailsS2
    },
    name: 'SolutionDetails',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region moduleName
        moduleName: "Phy"
        //#endregion
      }
    },
    mounted: function () {
      this._activeTabBtn(true, false, false, false);
    },
    methods: {
      onClickPhy: function () {
        this._activeTabBtn(true, false, false, false);
        this.moduleName = "Phy";
      },
      onClickInsertDev: function(){
        this._activeTabBtn(false, true, false, false);
        this.moduleName = "SolutionDetailsS2";
      },
      onClickTraffic: function () {
        this._activeTabBtn(false, false, true, false);
        this.moduleName = "Traffic";
      },
      onClickModifyTraffic: function () {
        this._activeTabBtn(false, false, false, true);
        this.moduleName = "SolutionDetailsS4";
      },
      _activeTabBtn : function(bIsActivePhy, bIsActiveInsertDev, bIsActiveTraffic, bIsActiveModifyTraffic){
        this.$refs.ref4Phy.setActive(bIsActivePhy);
        this.$refs.ref4InsertDev.setActive(bIsActiveInsertDev);
        this.$refs.ref4Traffic.setActive(bIsActiveTraffic);
        this.$refs.ref4ModifyTraffic.setActive(bIsActiveModifyTraffic);
      }
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
