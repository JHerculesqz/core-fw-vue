<template>
  <div class="nodeInsertS4NotInsertedWrapper">
    <div class="session">
      <div class="titleArea">
        <div class="titleName">业务表</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="全选穿通业务"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4CheckAllTraffic"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="去全选"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4UnCheckAll"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4Export"></marvel-icon-txt-button>
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
    <div class="session">
      <div class="titleArea">
        <div class="titleName">关联端口表</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="割接"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4InsertTraffic"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出关联端口组"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportRelativePort"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导入关联端口组"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ImportRelativePort"></marvel-icon-txt-button>
          <marvel-check-box ref="ref4ScriptCheckBox" id="scriptCheckBox"
                            label="生成网管脚本" showLabel="true"></marvel-check-box>
        </div>
      </div>
      <div class="gridArea">
        <marvel-grid :titles="titles4RelativeTraffic"
                     :rows="rows4RelativeTraffic"
                     :limit="limit4RelativeTraffic"
                     theme="dark"></marvel-grid>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelCheckBox from "@/walle/widget/select/MarvelCheckBox";
  export default {
    components: {
      MarvelCheckBox,
      MarvelIconTxtButton,
      MarvelGrid},
    name: "NodeInsertS4NotInserted",
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
        //#region RelativeTraffic
        titles4RelativeTraffic: [{
          label: "",
          width: "5%"
        }, {
          label: "原网元名称",
          width: "13%"
        }, {
          label: "原槽位",
          width: "12%"
        }, {
          label: "原单板名称",
          width: "8%"
        }, {
          label: "原端口号",
          width: "13%"
        }, {
          label: "目标网元名称",
          width: "10%"
        }, {
          label: "目标槽位",
          width: "13%"
        }, {
          label: "目标单板名称",
          width: "13%"
        }, {
          label: "目标端口号",
          width: "13%"
        }, {
          label: "查看",
          width: "10%"
        }],
        skip4RelativeTraffic: 0,
        limit4RelativeTraffic: 20,
        rows4RelativeTraffic: [],
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
      onClick4CheckAllTraffic: function(){
        alert("onClick4CheckAllTraffic");
      },
      onClick4UnCheckAll: function(){
        alert("onClick4UnCheckAll");
      },
      onClick4Export: function(){
        alert("onClick4Export");
      },
      onClick4OperationLog: function(){
        alert("onClick4OperationLog");
      },
      onClick4Search: function(){
        alert("onClick4Search");
      },
      onClick4InsertTraffic: function(){
          if(this.debug){
            var bScriptCheckStatus = this.$refs.ref4ScriptCheckBox.getCheckItem();
            alert("onClick4InsertTraffic" + bScriptCheckStatus);
          }
          else{
              //TODO：
          }
      },
      onClick4ExportRelativePort: function(){
        alert("onClick4ExportRelativePort");
      },
      onClick4ImportRelativePort: function(){
        alert("onClick4ImportRelativePort");
      },
      onClick4GenerateScript: function(){
        alert("onClick4GenerateScript");
      },
      //#endregion

      //#region callback


      //#endregion

      //#region 3rd

      //#endregion
    }
  }

</script>

<style scoped>
  .nodeInsertS4NotInsertedWrapper{
    width: 100%;
    height:100%;
    overflow-y: scroll;
  }

  .session{
    height: 100%;
    margin-bottom: 20px;
  }

  .session:last-child{
    margin-bottom: 0;
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
