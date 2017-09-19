<template>
  <div style="height: 100%;">
    <div class="customTabWrapper">
      <marvel-tab-button ref="ref4Phy" label="拓扑还原"
                         v-on:onClick="onClickPhy"></marvel-tab-button>
      <marvel-tab-button ref="ref4Traffic" label="业务还原"
                         v-on:onClick="onClickTraffic"></marvel-tab-button>
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
  import Phy from "@/components/2.topo/2.2.phy/Phy";
  import Traffic from "@/components/2.topo/2.3.traffic/Traffic";
  import MarvelTxtButton from "@/walle/widget/button/MarvelTxtButton";
  import MarvelTabButton from "@/walle/widget/button/MarvelTabButton";

  export default {
    components: {
      MarvelTabButton,
      MarvelTxtButton,
      Traffic,
      MarvelTabItem,
      MarvelTab,
      Phy
    },
    name: 'Topo',
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
    mounted: function(){
      this._activeTabBtn(true);
    },
    methods: {
      onClickPhy: function () {
        this._activeTabBtn(true);
        this.moduleName = "Phy";
      },
      onClickTraffic: function () {
        this._activeTabBtn(false);
        this.moduleName = "Traffic";
      },
      _activeTabBtn : function(bIsActivePhy){
        this.$refs.ref4Phy.setActive(bIsActivePhy);
        this.$refs.ref4Traffic.setActive(!bIsActivePhy);
      }
    }
  }
</script>

<style scoped>
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
