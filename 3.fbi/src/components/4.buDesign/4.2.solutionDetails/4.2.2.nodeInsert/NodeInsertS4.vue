<template>
  <node-insert-s4-s5-topo ref="ref4S4S5Topo"
                          id4LeftTopo="nodeInsertS4BeforeInsertTopo"
                          id4RightTopo="nodeInsertS4AfterInsertTopo"
                          :showRelativePort="false"
                          v-on:onClickRow4NotInsertTraffic="onClickRow4NotInsertTraffic"
                          v-on:onClick4ExportNotInsertTraffic="onClick4ExportNotInsertTraffic"
                          v-on:onClick4OperationLogNotInsert="onClick4OperationLogNotInsert"
                          v-on:onClick4SearchNotInsertTraffic="onClick4SearchNotInsertTraffic"
                          v-on:onClick4InsertTraffic="onClick4InsertTraffic"
                          v-on:onClick4ExportRelativePort="onClick4ExportRelativePort"
                          v-on:onClick4ImportRelativePort="onClick4ImportRelativePort"
                          v-on:onClickRow4InsertTraffic="onClickRow4InsertTraffic"
                          v-on:onClick4Recovery="onClick4Recovery"
                          v-on:onClick4RecoveryAll="onClick4RecoveryAll"
                          v-on:onClick4ExportScript="onClick4ExportScript"
                          v-on:onClick4ExportInsertTraffic="onClick4ExportInsertTraffic"
                          v-on:onClick4OperationLogInsert="onClick4OperationLogInsert"
                          v-on:onClick4SearchInsertTraffic="onClick4SearchInsertTraffic"></node-insert-s4-s5-topo>
</template>

