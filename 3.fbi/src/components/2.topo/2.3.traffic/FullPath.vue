<template>
  <div class="fullPathArea">
    <div class="staticArea">
      <div class="titleArea">
        <div class="titleName">业务详情</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportFullPath"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="网络删除"
                                  icon="icon-bin"
                                  theme="dark"
                                  v-on:onClick="onClick4DelFullPath"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="删除"
                                  icon="icon-bin"
                                  theme="dark"
                                  v-on:onClick="onClick4DelFullPathAndCross"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="firstGridArea">
        <marvel-grid ref="ref4FullPathGrid" :titles="titles4FullPath"
                     :rows="rows4FullPath"
                     :limit="limit4FullPath"
                     theme="dark"
                     v-on:onClickRow="onClickFullPathRow"></marvel-grid>
      </div>
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
      };
    },
    mounted: function () {
      var self = this;

      if (this.debug) {
        self._getFullPathMock();
      }
      else {
        //TODO:
      }
    },
    methods: {
      _getFullPathMock: function () {
        this.rows4FullPath = [];

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

          this.rows4FullPath.push(oRow);
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
        this.rows4FullRouter = [[{
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
        }],[{
          value: 2,
          type: "text"
        }, {
          value: oRow[5].value,
          type: "text"
        }, {
          value: oRow[6].value+1,
          type: "text"
        }, {
          value: oRow[7].value+1,
          type: "text"
        }, {
          value: oRow[8].value+1,
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
        }],[{
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
        }],[{
          value: 4,
          type: "text"
        }, {
          value: "nodeBase1",
          type: "text"
        }, {
          value: oRow[10].value+1,
          type: "text"
        }, {
          value: oRow[11].value+1,
          type: "text"
        }, {
          value: oRow[12].value+1,
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
        }],[{
          value: 5,
          type: "text"
        }, {
          value: oRow[9].value,
          type: "text"
        }, {
          value: oRow[10].value+1,
          type: "text"
        }, {
          value: oRow[11].value+1,
          type: "text"
        }, {
          value: oRow[12].value+1,
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
          alert("网络删除完整路径");
        }
        else {
          //TODO:
        }
      },
      onClick4DelFullPathAndCross: function () {
        //获取勾选项
//        var arrCheckRows = this.$refs.ref4FullPathGrid.getCheckRows();
        if (this.debug) {
          alert("删除完整路径及路径经过交叉");
        }
        else {
          //TODO:
        }
      }
    }
  }
</script>

<style scoped>
  .fullPathArea {
    height:100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .staticArea {
    width: 100%;
    height: 100%;
  }

  .titleArea {
    width: 100%;
    height: 52px;
  }

  .titleName {
    float: left;
    height: 52px;
    font-size: 16px;
    color: #FFFFFF;
    /*font-weight: bold;*/
    line-height: 52px;
  }

  .btnArea {
    height: 52px;
    padding: 10px 0;
    box-sizing: border-box;
    float: right;
  }

  .firstGridArea {
    height: calc(100% - 52px);
  }

  .dynamicArea {
    padding-top: 20px;
    height: 100%;
    box-sizing: border-box;
  }

  .secondGridArea {
    height: calc(100% - 52px);
  }

  .classCustom1 {
    margin-left: 20px;
  }

  @media (min-width: 1980px) {
    .staticArea {
      width: calc(50% - 10px);
      float: left;
      margin-right: 20px;
    }

    .dynamicArea {
      width: calc(50% - 10px);
      float: left;
      padding: 0;
    }
  }
</style>
