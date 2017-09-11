<template>
  <div style="width:100%;height:100%;">
    <div class="title">
      <div class="titleArea">
        <div class="titleIcon icon-upload"></div>
        <div class="titleName">文件列表</div>
      </div>
      <div class="operationArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="上传"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClick4Upload"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="下载模板"
                                icon="icon-download"
                                theme="dark"
                                v-on:onClick="onClick4Download"></marvel-icon-txt-button>
        <!--<marvel-dialog :show="showDialog">-->
          <!---->
        <!--</marvel-dialog>-->
      </div>
    </div>
    <div class="gridArea">
      <marvel-grid :titles="titles" :rows="rows" :limit="limit"></marvel-grid>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  export default {
    components: {
      MarvelIconTxtButton,
      MarvelGrid,
      MarvelFrame
    },
    name: 'ImportExFileMgr',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region grid
        titles: [{
          label: "序号",
          width: "5%"
        }, {
          label: "文件名",
          width: "13%"
        }, {
          label: "文件类型",
          width: "12%"
        }, {
          label: "上传人",
          width: "8%"
        }, {
          label: "上传时间",
          width: "13%"
        }, {
          label: "解析状态",
          width: "10%"
        }, {
          label: "解析时间",
          width: "13%"
        }, {
          label: "备注",
          width: "13%"
        }, {
          label: "操作",
          width: "13%"
        }],
        skip: 0,
        limit: 20,
        rows: [],
        //#endregion
        //#region dialog
        showDialog: false
        //#endregion
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
    methods: {
      onClick4Upload: function(){
          this.showDialog = true;
      },
      onClick4Download: function(){
          if(this.debug){
              alert("下载成功...");
          }
          else{
              //TODO:
          }
      }
    }
  }
</script>

<style scoped>
  .title{
    height: 62px;
    margin-bottom: 10px;
  }
  .title .titleArea{
    height: 100%;
    float: left;
  }
  .title .titleArea .titleIcon{
    height: 100%;
    float: left;
    line-height: 62px;
    font-size: 34px;
    color: #8b90b3;
    margin-right: 10px;
  }
  .title .titleArea .titleName{
    height: 100%;
    float: left;
    line-height: 62px;
    font-size: 18px;
    color: #fff;
    margin-right: 10px;
  }
  .title .operationArea{
    height: 100%;
    padding-top: 15px;
    box-sizing: border-box;
    float: right;
  }
  .gridArea{
    height:calc(100% - 62px);
  }
</style>
