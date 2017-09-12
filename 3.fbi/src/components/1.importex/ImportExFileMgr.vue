<template>
  <div style="width:100%;height:100%;">
    <div class="title">
      <div class="titleArea">
        <div class="titleIcon icon-upload"></div>
        <div class="titleName">文件列表</div>
        <div class="loadingArea">
          <marvel-loading-mini ref="refMiniLoading" theme="dark"></marvel-loading-mini>
        </div>
      </div>
      <div class="operationArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="上传"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClick4UploadShow"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="下载模板"
                                icon="icon-download"
                                theme="dark"
                                v-on:onClick="onClick4Download"></marvel-icon-txt-button>
        <marvel-dialog theme="dark" :showDialog="showDialog"
                       title="数据上传" width="500" height="300"
                       v-on:onClickDialogClose="onClickDialogClose">
          <div slot="dialogCont">
            <div class="fileSelectArea">
              <marvel-upload ref="ref4Upload" theme="dark"
                             placeHolder="Please choose a file"></marvel-upload>
            </div>
            <div>
              <marvel-multi-input ref="ref4Remark" :status="status4Remark"
                                  placeHolder="请输入备注信息..."
                                  height="100"
                                  :inputMsg="inputMsg4Remark" theme="dark">
              </marvel-multi-input>
            </div>
          </div>
          <div slot="dialogFoot">
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="上传"
                                    icon="icon-upload"
                                    theme="dark"
                                    v-on:onClick="onClick4UploadOK"></marvel-icon-txt-button>
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="取消"
                                    icon="icon-cancel-circle"
                                    theme="dark"
                                    v-on:onClick="onClick4UploadCancel"></marvel-icon-txt-button>
          </div>
        </marvel-dialog>
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
  import MarvelDialog from "@/walle/widget/dialog/MarvelDialog";
  import MarvelLoadingMini from "@/walle/widget/loading/MarvelLoadingMini";
  import MarvelUpload from "@/walle/widget/upload/MarvelUpload";
  import MarvelMultiInput from "@/walle/widget/input/MarvelMultiInput";
  export default {
    components: {
      MarvelMultiInput,
      MarvelUpload,
      MarvelLoadingMini,
      MarvelDialog,
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
        //#region fileGrid
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
        //#region upload dialog
        showDialog: false,
        file: undefined,
        status4Remark: "",
        inputMsg4Remark: "",
        //#endregion
      }
    },
    mounted: function () {
      var self = this;

      if (this.debug) {
        self._getFileListMock();
      }
      else{
        //TODO:
      }
    },
    destroyed: function () {

    },
    methods: {
      //#region upload
      onClick4UploadShow: function(){
        this._updateMem4UploadShow();
      },
      onClick4UploadOK: function(){
        var self = this;

        if(this.debug){
          //1._updateMem4UploadStart
          self._updateMem4UploadStart();

          //2.更新进度条
          self._updateLoadingBar4UploadStartMock(function(){
            //3.更新文件列表
            self._getFileListMock();
          });
        }
        else{
          //TODO:
        }
      },
      onClick4UploadCancel: function(){
        this._updateMem4UploadCancel();
      },
      onClickDialogClose: function(){
        this._updateMem4UploadCancel();
      },
      _getFileListMock: function(){
        this.rows = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 9; j++) {
            if(j != 8){
              var oCell = {
                value: "value" + Math.random() * 100,
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
      },
      _updateMem4UploadShow : function(){
        this.showDialog = true;
        this.file = undefined;
        this.inputMsg4Remark = "";
      },
      _updateMem4UploadStart : function(){
        this.showDialog = false;
        this.file = this.$refs.ref4Upload.getFile();
        this.inputMsg4Remark = this.$refs.ref4Remark.getInputMsg();
      },
      _updateLoadingBar4UploadStartMock : function(oCallback){
        var self = this;

        self.$refs.refMiniLoading.showEx("取消");
        self.$refs.refMiniLoading.setProgress(10, "上传ing");
        setTimeout(function(){
          self.$refs.refMiniLoading.setProgress(30, "上传ing");
          setTimeout(function(){
            self.$refs.refMiniLoading.setProgress(60, "上传ing");
            setTimeout(function(){
              self.$refs.refMiniLoading.setProgress(100, "完成");
              self.$refs.refMiniLoading.hideEx();
              oCallback();
            },1000);
          },1000);
        },1000);
      },
      _updateMem4UploadCancel : function(){
        this.showDialog = false;
        this.file = undefined;
        this.inputMsg4Remark = "";
      },
      //#endregion
      //#region download
      onClick4Download: function(){
          if(this.debug){
              alert("下载成功...");
          }
          else{
              //TODO:
          }
      }
      //#endregion
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
  .fileSelectArea{
    margin-bottom: 20px;
  }
  .gridArea{
    height:calc(100% - 62px);
  }
</style>
