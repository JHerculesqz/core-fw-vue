<template>
  <div style="width: 100%; height: 100%;">
    <div style="width: 100%;height:30px">
      <topo-toolbar></topo-toolbar>
    </div>
    <div style="width:100%;height:calc(100% - 30px);position: relative;">
      <topo-left-area ref="ref4LeftArea"
                      v-on:onTreeNodeClick="onTreeNodeClick"></topo-left-area>
      <div>
        <topo-center-area></topo-center-area>
      </div>
      <topo-right-area></topo-right-area>
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
    name: "MainTopo",
    data: function () {
      return {

      }
    },
    methods: {
      setData4LeftArea: function(oData4LeftArea){
        this.$refs.ref4LeftArea.setData4LeftArea(oData4LeftArea);
      },
      onTreeNodeClick: function(oTreeNode){
        this.$emit("onTreeNodeClick", oTreeNode);
      }
    }
  }

</script>

<style>

</style>
