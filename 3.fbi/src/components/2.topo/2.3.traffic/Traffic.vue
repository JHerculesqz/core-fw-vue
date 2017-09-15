<template>
  <div class="trafficWrapper">
    <div class="topoArea">
      <topo-panel ref="ref4MainTopo4Traffic"
                  v-on:onTreeNodeClick="onTreeNodeClick"
                  v-bind:items="items"
                  id4Topo="trafficTopo"
                  theme="dark"></topo-panel>
    </div>
    <marvel-bottom-ext-panel
      theme="dark"
      height="400"
      show="true"
      canDrag="false">
      <div slot="content" style="height: 100%">
        <traffic-bottom v-on:onClickFullPathRow="onClickFullPathRow"
                        v-on:onClickRow4Business="onClickRow4Business"
                        v-on:onClickPartPathRow="onClickPartPathRow"
                        v-on:onClickRow4DiscreteCross="onClickRow4DiscreteCross"></traffic-bottom>
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import TrafficBottom from "@/components/2.topo/2.3.traffic/TrafficBottom";
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";

  export default {
    components: {
      MarvelBottomExtPanel,
      TopoPanel,
      TrafficBottom
    },
    name: "Traffic",
    data: function () {
      return {
        //#region const
        debug: true,
        //endregion
        //#region toolbar
        items: [{
          id: 0,
          label: '路径搜索',
          icon: 'icon-target'
        }, {
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
          label: '布局对齐',
          icon: 'icon-target'
        }, {
          id: 6,
          label: '显示设置',
          icon: 'icon-target'
        }, {
          id: 7,
          label: '平移模式',
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
    },
    methods: {
      _getPhyTopo: function () {
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
          this.$refs.ref4MainTopo4Traffic.setData4LeftArea(oData4LeftArea);
          var self = this;
          this._getTopoDataMock(function (oTopoData) {
//            self.$refs.ref4MainTopo4Traffic.initTopo(function () {
//              self.$refs.ref4MainTopo4Traffic.drawTopo(oTopoData);
//            });
          });
        }
        else {
          //TODO:
        }
      },
      _getTopoDataMock: function(oAfterCallBack){
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
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
          this.$refs.ref4MainTopo4Traffic.setData4RightArea(oData4RightArea);
        }
        else {
          //TODO:
        }
      },
      onClickFullPathRow: function (arrRouters) {
        var oTopo = this._generateTopoData4FullRouter(arrRouters);
        this.$refs.ref4MainTopo4Traffic.updateTopo(oTopo);
      },
      _generateTopoData4FullRouter: function (arrRouters) {
        //TODO:
        var oTopo = {};
        return oTopo;
      },
      onClickRow4Business: function (oRow) {
        var oTopo = this._generateTopoData4Business(oRow);
        this.$refs.ref4MainTopo4Traffic.updateTopo(oTopo);
      },
      _generateTopoData4Business: function (oRow) {
        //TODO:
        var oTopo = {};
        return oTopo;
      },
      onClickPartPathRow: function (arrRouters) {
        //TODO:
        var oTopo = this._generateTopoData4PartRouter(arrRouters);
        this.$refs.ref4MainTopo4Traffic.updateTopo(oTopo);
      },
      _generateTopoData4PartRouter: function (arrRouters) {
        var oTopo = {};
        return oTopo;
      },
      onClickRow4DiscreteCross: function (oRow) {
        this.$refs.ref4MainTopo4Traffic.selectNe(oRow.id)
      }
    }
  }
</script>

<style scoped>
  .trafficWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #272743;
  }

  .topoArea {
    width: 100%;
    height: 100%;
  }
</style>
