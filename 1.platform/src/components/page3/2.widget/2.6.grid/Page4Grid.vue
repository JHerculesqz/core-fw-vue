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
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelHight from "@/walle/component/highlight";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";

  export default {
    name: 'page4Grid',
    components: {
      MarvelTabItem,
      MarvelTab,
      MarvelGrid
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
        //#endregion
        //#region custom data
        titles: [{
          label: "列1",
          width: "25%",
          type:"checkBox"
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
        inputMsgs:[],
        //#endregion
      }
    },
    mounted: function () {
      //#region custom
      this.rows = [];
      //1.
      for (var i = 0; i < 2; i++) {
        var oRow = [];
        for (var j = 0; j < 4; j++) {
          if(j==0){
            var oCell = {
              value: "value" + i,
              type: "checkBox",
              isCheck:false
            };
          }
          else if(j==1){
            var oCell = {
              value: "value" + i,
              type: "input"
            };
            this.inputMsgs.push(oCell.value);
          }
          else{
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
          if(j==0){
            var oCell={
              value:"value" +i,
              type:"checkBox",
              isCheck:false
            };
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
          }

          oRow.push(oCell);
        }
        this.rows.push(oRow);
      }
      //3.
      for (var i = 0; i < 2; i++) {
        var oRow = [];
        for (var j = 0; j < 4; j++) {
          if(j==0){
            var oCell={
              value:"value" +i,
              type:"checkBox",
              isCheck:false
            };
          }
          else{
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
    },
    methods: {
      //#region inner
    onClickRow:function(){
      console.log("onClickRow");
    },
    onTitleCheckOrUncheck:function(oRow){
      console.log("onTitleCheckOrUncheck"+oRow);
    },
    onRowCheckOrUnCheck:function(oRow){
      console.log("onRowCheckOrUnCheck");
    },
    updateRow:function(oRow,oCallBack){
      console.log("updateRow");
      oCallBack(true);
    },
    onRowRadionCheckOrUnCheck:function(oRow){
      console.log(oRow);
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
