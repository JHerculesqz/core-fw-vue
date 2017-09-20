<template>
  <div class="phyGridWrapper">
    <marvel-tab :tabItems="tabItems" theme="dark">
      <marvel-tab-item :isActive="tabItems[0].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Ne"
                       :rows="rows4Ne"
                       :limit="limit4Ne"
                       v-on:onClickRow="onClickRow4Ne"
                       theme="dark"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[1].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Board" :rows="rows4Board" :limit="limit4Board" theme="dark"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[2].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Fiber"
                       :rows="rows4Fiber"
                       :limit="limit4Fiber"
                       theme="dark"
                       v-on:onClickRow="onClickRow4Fiber"
                       v-on:onIconClick="onGridRowIconClick4Fiber"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[3].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Cross"
                       :rows="rows4Cross"
                       :limit="limit4Cross"
                       theme="dark"
                       v-on:onIconClick="onGridRowIconClick4Cross"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[4].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4SubNet" :rows="rows4SubNet" :limit="limit4SubNet" theme="dark"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[5].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Site" :rows="rows4Site" :limit="limit4Site" theme="dark"></marvel-grid>
        </div>
      </marvel-tab-item>
    </marvel-tab>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";

  export default {
    components: {
      MarvelGrid,
      MarvelFrame,
      MarvelTab,
      MarvelTabItem
    },
    name: 'PhyGridPanel',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region tab
        tabItems: [{
          label: "网元",
          isActive: true
        }, {
          label: "单板",
          isActive: false
        }, {
          label: "光纤",
          isActive: false
        }, {
          label: "交叉",
          isActive: false
        }, {
          label: "保护子网",
          isActive: false
        }, {
          label: "站点",
          isActive: false
        }],
        //endregion
        //#region result
        //#region grid4Ne
        titles4Ne: [{
          label: "",
          width: "5%"
        }, {
          label: "网元ID",
          width: "13%"
        }, {
          label: "网元名称",
          width: "12%"
        }, {
          label: "领域",
          width: "8%"
        }, {
          label: "设备类型",
          width: "13%"
        }, {
          label: "设备厂商",
          width: "10%"
        }, {
          label: "子架类型",
          width: "13%"
        }, {
          label: "时隙模式",
          width: "13%"
        }, {
          label: "搬迁状态",
          width: "13%"
        }, {
          label: "高阶使用容量",
          width: "13%"
        }, {
          label: "高阶交叉个数",
          width: "13%"
        }, {
          label: "低阶使用容量",
          width: "13%"
        }, {
          label: "低阶交叉个数",
          width: "13%"
        }, {
          label: "子网名称",
          width: "13%"
        }, {
          label: "所属站点",
          width: "13%"
        }, {
          label: "备注",
          width: "13%"
        }],
        skip4Ne: 0,
        limit4Ne: 20,
        rows4Ne: [],
        //#endregion
        //#region grid4Board
        titles4Board: [{
          label: "",
          width: "3%"
        }, {
          label: "所属网元ID",
          width: "13%"
        }, {
          label: "所属网元名称",
          width: "13%"
        }, {
          label: "槽位号",
          width: "8%"
        }, {
          label: "单板名称",
          width: "13%"
        }, {
          label: "单板类型",
          width: "10%"
        }, {
          label: "领域",
          width: "8%"
        }, {
          label: "站点名称",
          width: "13%"
        }, {
          label: "子架名称",
          width: "13%"
        }],
        skip4Board: 0,
        limit4Board: 20,
        rows4Board: [],
        //#endregion
        //#region grid4Fiber
        titles4Fiber: [{
          label: "",
          width: "5%"
        }, {
          label: "光纤名称",
          width: "13%"
        }, {
          label: "级别",
          width: "12%"
        }, {
          label: "方向",
          width: "8%"
        }, {
          label: "源网元名称",
          width: "13%"
        }, {
          label: "源槽位/单板/端口",
          width: "10%"
        }, {
          label: "宿网元名称",
          width: "13%"
        }, {
          label: "宿槽位/单板/端口",
          width: "13%"
        }, {
          label: "链路利用率",
          width: "13%"
        }, {
          label: "数据来源",
          width: "13%"
        }, {
          label: "长度",
          width: "13%"
        }, {
          label: "备注",
          width: "13%"
        }, {
          label: "操作",
          width: "13%"
        }],
        skip4Fiber: 0,
        limit4Fiber: 20,
        rows4Fiber: [],
        //#endregion
        //#region grid4Cross
        titles4Cross: [{
          label: "",
          width: "5%"
        }, {
          label: "所属网元名称",
          width: "13%"
        }, {
          label: "级别",
          width: "12%"
        }, {
          label: "源槽位/单板/端口",
          width: "8%"
        }, {
          label: "源高阶时隙",
          width: "13%"
        }, {
          label: "源低阶时隙",
          width: "10%"
        }, {
          label: "宿槽位/单板/端口",
          width: "13%"
        }, {
          label: "宿高阶时隙",
          width: "13%"
        }, {
          label: "宿低阶时隙",
          width: "13%"
        }, {
          label: "工作类型",
          width: "13%"
        }, {
          label: "是否激活",
          width: "13%"
        }, {
          label: "SNCP组Id",
          width: "13%"
        }, {
          label: "备注",
          width: "13%"
        }, {
          label: "操作",
          width: "13%"
        }],
        skip4Cross: 0,
        limit4Cross: 20,
        rows4Cross: [],
        //#endregion
        //#region grid4SubNet
        titles4SubNet: [{
          label: "",
          width: "1%"
        }, {
          label: "保护子网名称",
          width: "13%"
        }, {
          label: "所属保护子网类型",
          width: "12%"
        }, {
          label: "所属保护子网速率级别",
          width: "8%"
        }],
        skip4SubNet: 0,
        limit4SubNet: 20,
        rows4SubNet: [],
        //#endregion
        //#region grid4Site
        titles4Site: [{
          label: "",
          width: "3%"
        }, {
          label: "站点名称",
          width: "13%"
        }, {
          label: "经度",
          width: "12%"
        }, {
          label: "纬度",
          width: "8%"
        }, {
          label: "包含网元",
          width: "13%"
        }, {
          label: "领域",
          width: "10%"
        }, {
          label: "站点类型",
          width: "13%"
        }, {
          label: "备注",
          width: "13%"
        }, {
          label: "操作",
          width: "13%"
        }],
        skip4Site: 0,
        limit4Site: 20,
        rows4Site: [],
        //#endregion
        //#endregion
      }
    },
    mounted: function () {

    },
    destroyed: function () {

    },
    methods: {
      init: function () {
        if (this.debug) {
          this._getParseResult4NeMock();
          this._getParseResult4BoardMock();
          this._getParseResult4FiberMock();
          this._getParseResult4CrossMock();
          this._getParseResult4SubNetMock();
          this._getParseResult4SiteMock();
        }
        else {
//          TODO
        }
      },
      onClickRow4Ne: function (oRow) {
        this.$emit("onClickRow4Ne", oRow);
      },
      onClickRow4Fiber: function (oRow) {
        this.$emit("onClickRow4Fiber", oRow);
      },
      _getParseResult4NeMock: function () {
        this.rows4Ne = [];

        for (var i = 0; i < 3; i++) {
          var oRow = [{
            value: i + 1,
            type: "text"
          }, {
            value: "nodeBase" + i,
            type: "text"
          }, {
            value: "nodeBase" + i,
            type: "text"
          }, {
            value: "SDH",//Math.random() * 100
            type: "text"
          }, {
            value: "OSN3500",//Math.random() * 100
            type: "text"
          }, {
            value: "Huawei",//Math.random() * 100
            type: "text"
          }, {
            value: "metro001",//Math.random() * 100
            type: "text"
          }, {
            value: "华为模式",//Math.random() * 100
            type: "text"
          }, {
            value: "未设计",//Math.random() * 100
            type: "text"
          }, {
            value: "2.344G",//Math.random() * 100
            type: "text"
          }, {
            value: "2",//Math.random() * 100
            type: "text"
          }, {
            value: "4.160G",//Math.random() * 100
            type: "text"
          }, {
            value: "1",//Math.random() * 100
            type: "text"
          }, {
            value: "-",//Math.random() * 100
            type: "text"
          }, {
            value: "-",//Math.random() * 100
            type: "text"
          }, {
            value: "-",//Math.random() * 100
            type: "text"
          }];

          this.rows4Ne.push(oRow);
        }
      },
      _getParseResult4BoardMock: function () {
        this.rows4Board = [];

        for (var i = 0; i < 40; i++) {
          var oRow = [{
            value: i + 1,
            type: "text"
          }, {
            value: "nodeBase" + Math.floor(i / 10),
            type: "text"
          }, {
            value: "nodeBase" + Math.floor(i / 10),
            type: "text"
          }, {
            value: i + 1,
            type: "text"
          }, {
            value: "N2PQ1",
            type: "text"
          }, {
            value: "PDH单板",
            type: "text"
          }, {
            value: "SDH",
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "metro001",
            type: "text"
          }];
          this.rows4Board.push(oRow);
        }
      },
      _getParseResult4FiberMock: function () {
        this.rows4Fiber = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [{
            value: i + 1,
            type: "text"
          }, {
            value: "link" + i,
            type: "text"
          }, {
            value: "STM1",
            type: "text"
          }, {
            value: "单纤单向",
            type: "text"
          }, {
            value: "nodeBase" + i,
            type: "text"
          }, {
            value: "7-N1SLT1-" + i,
            type: "text"
          }, {
            value: "nodeBase" + (i + 1),
            type: "text"
          }, {
            value: "1-S2L-" + i,
            type: "text"
          }, {
            value: "90%",
            type: "text"
          }, {
            value: "系统导入",
            type: "text"
          }, {
            value: "1",
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: [{
              value: "icon-bin"
            }, {
              value: "icon-marvelIcon-30",
            }],
            type: "icon"
          }];
          this.rows4Fiber.push(oRow);
        }
      },
      _getParseResult4CrossMock: function () {
        this.rows4Cross = [];

        for (var i = 0; i < 40; i++) {
          var oRow = [{
            value: i + 1,
            type: "text"
          }, {
            value: "nodeBase" + Math.floor(i / 10),
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "7-N1SLT1-" + i,
            type: "text"
          }, {
            value: "1",
            type: "text"
          }, {
            value: "2",
            type: "text"
          }, {
            value: "7-N1SLT1-" + i + 1,
            type: "text"
          }, {
            value: "1",
            type: "text"
          }, {
            value: "2",
            type: "text"
          }, {
            value: "工作",
            type: "text"
          }, {
            value: "是",
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "",
            type: "text"
          }, {
            value: [{
              value: "icon-bin"
            }, {
              value: "icon-marvelIcon-30",
            }],
            type: "icon"
          }];

          this.rows4Cross.push(oRow);
        }
      },
      _getParseResult4SubNetMock: function () {
        this.rows4SubNet = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [{
            value: i+1,
            type: "text"
          },{
            value: "复用段线性保护1:N_1",
            type: "text"
          },{
            value: "复用段线性保护1:N",
            type: "text"
          },{
            value: "STM16",
            type: "text"
          }];

          this.rows4SubNet.push(oRow);
        }
      },
      _getParseResult4SiteMock: function () {
        this.rows4Site = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [{
            value: i+1,
            type: "text"
          },{
            value: "nodeGroup0",
            type: "text"
          },{
            value: "100.0",
            type: "text"
          },{
            value: "20.0",
            type: "text"
          },{
            value: "nodeBase0,nodeBase1",
            type: "text"
          },{
            value: "SDH",
            type: "text"
          },{
            value: "未知",
            type: "text"
          },{
            value: "-",
            type: "text"
          },{
            value: [{
              value: "icon-pencil"
            }],
            type: "icon"
          }];

          this.rows4Site.push(oRow);
        }
      },
      onGridRowIconClick4Fiber: function (oRow, oCell) {
        if (this.debug) {
          alert(oCell.value);
        }
        else {
          //TODO:
        }
      },
      onGridRowIconClick4Cross: function (oRow, oCell) {
        if (this.debug) {
          alert(oCell.value);
        }
        else {
          //TODO:
        }
      }
    }
  }
</script>

<style scoped>
  .phyGridWrapper {
    height: 100%;
  }

  .showAreaInner {
    padding-top: 10px;
    box-sizing: border-box;
    height: 100%;
  }
</style>
