<template>
  <div>
    <marvel-tab :tabItems="tabItems1" theme="dark">
      <marvel-tab-item :isActive="tabItems1[0].isActive">
        <div>路径</div>
        <div style="height:100px">
          <marvel-grid :titles="titles4FullPath" :rows="rows4FullPath" :limit="limit4FullPath"
                       theme="dark" v-on:onClickRow="onClickFullPathRow"></marvel-grid>
        </div>
        <div>路由详情</div>
        <div>
          <marvel-grid v-show="showRouter" :titles="titles4FullRouter" :rows="rows4FullRouter" :limit="limit4FullRouter"
                       theme="dark"></marvel-grid>
        </div>

      </marvel-tab-item>

      <marvel-tab-item :isActive="tabItems1[1].isActive">
        <div>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="业务局向"
                                  icon="icon-upload"
                                  theme="dark"
                                  v-on:onClick="onClick4BusinessOK"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出"
                                  icon="icon-upload"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportBusOK"></marvel-icon-txt-button>
        </div>
        <div>
          <marvel-grid :titles="titles4Business" :rows="rows4Business" :limit="limit4Business"
                       theme="dark"></marvel-grid>
        </div>
      </marvel-tab-item>

    </marvel-tab>
  </div>
</template>

<script>

  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";

  export default {
    components: {
      MarvelIconTxtButton,
      MarvelGrid,
      MarvelTab,
      MarvelTabItem
    },
    name: "FullPath",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region tbl data
        tabItems1: [{
          label: "路径详情",
          isActive: true
        }, {
          label: "业务局向",
          isActive: false
        }],
        //#endregion
        //#region fullPathGrid
        titles4FullPath: [{
          label: "",
          width: "5%"
        }, {
          label: "业务名称",
          width: "13%"
        }, {
          label: "速率级别",
          width: "12%"
        }, {
          label: "方向",
          width: "8%"
        }, {
          label: "业务类型",
          width: "13%"
        }, {
          label: "源网元名称",
          width: "10%"
        }, {
          label: "源槽位/单板/端口",
          width: "13%"
        }, {
          label: "源高阶时隙",
          width: "13%"
        }, {
          label: "源低阶时隙",
          width: "13%"
        }, {
          label: "宿网元名称",
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
          label: "路径组Id",
          width: "10%"
        }, {
          label: "是否有保护",
          width: "13%"
        }],
        skip4FullPath: 0,
        limit4FullPath: 20,
        rows4FullPath: [],
        //#endregion
        //#region fullRouterGrid
        showRouter: false,
        titles4FullRouter: [{
          label: "",
          width: "5%"
        }, {
          label: "源网元名称",
          width: "13%"
        }, {
          label: "源槽位/单板/端口",
          width: "12%"
        }, {
          label: "源高阶时隙",
          width: "8%"
        }, {
          label: "源低阶时隙",
          width: "13%"
        }, {
          label: "宿网元名称",
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
          label: "路由类型",
          width: "10%"
        }, {
          label: "资源类型",
          width: "13%"
        }, {
          label: "跳数",
          width: "13%"
        }, {
          label: "原业务名称",
          width: "13%"
        }],
        skip4FullRouter: 0,
        limit4FullRouter: 20,
        rows4FullRouter: [],
        //#endregion
        //#region businessGrid
        titles4Business: [{
          label: "",
          width: "5%"
        }, {
          label: "源/宿端网元",
          width: "13%"
        }, {
          label: "宿/源端网元",
          width: "12%"
        }, {
          label: "VC12数量",
          width: "8%"
        }, {
          label: "VC3数量",
          width: "13%"
        }, {
          label: "VC4数量",
          width: "10%"
        }, {
          label: "VC4_4C数量",
          width: "13%"
        }, {
          label: "VC4_8C数量",
          width: "13%"
        }, {
          label: "VC4_16C数量",
          width: "13%"
        }, {
          label: "VC4_64C数量",
          width: "13%"
        }, {
          label: "业务量(等效2M)",
          width: "13%"
        }, {
          label: "业务量分布比例",
          width: "13%"
        }],
        skip4Business: 0,
        limit4Business: 20,
        rows4Business: [],
        //#endregion
      };
    },
    mounted: function () {
      var self = this;

      if (this.debug) {
        self._getFullPathMock();
        self._getBusinessMock();
      }
      else {
        //TODO:
      }
    },
    methods: {
      _getFullPathMock: function () {
        this.rows4FullPath = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 15; j++) {
            var oCell = {
              value: "value" + i,//Math.random() * 100
              type: "text"
            };
            oRow.push(oCell);
          }
          this.rows4FullPath.push(oRow);
        }
      },
      _getBusinessMock: function () {
        this.rows4Business = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 13; j++) {
            var oCell = {
              value: "value" + i,//Math.random() * 100
              type: "text"
            };
            oRow.push(oCell);
          }
          this.rows4Business.push(oRow);
        }
      },
      onClickFullPathRow: function (oRow) {
        this.showRouter = true;
        if (this.debug) {
          this._getFullRouterMock(oRow);
        }
        else {
          //TODO:
        }
      },
      _getFullRouterMock: function (oRow) {
        this.rows4FullRouter = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 13; j++) {
            var oCell = {
              value: "value" + i,//Math.random() * 100
              type: "text"
            };
            oRow.push(oCell);
          }
          this.rows4FullRouter.push(oRow);
        }
      },
      onClick4BusinessOK: function () {
        if (this.debug) {
          alert("局向");
          this._getBusinessMock();
        }
        else {
          //TODO:
        }
      },
      onClick4ExportBusOK: function () {
        if (this.debug) {
          alert("导出");
        }
        else {
          //TODO:
        }
      },
    }

  }

</script>

<style>


</style>
