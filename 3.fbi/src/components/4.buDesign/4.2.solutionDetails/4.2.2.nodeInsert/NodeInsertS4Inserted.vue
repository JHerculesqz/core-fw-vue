<template>
  <div class="nodeInsertS4InsertedWrapper">
    <div class="session">
      <div class="titleArea">
        <div class="titleName">业务表</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="还原"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4Recovery"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="全部还原"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4RecoveryAll"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出脚本"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportScript"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出业务"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportTraffic"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="操作记录"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4OperationLog"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="筛选"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4Search"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="gridArea">
        <marvel-grid :titles="titles4Traffic"
                     :rows="rows4Traffic"
                     :limit="limit4Traffic"
                     v-on:onClickRow="onClickRow4Traffic"
                     theme="dark"></marvel-grid>
      </div>
    </div>
    <div class="session" v-show="showRoute">
      <div class="titleArea">
        <div class="titleName">路由详情表</div>
      </div>
      <div class="gridArea">
        <marvel-grid :titles="titles4Route"
                     :rows="rows4Route"
                     :limit="limit4Route"
                     theme="dark"></marvel-grid>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";

  export default {
    components: {
      MarvelIconTxtButton,
      MarvelGrid},
    name: "NodeInsertS4Inserted",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region Traffic
        titles4Traffic: [{
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
        skip4Traffic: 0,
        limit4Traffic: 20,
        rows4Traffic: [],
        //#endregion
        //#region Route
        showRoute: false,
        titles4Route: [{
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
        skip4Route: 0,
        limit4Route: 20,
        rows4Route: [],
        //#endregion
      };
    },
    mounted: function () {
      this._getTrafficData();
    },
    methods: {
      //#region inner
      _getTrafficData: function () {
        if (this.debug) {
          this._getTrafficDataMock();
        }
        else {
          //TODO
        }
      },
      _getTrafficDataMock: function () {
        this.rows4Traffic = [];
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
          this.rows4Traffic.push(oRow);
        }
      },
      onClickRow4Traffic: function (oRow) {
        var self = this;
        this.showRoute = true;
        this._getRoute(oRow, function (arrRouteBeforeInsert, arrRouteAfterInsert) {
            self.$emit("onClickRow4Traffic", arrRouteBeforeInsert, arrRouteAfterInsert);
        })
      },
      _getRoute: function (oRow, oAfterCallBack) {
        var arrRouteBeforeInsert = [];
        var arrRouteAfterInsert = [];
        if (this.debug) {
          this.rows4Route = [[{
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
          arrRouteAfterInsert = this.rows4Route;
        }
        else {
          //TODO
        }
        oAfterCallBack(arrRouteBeforeInsert, arrRouteAfterInsert);
      },
      onClick4Recovery: function(){
        alert("onClick4Recovery");
      },
      onClick4RecoveryAll: function(){
        alert("onClick4RecoveryAll");
      },
      onClick4ExportScript: function(){
        alert("onClick4ExportScript");
      },
      onClick4ExportTraffic: function(){
        alert("onClick4ExportTraffic");
      },
      onClick4OperationLog: function(){
        alert("onClick4OperationLog");
      },
      onClick4Search: function(){
        alert("onClick4Search");
      }
      //#endregion

      //#region callback

      //#endregion

      //#region 3rd

      //#endregion
    }
  }

</script>

<style scoped>
  .nodeInsertS4InsertedWrapper{
    width: 100%;
    height:100%;
    overflow-y: scroll;
  }

  .session{
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

  .gridArea{
    height: calc(100% - 52px);
  }

  .btnArea {
    height: 52px;
    padding: 10px 0;
    box-sizing: border-box;
    float: right;
  }
</style>
