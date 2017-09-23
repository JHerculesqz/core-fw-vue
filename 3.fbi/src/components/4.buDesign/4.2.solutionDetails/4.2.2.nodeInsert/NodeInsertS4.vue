<template>
  <div class="nodeInsertS4">
    <div class="leftTopo">
      <topo-panel ref="ref4MainTopo4S4BeforeInsert"
                  id4Topo="nodeInsertS4BeforeInsertTopo"
                  :showLeftArea="false"
                  :showRightArea="false"
                  v-bind:toolbarItems="leftToolbarItems"
                  v-on:onToolbarItemClick="onLeftToolbarItemClick"
                  theme="dark"></topo-panel>
    </div>
    <div class="rightTopo">
      <topo-panel ref="ref4MainTopo4S4AfterInsert"
                  id4Topo="nodeInsertS4AfterInsertTopo"
                  :showLeftArea="false"
                  :showRightArea="false"
                  v-bind:toolbarItems="rightToolbarItems"
                  v-on:onToolbarItemClick="onRightToolbarItemClick"
                  theme="dark"></topo-panel>
    </div>
    <div>
      <marvel-bottom-ext-panel
        theme="dark"
        height="300"
        show="true"
        canDrag="false">
        <div class="phyContent" slot="content">
          <marvel-tab :tabItems="tabItems" theme="dark">
            <marvel-tab-item :isActive="tabItems[0].isActive">
              <div class="showAreaInner">
                <node-insert-s4-not-inserted
                  v-on:onClickRow4Traffic="onClickRow4Traffic"></node-insert-s4-not-inserted>
              </div>
            </marvel-tab-item>
            <marvel-tab-item :isActive="tabItems[1].isActive">
              <div class="showAreaInner">
                <node-insert-s4-inserted
                  v-on:onClickRow4Traffic="onClickRow4Traffic"></node-insert-s4-inserted>
              </div>
            </marvel-tab-item>
          </marvel-tab>
        </div>
      </marvel-bottom-ext-panel>
    </div>
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";
  import NodeInsertS4Inserted from "./NodeInsertS4Inserted";
  import NodeInsertS4NotInserted from "./NodeInsertS4NotInserted";
  export default {
    components: {
      NodeInsertS4NotInserted,
      NodeInsertS4Inserted,
      MarvelBottomExtPanel,
      TopoPanel,
      MarvelTabItem,
      MarvelTab
    },
    name: 'NodeInsertS4',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region topo
        //#region left
        leftToolbarItems: [],
        //#endregion
        //#region right
        rightToolbarItems: [],
        //#endregion
        //#endregion
        //#region tab
        tabItems: [{
          label: "未割接的业务",
          isActive: true
        }, {
          label: "已割接的业务",
          isActive: false
        }],
        //endregion
      }
    },
    mounted: function () {
      //_getTopoData
      this._getTopoData();
    },
    methods: {
      //#region inner
      onLeftToolbarItemClick: function (oToolbarItem) {

      },
      onRightToolbarItemClick: function (oToolbarItem) {

      },
      _getTopoData: function () {
        var self = this;
        if (this.debug) {
          this._getTopoDataMock(function (oTopoData) {
            //leftTopo
            self.$refs.ref4MainTopo4S4BeforeInsert.initTopo(function () {
              self.$refs.ref4MainTopo4S4BeforeInsert.drawTopo(oTopoData);
            });
            //rightTopo
            self.$refs.ref4MainTopo4S4AfterInsert.initTopo(function () {
              self.$refs.ref4MainTopo4S4AfterInsert.drawTopo(oTopoData);
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
          var oLink1 = {
            id: "link1",
            srcNodeId: "nodeBase0",
            dstNodeId: "nodeBase1",
            uiLabelL: "nodeBase0",
            uiLabelM: "link1",
            uiLabelR: "nodeBase1",
            uiLink: true,
            uiLinkColorKey: "linkType1",
            uiLinkWidth: 3
          };
          var oLink2 = {
            id: "link2",
            srcNodeId: "nodeBase1",
            dstNodeId: "nodeBase2",
            uiLabelL: "nodeBase1",
            uiLabelM: "link2",
            uiLabelR: "nodeBase2",
            uiLink: true,
            uiLinkColorKey: "linkType1",
            uiLinkWidth: 3
          };
          var oLink3 = {
            id: "link3",
            srcNodeId: "nodeBase0",
            dstNodeId: "nodeBase2",
            uiLabelL: "nodeBase0",
            uiLabelM: "link3",
            uiLabelR: "nodeBase2",
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
        oAfterCallBack(oTopoData);
      },
      //#endregion
      //#region callback
      onClickRow4Traffic: function (arrRouteBeforeInsert, arrRouteAfterInsert) {
        //更新割接前的Topo
        var oTopo4BeforeInsert = this._getTopoData4BeforeInsert(arrRouteBeforeInsert);
        this.$refs.ref4MainTopo4S4BeforeInsert.updateTopo(oTopo4BeforeInsert);
        //更新割接后的Topo
        var oTopo$AfterInsert = this._getTopoData4AfterInsert(arrRouteAfterInsert);
        this.$refs.ref4MainTopo4S4AfterInsert.updateTopo(oTopo$AfterInsert);
      },
      _getTopoData4BeforeInsert: function (arrRouteBeforeInsert) {
        var oTopo = [];
        return oTopo;
      },
      _getTopoData4AfterInsert: function (arrRouteAfterInsert) {
        var oTopo = [];
        return oTopo;
      }
      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>
  .nodeInsertS4{
    width:100%;
    height:100%;
  }
  .showAreaInner {
    height: 100%;
  }
  .phyContent{
    height:100%;
  }
  .leftTopo{
    float: left;
    height:100%;
    width:calc(50% - 10px);
  }
  .rightTopo{
    height:100%;
    float: right;
    width:calc(50% - 10px);
  }
</style>
