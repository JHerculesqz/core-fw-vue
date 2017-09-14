<template>
  <div class="phyWrapper">
    <main-topo ref="ref4MainTopo4Phy"
               v-on:onTreeNodeClick="onTreeNodeClick"></main-topo>
    <marvel-bottom-ext-panel
      theme="dark"
      height="300"
      :show="showBottomPanel"
      canDrag="false">
      <div slot="content" style="height: 100%">
        <import-ex-result></import-ex-result>
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import MainTopo from '@/components/0.common/0.2.topo/MainTopo';
  import ImportExResult from "@/components/0.common/0.1.resourcePanel/ImportExResult";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";
  export default {
    components: {
      MarvelBottomExtPanel,
      MainTopo,
      ImportExResult
    },
    name: "Phy",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region bottomPanel
        showBottomPanel: true,
        //#endregion
      };
    },
    mounted: function(){
      this._getPhyTopo();
    },
    methods: {
      onTreeNodeClick: function(oTreeNode){
        alert(oTreeNode.name);
      },
      _getPhyTopo : function(){
        if(this.debug){
          var oData4LeftArea = {
            name: 'root',
            icon: "icon-address-book",
            children: [{
              name: 'CDMXDFCTHM1',
              icon: "icon-address-book"
            }, {
              name: 'CDMXDFCTHM2',
              icon: "icon-address-book"
            }, {
              name: 'CDMXDFCTHM3',
              icon: "icon-address-book"
            }]
          };
          this.$refs.ref4MainTopo4Phy.setData4LeftArea(oData4LeftArea);
        }
        else{
          //TODO:
        }
      }
    }
  }
</script>

<style>
.phyWrapper{
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #272743;
}
</style>
