<template>
  <div class="phyWrapper">
    <topo-panel ref="ref4MainTopo4Phy"
                v-on:onTreeNodeClick="onTreeNodeClick"
                v-bind:items="items"></topo-panel>
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
      this.$refs.ref4PhyGridPanel.init();
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
          this.$refs.ref4MainTopo4Phy.setData4LeftArea(oData4LeftArea);
        }
        else {
          //TODO:
        }
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
