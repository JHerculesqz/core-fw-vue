<template>
  <div>
    <marvel-tab :tabItems="tabItems">
      <marvel-tab-item :isActive="tabItems[0].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Ne" :rows="rows4Ne" :limit="limit4Ne"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[1].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Board" :rows="rows4Board" :limit="limit4Board"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[2].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Fiber" :rows="rows4Fiber" :limit="limit4Fiber"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[3].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Cross" :rows="rows4Cross" :limit="limit4Cross"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[4].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Path" :rows="rows4Path" :limit="limit4Path"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[5].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4SubNet" :rows="rows4SubNet" :limit="limit4SubNet"></marvel-grid>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[6].isActive">
        <div class="showAreaInner">
          <marvel-grid :titles="titles4Site" :rows="rows4Site" :limit="limit4Site"></marvel-grid>
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
    name: 'ImportExResult',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
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
          width: "5%"
        }, {
          label: "所属网元ID",
          width: "13%"
        }, {
          label: "所属网元名称",
          width: "12%"
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
          width: "13%"
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
        //#region grid4Path
        titles4Path: [{
          label: "",
          width: "5%"
        }, {
          label: "路径名称",
          width: "13%"
        }, {
          label: "速率级别",
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
          label: "源高阶时隙",
          width: "13%"
        }, {
          label: "源低阶时隙",
          width: "13%"
        },{
          label: "宿网元名称",
          width: "13%"
        }, {
          label: "宿槽位/单板/端口",
          width: "10%"
        }, {
          label: "宿高阶时隙",
          width: "13%"
        }, {
          label: "宿低阶时隙",
          width: "13%"
        }, {
          label: "组Id",
          width: "13%"
        }, {
          label: "是否有保护",
          width: "13%"
        }, {
          label: "正常/异常",
          width: "13%"
        }],
        skip4Path: 0,
        limit4Path: 20,
        rows4Path: [],
        //#endregion
        //#region grid4SubNet
        titles4SubNet: [{
          label: "",
          width: "5%"
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
          width: "5%"
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
        },{
          label: "操作",
          width: "13%"
        }],
        skip4Site: 0,
        limit4Site: 20,
        rows4Site: [],
        //#endregion
        //#region tab
        tabItems: [{
          label: "网元",
          isActive: true
        },{
          label: "单板",
          isActive: false
        },{
          label: "光纤",
          isActive: false
        },{
          label: "交叉",
          isActive: false
        },{
          label: "路径",
          isActive: false
        },{
          label: "保护子网",
          isActive: false
        },{
          label: "站点",
          isActive: false
        }]
        //endregion
      }
    },
    mounted: function () {
      var self = this;
      if (this.debug) {
        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 9; j++) {
            if(j != 8){
              var oCell = {
                value: "value" + i,
                type: "text"
              };
              oRow.push(oCell);
            }
            else{
              var oCell = {
                value: [{
                  value: "icon-location2",
                  onClick: function () {
                    alert(Math.random());
                  }
                }, {
                  value: "icon-location2",
                  onClick: function () {
                    alert(Math.random());
                  }
                }],
                type: "icon"
              };
              oRow.push(oCell);
            }
          }
          this.rows.push(oRow);
        }
      }
      else{

      }

    },
    destroyed: function () {

    },
    methods: {}
  }
</script>

<style scoped>
  .showAreaInner{
    padding-top: 36px;
    box-sizing: border-box;
  }
</style>