<script>
  import NodeInsertS4S5Topo from "@/components/0.common/0.6.nodeInsertS4S5Topo/NodeInsertS4S5Topo";
  export default {
    components: {
      NodeInsertS4S5Topo,
    },
    name: 'NodeInsertS4',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region topo

        //#endregion
      }
    },
    mounted: function () {
      //1._getTopoData
      this._getTopoData();
      //2._getNotInertTrafficData
      this._getNotInertTrafficData();
      //3_getInertTrafficData
      this._getInertTrafficData();
    },
    methods: {
      //#region inner
      //#region Topo
      _getTopoData: function () {
        var self = this;
        if (this.debug) {
          this._getTopoDataMock(function (oLeftTopoData, oRightTopoData) {
            //leftTopo
            self.$refs.ref4S4S5Topo.initTopo(function () {
              self.$refs.ref4S4S5Topo.drawTopo(oLeftTopoData, oRightTopoData);
            });
          });
        }
        else {
          //TODO
        }
      },
      _getTopoDataMock: function (oAfterCallBack) {
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
        if (this.debug) {
          //#region node

          //#region 网元
          var arrNode = [];
          var oNode1 = {
            id: "VNE1",
            x: Math.random() * 400,
            y: Math.random() * 200,
            uiImgKey: "node",
            uiLabel: "VNE1",
            uiNode: true
          };
          arrNode.push(oNode1);
          var oNode2 = {
            id: "nodeBase0",
            x: Math.random() * 400,
            y: Math.random() * 200,
            uiImgKey: "node",
            uiLabel: "nodeBase0",
            uiNode: true
          };
          arrNode.push(oNode2);
          var oNode3 = {
            id: "nodeBase1",
            x: Math.random() * 400,
            y: Math.random() * 200,
            uiImgKey: "node",
            uiLabel: "nodeBase1",
            uiNode: true
          };
          arrNode.push(oNode3);
          console.log(arrNode);
          oTopoData.nodes = arrNode;
          //#endregion

          //#endregion

          //#region link
          var arrLink = [];
          //#region 网元与网元之间的单条链路
          var oLink1 = {
            id: "link1",
            srcNodeId: "VNE1",
            dstNodeId: "nodeBase0",
            uiLabelL: "VNE1",
            uiLabelM: "link1",
            uiLabelR: "nodeBase0",
            uiLink: true,
            uiLinkColorKey: "linkType1",
            uiLinkWidth: 3
          };
          var oLink2 = {
            id: "link2",
            srcNodeId: "nodeBase0",
            dstNodeId: "nodeBase1",
            uiLabelL: "nodeBase0",
            uiLabelM: "link2",
            uiLabelR: "nodeBase1",
            uiLink: true,
            uiLinkColorKey: "linkType1",
            uiLinkWidth: 3
          };
          var oLink3 = {
            id: "link3",
            srcNodeId: "VNE1",
            dstNodeId: "nodeBase1",
            uiLabelL: "VNE1",
            uiLabelM: "link3",
            uiLabelR: "nodeBase1",
            uiLink: true,
            uiLinkColorKey: "linkType1",
            uiLinkWidth: 3
          };
          arrLink.push(oLink1);
          arrLink.push(oLink2);
          arrLink.push(oLink3);
          //#endregion
          oTopoData.links = arrLink;
          //#endregion
        }
        else {
          //TODO
        }
        oAfterCallBack(oTopoData, oTopoData);
      },
      //#endregion
      //#region NotInertData
      _getNotInertTrafficData: function () {
        if (this.debug) {
          var rows4Traffic = this._getTrafficData4NotInsertMock();
          this.$refs.ref4S4S5Topo.setData4NotInsertTraffic(rows4Traffic);
        }
        else {
          //TODO
        }
      },
      _getTrafficData4NotInsertMock: function () {
        var rows4Traffic = [];
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
          rows4Traffic.push(oRow);
        }
        return rows4Traffic;
      },
      onClickRow4NotInsertTraffic: function (oRow) {
        var self = this;
        if (this.debug) {
          this._getRouteMock(oRow, function (arrRouteBeforeInsert, arrRouteAfterInsert) {
            self.$refs.ref4S4S5Topo.setData4NotInsertTrafficRouter(arrRouteAfterInsert);
            var oLeftTopoData = self._getTopoData4BeforeInsert(arrRouteBeforeInsert);
            var oRightTopoData = self._getTopoData4AfterInsert(arrRouteBeforeInsert);
            self._updateTopo(oLeftTopoData, oRightTopoData);
          })
        }
        else {
          //TODO
        }
      },
      _getRouteMock: function (oRow, oAfterCallBack) {
        var arrRouteBeforeInsert = [];
        var arrRouteAfterInsert = [];
        var rows4Route = [[{
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
        arrRouteAfterInsert = rows4Route;
        oAfterCallBack(arrRouteBeforeInsert, arrRouteAfterInsert);
      },
      _updateTopo: function (arrRouteBeforeInsert, arrRouteAfterInsert) {
        //更新割接前的Topo/更新割接后的Topo
        this.$refs.ref4S4S5Topo.updateTopo(arrRouteBeforeInsert, arrRouteAfterInsert);
      },
      _getTopoData4BeforeInsert: function (arrRouteBeforeInsert) {
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
        //#region 网元
        var arrNode = [];
        var oNode1 = {
          id: "VNE1",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "VNE1",
          uiNode: true
        };
        arrNode.push(oNode1);
        var oNode2 = {
          id: "nodeBase0",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "nodeBase0",
          uiNode: true
        };
        arrNode.push(oNode2);
        var oNode3 = {
          id: "nodeBase1",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "nodeBase1",
          uiNode: true
        };
        arrNode.push(oNode3);
        console.log(arrNode);
        oTopoData.nodes = arrNode;
        //#endregion

        //#region link
        var arrLink = [];
        var oLink1 = {
          id: "link1",
          srcNodeId: "VNE1",
          dstNodeId: "nodeBase0",
          uiLabelL: "VNE1",
          uiLabelM: "link1",
          uiLabelR: "nodeBase0",
          uiLink: true,
          uiLinkColorKey: "linkType1",
          uiLinkWidth: 3
        };
        var oLink2 = {
          id: "link2",
          srcNodeId: "nodeBase0",
          dstNodeId: "nodeBase1",
          uiLabelL: "nodeBase0",
          uiLabelM: "link2",
          uiLabelR: "nodeBase1",
          uiLink: true,
          uiLinkColorKey: "linkType2",
          uiLinkWidth: 3,
          uiDirection:2
        };
        var oLink3 = {
          id: "link3",
          srcNodeId: "VNE1",
          dstNodeId: "nodeBase1",
          uiLabelL: "VNE1",
          uiLabelM: "link3",
          uiLabelR: "nodeBase1",
          uiLink: true,
          uiLinkColorKey: "linkType2",
          uiLinkWidth: 3,
          uiDirection:2
        };
        var oLink4= {
          id: "link4",
          srcNodeId: "VNE1",
          dstNodeId: "nodeBase0",
          uiLabelL: "VNE1",
          uiLabelM: "0001/E1_/CDMXDFCU/CDMXDFTP",
          uiLabelR: "nodeBase0",
          uiLink: true,
          uiLinkColorKey: "linkType3",
          uiLinkWidth: 3,
          uiDirection:2,
          uiDash: [10, 5]
        };
        arrLink.push(oLink1);
        arrLink.push(oLink2);
        arrLink.push(oLink3);
        arrLink.push(oLink4);
        oTopoData.links = arrLink;
        //#endregion

        return oTopoData;
      },
      _getTopoData4AfterInsert: function (arrRouteAfterInsert) {
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
        //#region 网元
        var arrNode = [];
        var oNode1 = {
          id: "VNE1",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "VNE1",
          uiNode: true
        };
        arrNode.push(oNode1);
        var oNode2 = {
          id: "nodeBase0",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "nodeBase0",
          uiNode: true
        };
        arrNode.push(oNode2);
        var oNode3 = {
          id: "nodeBase1",
          x: Math.random() * 400,
          y: Math.random() * 200,
          uiImgKey: "node",
          uiLabel: "nodeBase1",
          uiNode: true
        };
        arrNode.push(oNode3);
        console.log(arrNode);
        oTopoData.nodes = arrNode;
        //#endregion

        //#region link
        var arrLink = [];
        var oLink1 = {
          id: "link1",
          srcNodeId: "VNE1",
          dstNodeId: "nodeBase0",
          uiLabelL: "VNE1",
          uiLabelM: "link1",
          uiLabelR: "nodeBase0",
          uiLink: true,
          uiLinkColorKey: "linkType1",
          uiLinkWidth: 3
        };
        var oLink2 = {
          id: "link2",
          srcNodeId: "nodeBase0",
          dstNodeId: "nodeBase1",
          uiLabelL: "nodeBase0",
          uiLabelM: "link2",
          uiLabelR: "nodeBase1",
          uiLink: true,
          uiLinkColorKey: "linkType2",
          uiLinkWidth: 3,
          uiDirection:2
        };
        var oLink3 = {
          id: "link3",
          srcNodeId: "VNE1",
          dstNodeId: "nodeBase1",
          uiLabelL: "VNE1",
          uiLabelM: "link3",
          uiLabelR: "nodeBase1",
          uiLink: true,
          uiLinkColorKey: "linkType2",
          uiLinkWidth: 3,
          uiDirection:2
        };
        var oLink4= {
          id: "link4",
          srcNodeId: "VNE1",
          dstNodeId: "nodeBase0",
          uiLabelL: "VNE1",
          uiLabelM: "0001/E1_/CDMXDFCU/CDMXDFTP",
          uiLabelR: "nodeBase0",
          uiLink: true,
          uiLinkColorKey: "linkType3",
          uiLinkWidth: 3,
          uiDirection:2,
          uiDash: [10, 5]
        };
        arrLink.push(oLink1);
        arrLink.push(oLink2);
        arrLink.push(oLink3);
        arrLink.push(oLink4);
        oTopoData.links = arrLink;
        //#endregion

        return oTopoData;
      },
      onClick4ExportNotInsertTraffic: function () {
        console.log("onClick4ExportNotInsertTraffic");
      },
      onClick4OperationLogNotInsert: function () {
        console.log("onClick4OperationLogNotInsert");
      },
      onClick4SearchNotInsertTraffic: function () {
        console.log("onClick4SearchNotInsertTraffic");
      },
      onClick4InsertTraffic: function (arrRow, bScriptCheckStatus) {
        console.log("onClick4InsertTraffic" + arrRow + bScriptCheckStatus);
      },
      onClick4ExportRelativePort: function () {
        console.log("onClick4ExportRelativePort");
      },
      onClick4ImportRelativePort: function () {
        console.log("onClick4ImportRelativePort");
      },
      //#endregion
      //#region Insert
      _getInertTrafficData: function () {
        var self = this;
        if (this.debug) {
          var rows4InsertTraffic = this._getTrafficData4InsertMock();
          self.$refs.ref4S4S5Topo.setData4InsertTraffic(rows4InsertTraffic);
        }
        else {
          //TODO:
        }
      },
      _getTrafficData4InsertMock: function () {
        var rows4Traffic = [];
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
          rows4Traffic.push(oRow);
        }
        return rows4Traffic;
      },
      onClickRow4InsertTraffic: function (oRow) {
        var self = this;
        if (this.debug) {
          this._getRouteMock(oRow, function (arrRouteBeforeInsert, arrRouteAfterInsert) {
            self.$refs.ref4S4S5Topo.setData4InsertTrafficRouter(arrRouteAfterInsert);
            var oLeftTopoData = self._getTopoData4BeforeInsert(arrRouteBeforeInsert);
            var oRightTopoData = self._getTopoData4AfterInsert(arrRouteBeforeInsert);
            self._updateTopo(oLeftTopoData, oRightTopoData);
          })
        }
        else {
          //TODO
        }
      },
      onClick4Recovery: function (arrRow) {
        console.log("onClick4Recovery");
      },
      onClick4RecoveryAll: function () {
        console.log("onClick4RecoveryAll");
      },
      onClick4ExportScript: function () {
        console.log("onClick4ExportScript");
      },
      onClick4ExportInsertTraffic: function () {
        console.log("onClick4ExportInsertTraffic");
      },
      onClick4OperationLogInsert: function () {
        console.log("onClick4OperationLogInsert");
      },
      onClick4SearchInsertTraffic: function () {
        console.log("onClick4SearchInsertTraffic");
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
