<template>
  <div class="topoPanelWrapper">
    <div class="toolbarPanel">
      <topo-toolbar v-bind:toolbarItems="toolbarItems"
                    v-on:onToolbarItemClick="onToolbarItemClick"></topo-toolbar>
    </div>
    <div class="topoPanelContent">
      <topo-center-area ref="ref4TopoCenterArea"
                        v-bind:theme="theme"
                        v-bind:id="id4Topo"></topo-center-area>
      <topo-left-area ref="ref4LeftArea"
                      v-if="showLeftAreaEx"
                      v-on:onTreeNodeClick="onTreeNodeClick"></topo-left-area>
      <topo-right-area ref="ref4RightArea"
                       v-if="showRightAreaEx"></topo-right-area>
    </div>
  </div>
</template>

<script>
  import TopoToolbar from "@/components/0.common/0.2.topo/TopoToolbar";
  import TopoLeftArea from "@/components/0.common/0.2.topo/TopoLeftArea";
  import TopoCenterArea from "@/components/0.common/0.2.topo/TopoCenterArea";
  import TopoRightArea from "@/components/0.common/0.2.topo/TopoRightArea";

  export default {
    components: {
      TopoRightArea,
      TopoCenterArea,
      TopoLeftArea,
      TopoToolbar
    },
    name: "TopoPanel",
    props: ["theme", "toolbarItems", "id4Topo", "showLeftArea", "showRightArea"],
    data: function () {
      return {}
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback
      onTreeNodeClick: function (oTreeNode) {
        this.$emit("onTreeNodeClick", oTreeNode);
      },
      onToolbarItemClick: function(oToolbarItem){
        this.$emit("onToolbarItemClick", oToolbarItem);
      },
      //#endregion
      //#region 3rd
      setData4LeftArea: function (oData4LeftArea) {
        this.$refs.ref4LeftArea.setData4LeftArea(oData4LeftArea);
      },
      setData4RightArea: function (oData4RightArea) {
        this.$refs.ref4RightArea.setData4RightArea(oData4RightArea);
      },
      selectNe: function (strNeId) {
        this.$refs.ref4TopoCenterArea.unSelectAll();
        this.$refs.ref4TopoCenterArea.selectNodesById([strNeId]);
      },
      selectLink: function (strLinkId) {
        this.$refs.ref4TopoCenterArea.unSelectAll();
        this.$refs.ref4TopoCenterArea.selectLinksById([strLinkId]);
      },
      initTopo: function (oAfterCallBack) {
        this.$refs.ref4TopoCenterArea.init(oAfterCallBack);
      },
      drawTopo: function (oTopoData) {
        this.$refs.ref4TopoCenterArea.draw(oTopoData);
      },
      updateTopo: function (oTopo) {
        alert("updateTopo");
      },
      //#endregion
    },
    computed: {
      showLeftAreaEx: function(){
          if(this.showLeftArea === false){
              return false;
          }
          else{
              return true;
          }
      },
      showRightAreaEx: function(){
        if(this.showRightArea === false){
          return false;
        }
        else{
          return true;
        }
      },
    }
  }
</script>

<style scoped>
  .topoPanelWrapper {
    width: 100%;
    height: 100%;
  }

  .toolbarPanel {
    width: 100%;
    height: 30px;
  }

  .topoPanelContent {
    width: 100%;
    height: calc(100% - 30px);
    position: relative;
  }
</style>
