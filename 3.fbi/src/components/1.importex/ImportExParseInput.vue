<template>
  <div class="importExResultWrapper">
    <div class="title">
      <div class="titleArea">
        <div class="titleIcon icon-upload"></div>
        <div class="titleName">脚本解析</div>
        <div class="loadingArea">
          <marvel-loading-mini ref="refMiniLoading" theme="dark"></marvel-loading-mini>
        </div>
      </div>
      <div class="operationArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="解析"
                                icon="icon-rocket"
                                theme="dark"
                                v-on:onClick="onClick4ParseShow"></marvel-icon-txt-button>
        <marvel-dialog theme="dark" :showDialog="showDialog"
                       title="脚本解析" width="500" height="300"
                       v-on:onClickDialogClose="onClickDialogClose">
          <div slot="dialogCont">
            <marvel-grid :titles="titles4FileMgr" :rows="rows4FileMgr" :limit="limit4FileMgr"
                         theme="dark"></marvel-grid>
          </div>
          <div slot="dialogFoot">
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="解析"
                                    icon="icon-rocket"
                                    theme="dark"
                                    v-on:onClick="onClick4ParseOK"></marvel-icon-txt-button>
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="取消"
                                    icon="icon-cancel-circle"
                                    theme="dark"
                                    v-on:onClick="onClick4ParseCancel"></marvel-icon-txt-button>
          </div>
        </marvel-dialog>
      </div>
    </div>
    <div class="tabArea">
      <import-ex-result></import-ex-result>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import ImportExResult from "@/components/1.importex/ImportExResult";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelLoadingMini from "@/walle/widget/loading/MarvelLoadingMini";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelDialog from "@/walle/widget/dialog/MarvelDialog";
  export default {
    components: {
      MarvelGrid,
      ImportExResult,
      MarvelLoadingMini,
      MarvelIconTxtButton,
      MarvelDialog,
      MarvelFrame,
    },
    name: 'ImportExParseInput',
    data: function () {
      return {
        //#region parse
        showDialog: false,
        titles4FileMgr: [{
          label: "CheckBox",
          width: "5%"
        }, {
          label: "文件名",
          width: "13%"
        }, {
          label: "文件类型",
          width: "12%"
        }, {
          label: "时隙模式",
          width: "8%"
        }],
        skip4FileMgr: 0,
        limit4FileMgr: 20,
        rows4FileMgr: []
        //#endregion
      }
    },
    mounted: function () {
      var self = this;


    },
    destroyed: function () {

    },
    methods: {
      onClick4ParseShow: function(){

      },
      onClick4ParseOK: function(){

      },
      onClick4ParseCancel: function(){

      },
      onClickDialogClose: function(){

      }
    }
  }
</script>

<style scoped>
  .importExResultWrapper{
    height:100%;
  }
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
  .title .titleArea .loadingArea{
    padding-top: 10px;
    box-sizing: border-box;
    float: left;
    width: 300px;
    height:100%;
  }
  .title .operationArea{
    height: 100%;
    padding-top: 15px;
    box-sizing: border-box;
    float: right;
  }
  .tabArea{
    height:calc(100% - 62px);
  }
</style>
