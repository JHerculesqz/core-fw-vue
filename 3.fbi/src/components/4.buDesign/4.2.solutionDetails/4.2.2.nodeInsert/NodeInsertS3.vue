<template>
  <node-insert-s3-topo ref="ref4ConfirmPathTopo" id4Topo="nodeInsertS3Topo"
                       :showLeftArea="showLeftArea" :showRightArea="showRightArea"
                       v-bind:toolbarItems="toolbarItems"
                       v-on:onToolbarItemClick="onToolbarItemClick"
                       v-on:onClickConfirmPathRow="onClickConfirmPathRow"></node-insert-s3-topo>
</template>

<script>
  import NodeInsertS3Topo from "@/components/0.common/0.5.nodeInsertS3Topo/NodeInsertS3Topo";

  export default {
    components: {
      NodeInsertS3Topo,
    },
    name: "NodeInsertS3",
    data: function () {
      return {
        //#region const
        debug: true,
        //endregion
        //#region topo
        toolbarItems: [],
        showLeftArea: false,
        showRightArea: false,
        //#endregion
        //#region traffic

        //#endregion
      };
    },
    mounted: function () {
      //1. _getData4Topo
      this._getData4Topo();
      //2._getConfirmPathData
      this._getConfirmPathData();
    },
    methods: {
      //#region inner
      //#region topo
      onToolbarItemClick: function (oToolbarItem) {
        console.log(oToolbarItem);
      },
      _getData4Topo: function () {
        var self = this;
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
        if (this.debug) {
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
              uiLabelM: "gLink" + i + 0,
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
              uiLabelM: "gLink" + i + 1,
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
              uiLabelM: "gLink" + i + 2,
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
              uiLabelM: "gLink" + i + 3,
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
        }
        else {
          //TODO
        }
        this.$refs.ref4ConfirmPathTopo.initTopo(function () {
          self.$refs.ref4ConfirmPathTopo.drawTopo(oTopoData);
        });
      },
      //#endregion
      //#region traffic
      _getConfirmPathData: function () {
        if (this.debug) {
          this._getConfirmPathDataMock();
        }
        else {
          //TODO
        }
      },
      _getConfirmPathDataMock: function () {
        var rows4ConfirmPath = [];
        for (var i = 0; i < 40; i++) {
          var oRow = [{
            value: i + 1,
            type: "text"
          }, {
            value: "0001/E1_/CDMXDFCU/CDMXDFTP_" + i,
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "单向",
            type: "text"
          }, {
            value: "TDM",
            type: "text"
          }, {
            value: "nodeBase0",
            type: "text"
          }, {
            value: "8-SL16-" + i,
            type: "text"
          }, {
            value: i + 1,
            type: "text"
          }, {
            value: i + 1,
            type: "text"
          }, {
            value: "nodeBase2",
            type: "text"
          }, {
            value: "18-JQ16-" + i,
            type: "text"
          }, {
            value: i + 1,
            type: "text"
          }, {
            value: i + 1,
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "否",
            type: "text"
          }];
          rows4ConfirmPath.push(oRow);
        }
        this.$refs.ref4ConfirmPathTopo.setConfirmPathData(rows4ConfirmPath);
      },
      onClickConfirmPathRow: function(oRow){
        var self = this;
        this._getRoute(oRow, function (arrRouteBeforeInsert) {
          self.$refs.ref4ConfirmPathTopo.setData4ConfirmPathRouter(arrRouteBeforeInsert);

          //TODO:updateTopo
        });
      },
      _getRoute: function (oRow, oAfterCallBack) {
        var arrRouteBeforeInsert = [];
        if (this.debug) {
          arrRouteBeforeInsert = [[{
            value: 1,
            type: "text"
          }, {
            value: oRow[5].value,
            type: "text"
          }, {
            value: oRow[6].value,
            type: "text"
          }, {
            value: oRow[7].value,
            type: "text"
          }, {
            value: oRow[8].value,
            type: "text"
          }, {
            value: oRow[5].value,
            type: "text"
          }, {
            value: oRow[6].value + 1,
            type: "text"
          }, {
            value: oRow[7].value + 1,
            type: "text"
          }, {
            value: oRow[8].value + 1,
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "1",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 2,
            type: "text"
          }, {
            value: oRow[5].value,
            type: "text"
          }, {
            value: oRow[6].value + 1,
            type: "text"
          }, {
            value: oRow[7].value + 1,
            type: "text"
          }, {
            value: oRow[8].value + 1,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value,
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "Fiber",
            type: "text"
          }, {
            value: "2",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 3,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value,
            type: "text"
          }, {
            value: oRow[11].value,
            type: "text"
          }, {
            value: oRow[12].value,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value + 1,
            type: "text"
          }, {
            value: oRow[11].value + 1,
            type: "text"
          }, {
            value: oRow[12].value + 1,
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "3",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 4,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value + 1,
            type: "text"
          }, {
            value: oRow[11].value + 1,
            type: "text"
          }, {
            value: oRow[12].value + 1,
            type: "text"
          }, {
            value: oRow[9].value,
            type: "text"
          }, {
            value: oRow[10].value + 2,
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "Fiber",
            type: "text"
          }, {
            value: "4",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 5,
            type: "text"
          }, {
            value: oRow[9].value,
            type: "text"
          }, {
            value: oRow[10].value + 1,
            type: "text"
          }, {
            value: oRow[11].value + 1,
            type: "text"
          }, {
            value: oRow[12].value + 1,
            type: "text"
          }, {
            value: oRow[9].value,
            type: "text"
          }, {
            value: oRow[10].value + 2,
            type: "text"
          }, {
            value: oRow[11].value + 2,
            type: "text"
          }, {
            value: oRow[12].value + 2,
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "5",
            type: "text"
          }, {
            value: "",
            type: "text"
          }]];
        }
        else {
          //TODO
        }
        oAfterCallBack(arrRouteBeforeInsert);
      },
      //#endregion
      //#endregion

      //#region callback

      //#endregion

      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>

</style>
