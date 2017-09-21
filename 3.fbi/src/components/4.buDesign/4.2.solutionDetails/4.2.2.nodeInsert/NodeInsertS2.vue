<template>
  <div class="phyWrapper">
    <topo-panel ref="ref4MainTopo4S2"
                :showLeftArea="false"
                :showRightArea="false"
                v-bind:items="items"
                id4Topo="MainTopo4S2"
                theme="dark"></topo-panel>
    <marvel-bottom-ext-panel
      theme="dark"
      height="400"
      show="true"
      canDrag="false">
      <div slot="content" style="height: 100%">
        33333
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";
  export default {
    components: {
      MarvelBottomExtPanel,
      TopoPanel

    },
    name: 'NodeInsertS2',
    props: ["solutionName"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region toolbar
        items: [{
          id: 0,
          label: '环插设备',
          icon: 'icon-marvelIcon-30'
        },{
          id: 1,
          label: '批量环插设备',
          icon: 'icon-marvelIcon-31'
        }]
        //#endregion
      }
    },
    mounted: function () {
      this._getPhyTopo();
    },
    methods: {
      //#region inner
      _getPhyTopo: function () {
        var self = this;
        if (this.debug) {
          this._getTopoDataMock(function (oTopoData) {
            self.$refs.ref4MainTopo4S2.initTopo(function () {
              self.$refs.ref4MainTopo4S2.drawTopo(oTopoData);
            });
          });
        }
        else {
          //TODO:
        }
      },
      _getTopoDataMock: function (oAfterCallBack) {
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
        //#region node

        var arrNode = [];
        var oNode1 = {
          id: "VLD_Optix3500-1",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "VLD_Optix3500-1",
          uiNode: true
        };
        arrNode.push(oNode1);
        var oNode2 = {
          id: "VLD_Optix3500-2",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "VLD_Optix3500-2",
          uiNode: true
        };
        arrNode.push(oNode2);
        oTopoData.nodes = arrNode;

        //#endregion

        //#region link
        var arrLink = [];
        var oLink = {
          id: "link1",
          srcNodeId: "VLD_Optix3500-1",
          dstNodeId: "VLD_Optix3500-2",
          uiLabelL: "VLD_Optix3500-1",
          uiLabelM: "link1",
          uiLabelR: "VLD_Optix3500-2",
          uiLink: true,
          uiLinkColorKey: "linkType1",
          uiLinkWidth: 3,
        };
        arrLink.push(oLink);
        oTopoData.links = arrLink;
        //#endregion

        oAfterCallBack(oTopoData);
      },
      //#endregion
      //#region callback

      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>
  .phyWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #272743;
  }
</style>
