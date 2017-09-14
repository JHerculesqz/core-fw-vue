<template>
  <div class="fullPathArea">
    <marvel-tab :tabItems="tabItems1" theme="dark">
      <marvel-tab-item :isActive="tabItems1[0].isActive">
        <div class="tabContArea">
          <div class="titleArea">
            <div class="titleName">路径</div>
            <div class="btnArea">
              <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                      label="导出"
                                      icon="icon-download"
                                      theme="dark"
                                      v-on:onClick="onClick4ExportFullPath"></marvel-icon-txt-button>
              <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                      label="删除"
                                      icon="icon-bin"
                                      theme="dark"
                                      v-on:onClick="onClick4DelFullPath"></marvel-icon-txt-button>
            </div>
          </div>
          <div class="firstGridArea">
            <marvel-grid ref="ref4FullPathGrid" :titles="titles4FullPath"
                         :rows="rows4FullPath"
                         :limit="limit4FullPath"
                         theme="dark"
                         v-on:onClickRow="onClickFullPathRow"></marvel-grid>
          </div>
          <div class="dynamicArea" v-show="showRouter">
            <div class="titleArea">
              <div class="titleName">路由详情</div>
              <div class="btnArea">
                <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                        label="导出"
                                        icon="icon-download"
                                        theme="dark"
                                        v-on:onClick="onClick4ExportFullPathRouter"></marvel-icon-txt-button>
              </div>
            </div>
            <div class="secondGridArea">
              <marvel-grid :titles="titles4FullRouter"
                           :rows="rows4FullRouter"
                           :limit="limit4FullRouter"
                           theme="dark"></marvel-grid>
            </div>
          </div>
        </div>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems1[1].isActive">
        <div class="titleArea">
          <div class="btnArea">
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="业务局向"
                                    icon="icon-upload"
                                    theme="dark"
                                    v-on:onClick="onClick4Business"></marvel-icon-txt-button>
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="导出"
                                    icon="icon-download"
                                    theme="dark"
                                    v-on:onClick="onClick4ExportBusiness"></marvel-icon-txt-button>
          </div>
        </div>
        <div class="firstGridArea">
          <marvel-grid :titles="titles4Business"
                       :rows="rows4Business"
                       :limit="limit4Business"
                       theme="dark"
                       v-on:onClickRow="onClickRow4Business"></marvel-grid>
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
        var self = this;
        this.showRouter = true;
        if (this.debug) {
          this._getFullRouterMock(oRow, function (arrRouters) {
            self.$emit("onClickFullPathRow", arrRouters);
          });
        }
        else {
          //TODO:
        }
      },
      _getFullRouterMock: function (oRow, oAfterCallBack) {
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
        oAfterCallBack(this.rows4FullRouter);
      },
      onClick4ExportFullPathRouter: function () {
        if (this.debug) {
          alert("导出路由详情");
        }
        else {
          //TODO:
        }
      },
      onClick4Business: function () {
        if (this.debug) {
          alert("局向");
          this._getBusinessMock();
        }
        else {
          //TODO:
        }
      },
      onClick4ExportBusiness: function () {
        if (this.debug) {
          alert("导出");
        }
        else {
          //TODO:
        }
      },
      onClickRow4Business: function (oRow) {
        this.$emit("onClickRow4Business", oRow);
      },
      onClick4ExportFullPath: function () {
        if (this.debug) {
          alert("导出完整路径信息");
        }
        else {
          //TODO:
        }
      },
      onClick4DelFullPath: function () {
        //获取勾选项
//        var arrCheckRows = this.$refs.ref4FullPathGrid.getCheckRows();
        if (this.debug) {
          alert("删除完整路径");
        }
        else {
          //TODO:
        }
      }
    }
  }
</script>

<style scoped>
  .fullPathArea{
    height:100%;
  }
  .tabContArea{
    height:100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .titleArea{
    width: 100%;
    height: 52px;
  }
  .titleName{
    float: left;
    height: 52px;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    line-height: 52px;
  }
  .btnArea{
    height: 52px;
    padding: 10px 0;
    box-sizing: border-box;
    float: right;
  }
  .firstGridArea{
    height: calc(100% - 52px);
  }
  .dynamicArea{
    padding-top: 20px;
    box-sizing: border-box;
  }
  .secondGridArea{
    height: 300px;
  }
  .classCustom1{
    margin-left: 20px;
  }
</style>
