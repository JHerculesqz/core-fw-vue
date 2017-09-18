<template>
  <div class="phyWrapper">
    <topo-panel ref="ref4MainTopo4Phy"
                v-on:onTreeNodeClick="onTreeNodeClick"
                v-bind:items="items"
                id4Topo="phyTopo"
                theme="dark"></topo-panel>
    <marvel-bottom-ext-panel
      theme="dark"
      height="300"
      show="true"
      canDrag="false">
      <div slot="content" style="height: 100%">
        <phy-grid-panel ref="ref4PhyGridPanel"
                        v-on:onClickRow4Ne="onClickRow4Ne"
                        v-on:onClickRow4Fiber="onClickRow4Fiber"></phy-grid-panel>
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import TopoPanel from '@/components/0.common/0.2.topo/TopoPanel';
  import PhyGridPanel from "@/components/0.common/0.1.resourcePanel/PhyGridPanel";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";

  export default {
    components: {
      TopoPanel,
      PhyGridPanel,
      MarvelBottomExtPanel,
    },
    name: "Phy",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region toolbar
        items: [{
          id: 1,
          label: '拓扑还原',
          icon: 'icon-target'
        }, {
          id: 2,
          label: '保存',
          icon: 'icon-floppy-disk'
        }, {
          id: 3,
          label: '重置',
          icon: 'icon-target'
        }, {
          id: 4,
          label: '导出',
          icon: 'icon-download'
        }, {
          id: 5,
          label: '布局',
          icon: 'icon-target'
        }, {
          id: 6,
          label: '设置',
          icon: 'icon-target'
        }, {
          id: 7,
          label: '平移',
          icon: 'icon-target'
        }, {
          id: 8,
          label: '最佳视图',
          icon: 'icon-target'
        }, {
          id: 9,
          label: '过滤',
          icon: 'icon-target'
        }, {
          id: 10,
          label: '全屏',
          icon: 'icon-target'
        }, {
          id: 11,
          label: '显示流量',
          icon: 'icon-target'
        }, {
          id: 12,
          label: '创建光纤',
          icon: 'icon-target'
        }, {
          id: 13,
          label: '返回上层',
          icon: 'icon-cloud-upload'
        }]
        //#endregion
      };
    },
    mounted: function () {
      this._getPhyTopo();
      this.$refs.ref4PhyGridPanel.init();
      console.log("Phy mounted");
    },
    methods: {
      _getPhyTopo: function () {
        var self = this;
        if (this.debug) {
          var oData4LeftArea = {
            id: "root",
            name: 'root',
            icon: "icon-address-book",
            children: [{
              id: 'CDMXDFCTHM1',
              name: 'CDMXDFCTHM1',
              icon: "icon-address-book"
            }, {
              id: 'CDMXDFCTHM2',
              name: 'CDMXDFCTHM2',
              icon: "icon-address-book"
            }, {
              id: 'CDMXDFCTHM3',
              name: 'CDMXDFCTHM3',
              icon: "icon-address-book"
            }]
          };
          this.$refs.ref4MainTopo4Phy.setData4LeftArea(oData4LeftArea);
          this._getTopoDataMock(function (oTopoData) {
            self.$refs.ref4MainTopo4Phy.initTopo(function () {
              self.$refs.ref4MainTopo4Phy.drawTopo(oTopoData);
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

        //#region 光站点
        var arrNodeGroup = [];
        for (var i = 0; i < 2; i++) {
          var iX = Math.random() * 400;
          var iY = Math.random() * 200;
          var oNodeGroup = {
            id: "nodeGroup" + i,
            x: iX,
            y: iY,
            uiImgKey: "nodeGroup",
            uiImgKey4Expand: "nodeGroupExpand",
            uiLabel: "nodeGroup" + i,
            uiExpandNode: false,
            uiExpandNodeWidth: 200,
            uiExpandNodeHeight: 200,
            uiNode: true,
            children: [{
              id: "node" + i + "_1",
              x: 50,
              y: 50,
              uiImgKey: "node",
              uiLabel: "node" + i + "_1",
              uiNode: true
            }, {
              id: "node" + i + "_2",
              x: 100,
              y: 100,
              uiImgKey: "node",
              uiLabel: "node" + i + "_2",
              uiNode: true
            }]
          };
          arrNodeGroup.push(oNodeGroup);
        }
        oTopoData.nodeGroups = arrNodeGroup;
        //#endregion

        //#region 网元
        var arrNode = [];
        for (var i = 0; i < 2; i++) {
          var iX = Math.random() * 400;
          var iY = Math.random() * 200;
          var oNode = {
            id: "node" + i,
            x: iX,
            y: iY,
            uiImgKey: "node",
            uiLabel: "node" + i,
            uiNode: true
          };
          arrNode.push(oNode);
        }
        for (var i = 0; i < 3; i++) {
          var iX = Math.random() * 400;
          var iY = Math.random() * 200;
          var oNode = {
            id: "nodeBase" + i,
            x: iX,
            y: iY,
            uiImgKey: "node",
            uiLabel: "nodeBase" + i,
            uiNode: true
          };
          arrNode.push(oNode);
        }
        oTopoData.nodes = arrNode;
        //#endregion

        //#endregion

        //#region link
        var arrLink = [];
        //#region 网元与网元之间的单条链路
        for (var i = 0; i < 3; i++) {
          var oLink = {
            id: "link" + i,
            srcNodeId: "nodeBase0",
            dstNodeId: "nodeBase1",
            uiLabelL: "nodeBase0",
            uiLabelM: "link" + i,
            uiLabelR: "nodeBase1",
            uiLink: true,
            uiLinkColorKey: "linkType1",
            uiLinkWidth: 3,
            uiDash: [10, 5]
          };
          arrLink.push(oLink);
        }
        //#endregion

        //#region 网元与网元之间的捆绑链路
        for (var i = 0; i < 2; i++) {
          //oLink1和oLink2为一组
          var oLink1 = {
            id: "gLink" + i + "_" + i,
            srcNodeId: "nodeBase" + i,
            dstNodeId: "nodeBase" + (i + 1),
            uiLinkGroupId: "groupLink" + i + "_" + i,
            uiLink: true,
            uiLinkExpand: false,
            uiLabelL: "nodeBase" + i,
            uiLabelM: "link" + i,
            uiLabelR: "nodeBase" + (i + 1),
            uiLinkColorKey: "linkType2",
            uiLinkWidth: 3
          };
          var oLink2 = {
            id: "gLink" + i + "_" + (i + 1),
            srcNodeId: "nodeBase" + i,
            dstNodeId: "nodeBase" + (i + 1),
            uiLinkGroupId: "groupLink" + i + "_" + i,
            uiLink: true,
            uiLinkExpand: false,
            uiLabelL: "nodeBase" + i,
            uiLabelM: "link" + i,
            uiLabelR: "nodeBase" + (i + 1),
            uiLinkColorKey: "linkType2",
            uiLinkWidth: 3
          };
          //oLink3和oLink4为一组
          var oLink3 = {
            id: "gLink" + i + "_" + (i + 2),
            srcNodeId: "nodeBase" + i,
            dstNodeId: "nodeBase" + (i + 1),
            uiLinkGroupId: "groupLink" + i + "_" + (i + 1),
            uiLink: true,
            uiLinkExpand: false,
            uiLabelL: "nodeBase" + i,
            uiLabelM: "link" + i,
            uiLabelR: "nodeBase" + (i + 1),
            uiLinkColorKey: "linkType3",
            uiLinkWidth: 3
          };

          var oLink4 = {
            id: "gLink" + i + "_" + (i + 3),
            srcNodeId: "nodeBase" + i,
            dstNodeId: "nodeBase" + (i + 1),
            uiLinkGroupId: "groupLink" + i + "_" + (i + 1),
            uiLink: true,
            uiLinkExpand: false,
            uiLabelL: "nodeBase" + i,
            uiLabelM: "link" + i,
            uiLabelR: "nodeBase" + (i + 1),
            uiLinkColorKey: "linkType3",
            uiLinkWidth: 3
          };

          arrLink.push(oLink1);
          arrLink.push(oLink2);
          arrLink.push(oLink3);
          arrLink.push(oLink4);
        }
        //#endregion

        //#region 网元与光设备之间的捆绑链路
        for (var i = 100; i < 101; i++) {
          var oLink1 = {
            id: "gLink" + i + 0,
            srcNodeId: "nodeBase2",
            dstNodeId: "node1_1",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 0,
            uiLinkColorKey: "linkType2",
            uiLinkWidth: 3
          };
          var oLink2 = {
            id: "gLink" + i + 1,
            srcNodeId: "nodeBase2",
            dstNodeId: "node1_1",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 0,
            uiLinkColorKey: "linkType2",
            uiLinkWidth: 3
          };
          var oLink3 = {
            id: "gLink" + i + 2,
            srcNodeId: "nodeBase2",
            dstNodeId: "node1_2",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 1,
            uiLinkColorKey: "linkType3",
            uiLinkWidth: 3
          };
          var oLink4 = {
            id: "gLink" + i + 3,
            srcNodeId: "nodeBase2",
            dstNodeId: "node1_2",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 1,
            uiLinkColorKey: "linkType3",
            uiLinkWidth: 3
          };
          arrLink.push(oLink1);
          arrLink.push(oLink2);
          arrLink.push(oLink3);
          arrLink.push(oLink4);
        }
        //#endregion

        //#region 光设备与光设备之间的捆绑链路
        for (var i = 200; i < 201; i++) {
          var oLink1 = {
            id: "gLink" + i + 0,
            srcNodeId: "node0_1",
            dstNodeId: "node1_1",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 0,
            uiLinkColorKey: "linkType2",
            uiLinkWidth: 3
          };
          var oLink2 = {
            id: "gLink" + i + 1,
            srcNodeId: "node0_1",
            dstNodeId: "node1_1",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 0,
            uiLinkColorKey: "linkType2",
            uiLinkWidth: 3
          };
          var oLink3 = {
            id: "gLink" + i + 2,
            srcNodeId: "node0_2",
            dstNodeId: "node1_2",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 1,
            uiLinkColorKey: "linkType3",
            uiLinkWidth: 3
          };
          var oLink4 = {
            id: "gLink" + i + 3,
            srcNodeId: "node0_2",
            dstNodeId: "node1_2",
            uiLabelL: "nodeBase0",
            uiLabelM: "gLink" + i,
            uiLabelR: "nodeBase1",
            uiLinkExpand: false,
            uiLink: true,
            uiLinkGroupId: "groupLink" + i + 1,
            uiLinkColorKey: "linkType3",
            uiLinkWidth: 3
          };
          arrLink.push(oLink1);
          arrLink.push(oLink2);
          arrLink.push(oLink3);
          arrLink.push(oLink4);
        }
        //#endregion
        oTopoData.links = arrLink;
        //#endregion

        oAfterCallBack(oTopoData);
      },
      onTreeNodeClick: function (oTreeNode) {
        this._getDevPropsByDevId(oTreeNode.id);
      },
      _getDevPropsByDevId: function (strDevId) {
        if (this.debug) {
          var oData4RightArea = [];
          for (var i = 0; i < 100; i++) {
            var oRow = [];
            for (var j = 0; j < 2; j++) {
              var oCell = {
                value: "value" + i,
                type: "text"
              };
              oRow.push(oCell);
            }
            oData4RightArea.push(oRow);
          }
          this.$refs.ref4MainTopo4Phy.setData4RightArea(oData4RightArea);
        }
        else {
          //TODO:
        }
      },
      _getLinkPropsByLinkId: function (strLinkId) {
        if (this.debug) {
          var oData4RightArea = [];
          for (var i = 0; i < 100; i++) {
            var oRow = [];
            for (var j = 0; j < 2; j++) {
              var oCell = {
                value: "value" + i,
                type: "text"
              };
              oRow.push(oCell);
            }
            oData4RightArea.push(oRow);
          }
          this.$refs.ref4MainTopo4Phy.setData4RightArea(oData4RightArea);
        }
        else {
          //TODO:
        }
      },
      onClickRow4Ne: function (oRow) {
        this._getDevPropsByDevId(oRow.id);
        this.$refs.ref4MainTopo4Phy.selectNe(oRow.id);
      },
      onClickRow4Fiber: function (oRow) {
        this._getLinkPropsByLinkId(oRow.id);
        this.$refs.ref4MainTopo4Phy.selectLink(oRow.id);
      }
    }
  }
</script>

<style>
  .phyWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #272743;
  }
</style>
