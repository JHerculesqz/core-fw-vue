<template>
  <div class="widgetShowSession">
    <!--1级 start-->
    <div class="title level1">表格</div>
    <div class="describe">
      表格控件，用于以表格的形式展示数据
    </div>
    <!--1级 end-->
    <!--2级 start-->
    <div class="title level2">表格</div>
    <div class="describe">
      表格
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems1">
        <marvel-tab-item :isActive="tabItems1[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width:500px;height:300px;">
              <marvel-grid :titles="titles" :rows="rows" :inputMsgs="inputMsgs" theme="dark" gridId="demo"
                           v-on:onClickRow="onClickRow"
                           v-on:onIconClick="onIconClick"
                           v-on:onTitleCheckOrUncheck="onTitleCheckOrUncheck"
                           v-on:onRowCheckOrUnCheck="onRowCheckOrUnCheck"
                           v-on:updateRow="updateRow"
                           v-on:onRowRadionCheckOrUnCheck="onRowRadionCheckOrUnCheck"></marvel-grid>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems1[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre v-highlight>
                <code class="js">
&lt;marvel-grid :titles="titles" :rows="rows"&gt;&lt;/marvel-grid&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->

    <!--2级 start-->
    <div class="title level2">表格-2</div>
    <div class="describe">
      表格-2
    </div>
    <div class="showArea" style="height: 450px;">
      <marvel-tab :tabItems="tabItems2">
        <marvel-tab-item :isActive="tabItems2[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button @click="setRowColorEx">setRowColor</button>
            <button @click="removeRowColorEx">removeRowColor</button>
            <button @click="getSelectRows4CheckboxEx">getSelectRows4Checkbox</button>
            <button @click="getSelectRow4RadioboxEx">getSelectRow4Radiobox</button>
            <button @click="removeRowEx">removeRow</button>
            <button @click="getRowsEx">getRows</button>
            <div style="width:800px;height:300px; background-color: #000000">
              <marvel-grid-ex ref="gridEx"
                              :titles="titlesEx"
                              :rows="rowsEx"
                              :inputMsgs="inputMsgsEx"
                              theme="dark"
                              gridId="demoEx"
                              :editCellFinished="editCellFinishedEx"
                              v-on:onClickRow="onClickRowEx"
                              v-on:onIconClick="onIconClickEx"
                              v-on:onClickTextIcon="onClickTextIconEx"
                              v-on:onTitleCheckOrUncheck="onTitleCheckOrUncheckEx"
                              v-on:onRowCheckOrUnCheck="onRowCheckOrUnCheckEx"
                              v-on:onRowRadioCheck="onRowRadioCheckEx"
                              v-on:onOptionChange="onOptionChangeEx"></marvel-grid-ex>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems2[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre v-highlight>
                <code class="js">
&lt;marvel-grid :titles="titles" :rows="rows"&gt;&lt;/marvel-grid&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->

    <!--2级 start-->
    <div class="title level2">表格-3</div>
    <div class="describe">
      表格-3
    </div>
    <div class="showArea" style="height: 450px;">
      <marvel-tab :tabItems="tabItems3">
        <marvel-tab-item :isActive="tabItems3[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width:800px;height:300px;">
              <marvel-grid-m :titles="titles4GridM"
                             :rows="rows4GridM"></marvel-grid-m>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems3[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre v-highlight>
                <code class="js">

                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelHight from "@/walle/component/highlight";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelGridEx from "@/walle/widget/grid/MarvelGridEx";
  import MarvelGridM from "../../../../walle/widget/grid/MarvelGridM";

  export default {
    name: 'page4Grid',
    components: {
      MarvelGridM,
      MarvelTabItem,
      MarvelTab,
      MarvelGrid,
      MarvelGridEx
    },
    data: function () {
      return {
        //#region document data
        tabItems1: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        tabItems2: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        tabItems3: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        //#endregion
        //#region custom data
        //#region grid
        titles: [{
          label: "列1",
          width: "25%",
          type: "checkBox"
        }, {
          label: "列2",
          width: "25%"
        }, {
          label: "列3",
          width: "25%"
        }, {
          label: "列4",
          width: "25%"
        }],
        skip: 0,
        limit: 10,
        rows: [],
        inputMsgs: [],
        //#endregion
        //region gridEx
        titlesEx: [{
          label: "",
          key: "checkBox",
          type: "checkBox", //或者为 "checkBox"
          visible: true,
          width: "5%",
        }, {
          label: "name",
          key: "name",
          type: "text",
          visible: true,
          orderBy: true,
          width: "19%"
        }, {
          label: "描述信息",
          key: "description",
          type: "input",
          visible: true,
          orderBy: true,
          width: "19%"
        }, {
          label: "操作",
          key: "operation",
          type: "icon",
          visible: true,
          width: "19%"
        }, {
          label: "链接",
          key: "link",
          type: "textIcon",
          visible: true,
          width: "19%"
        }, {
          label: "配置项",
          key: "config",
          type: "dropdown",
          visible: true,
          width: "19%"
        }],
        skipEx: 0,
        limitEx: 10,
        rowsEx: [],
        inputMsgsEx: [],
        //endregion
        //#region gridM
        titles4GridM: ["故障设备", "告警ID"],
        rows4GridM: [],
        //#endregion
        //#endregion
      }
    },
    mounted: function () {
      //#region custom

      //#region grid

      this.rows = [];
      //1.
      for (var i = 0; i < 2; i++) {
        var oRow = [];
        for (var j = 0; j < 4; j++) {
          if (j == 0) {
            var oCell = {
              value: "value" + i,
              type: "checkBox",
              isCheck: false
            };
          }
          else if (j == 1) {
            var oCell = {
              value: "value" + i,
              type: "input"
            };
            this.inputMsgs.push(oCell.value);
          }
          else {
            var oCell = {
              value: "value" + i,
              type: "text"
            };
          }
          oRow.push(oCell);
        }
        this.rows.push(oRow);
      }
      //2.
      for (var i = 0; i < 2; i++) {
        var oRow = [];
        for (var j = 0; j < 4; j++) {
          if (j == 0) {
            var oCell = {
              value: "value" + i,
              type: "checkBox",
              isCheck: false
            };
          }
          else {
            var oCell = {
              value: [{
                value: "icon-location2",
              }, {
                value: "icon-location2",
              }],
              type: "icon"
            };
          }

          oRow.push(oCell);
        }
        this.rows.push(oRow);
      }
      //3.
      for (var i = 0; i < 2; i++) {
        var oRow = [];
        for (var j = 0; j < 4; j++) {
          if (j == 0) {
            var oCell = {
              value: "value" + i,
              type: "checkBox",
              isCheck: false
            };
          }
          else {
            var oCell = {
              value: "icon-podcast",
              color: "#28aad3",
              label: "shit",
              type: "textIcon"
            };
          }

          oRow.push(oCell);
        }
        this.rows.push(oRow);
      }
      //#endregion

      //region gridEx
      this.rowsEx = [];
      for (let i = 0; i < 10; i++) {
        let oRow = [];
        //key:id用于标识这一列的唯一性，在界面上不会绘制出来
        oRow.push({
          key: "id",
          value: i
        });
        oRow.push({
          key: "checkBox",
          value: "",
          checked: i == 0 ? true : false
        });
        oRow.push({
          key: "name",
          value: "name_cell" + i
        });
        oRow.push({
          key: "description",
          value: "input_cell" + i
        });
        oRow.push({
          key: "operation",
          value: [{
            value: "icon-location2",
            color: "red"
          }, {
            value: "icon-location2"
          }]
        });
        oRow.push({
          key: "link",
          value: "icon-podcast",
          color: "#28aad3",
          label: "shit",
        });
        oRow.push({
          key: "config",
          value: [{
            value: "A",
          }, {
            value: "B",
            selected: true
          }, {
            value: "C"
          }],
        });
        this.rowsEx.push(oRow);
      }
      ;
      //endregion

      //#region gridM

      for(var i=0;i<100;i++){
        var oRow = {
          item0: "#ff0022",
          item1: "ZY201711081707" + i,
          item2: "Process",
          item3: "SDN9900" + i,
          item4: "102/205/220/300/299/2876",
          item5: "2017-11-08 17:07",
        };
        this.rows4GridM.push(oRow);
      }

      //#endregion

      //#endregion
    },
    methods: {
      //#region inner

      //#region grid

      onClickRow: function (oRow) {
        console.log(oRow);
      },
      onIconClick: function (oRow, oCell) {
        console.log(oRow);
        console.log(oCell);
      },
      onTitleCheckOrUncheck: function (oRow) {
        console.log("onTitleCheckOrUncheck" + oRow);
      },
      onRowCheckOrUnCheck: function (oRow) {
        console.log("onRowCheckOrUnCheck");
      },
      updateRow: function (oRow, oCallBack) {
        console.log("updateRow");
        oCallBack(true);
      },
      onRowRadionCheckOrUnCheck: function (oRow) {
        console.log(oRow);
      },

      //#endregion

      //region gridEx

      //region callback
      editCellFinishedEx: function (oRow, oCell, oOldVal, oNewVal, oAfterCallback) {
        console.log("editCellFinishedEx:" + "oldValue: " + oOldVal + ",oNewVal: " + oNewVal);
        //这里对oNewVal进行校验，如果校验通过那么就调用oAfterCallback
        let bValidate = true;
        if (bValidate) {
          oAfterCallback();
        }
      },
      onClickRowEx: function (oRow) {
        console.log("onClickRowEx");
      },
      onIconClickEx: function (oRow, oCell, oIcon) {
        console.log("onIconClickEx");
      },
      onClickTextIconEx: function (oRow, oCell) {
        console.log("onClickTextIconEx");
      },
      onTitleCheckOrUncheckEx: function (isChecked) {
        console.log("onTitleCheckOrUncheck" + isChecked);
      },
      onRowCheckOrUnCheckEx: function (oRow) {
        console.log("onRowCheckOrUnCheck");
      },
      onRowRadioCheckEx: function (oRow) {
        console.log(oRow);
      },
      onOptionChangeEx: function (oRow, oCell, srtOldValue, strNewValue) {
        console.log("onOptionChangeEx");
      },
      //endregion
      //region test
      setRowColorEx: function () {
        this.$refs.gridEx.setRowColor(0);
      },
      removeRowColorEx: function () {
        this.$refs.gridEx.removeRowColor(0);
      },
      getSelectRows4CheckboxEx: function () {
        let arrRows = this.$refs.gridEx.getSelectRows4Checkbox();
        console.log(arrRows);
      },
      getSelectRow4RadioboxEx: function () {
        let oRow = this.$refs.gridEx.getSelectRow4Radiobox();
        console.log(oRow);
      },
      removeRowEx: function () {
        this.$refs.gridEx.removeRow(0);
      },
      getRowsEx: function () {
        let arrRows = this.$refs.gridEx.getRows();
        console.log(arrRows);
      },
      //endregion

      //endregion

      //#region gridM

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
  /*document fix style start*/
  .widgetShowSession {
    padding: 20px 100px;
    width: 100%;
    box-sizing: border-box;
  }

  .title {
    color: #4d4d4d;
  }

  .level1 {
    font-size: 32px;
    line-height: 54px;
  }

  .describe {
    font-size: 14px;
    color: #666;
    line-height: 36px;
  }

  .codeArea {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    overflow: auto;
  }

  .codeArea pre, .codeArea code {
    padding: 0;
    margin: 0;
    min-width: 100%;
    float: left;
  }

  .showAreaInner {
    padding-top: 36px;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  /*document fix  style end*/
  /*document custom style start*/
  .showArea {
    width: 100%;
    height: 400px;
  }

  /*document custom style end*/
  /*custom style start*/

  /*custom style end*/
</style>
