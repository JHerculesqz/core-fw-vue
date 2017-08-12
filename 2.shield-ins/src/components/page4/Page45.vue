<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="leftArea">
      <!--accordionArea start-->
      <marvel-accordion isFolder="false" hasShadow="true"
                        title="管理" titleIcon="icon-user-tie"
                        :items="accordionItems"></marvel-accordion>
      <!--accordionArea end-->
    </div>
    <div class="rightArea">
      <div class="panel userPanel dpn">
        <div class="upArea hasMargin">
          <div class="upAreaItem large-7 small-12 mini-24">
            <!--input area start-->
            <marvel-input ref="refUser" placeHolder="请输入用户名..." errMsg="输入错误..."></marvel-input>
            <!--input area end-->
          </div>
          <div class="upAreaItem large-7 small-12 mini-24">
            <!--input area start-->
            <marvel-input ref="refPwd" placeHolder="请输入用户密码..." errMsg="输入错误..."></marvel-input>
            <!--input area end-->
          </div>
          <div class="upAreaItem large-7 small-12 mini-24">
            <!--input area start-->
            <marvel-input ref="refRole" placeHolder="请输入用户角色..." errMsg="输入错误..."></marvel-input>
            <!--input area end-->
          </div>
          <div class="upAreaItem large-3 small-12 mini-24">
            <div class="btnWrapper">
              <!--btn area start-->
              <marvel-primary-button ref="refAddUser" label="新建用户"
                                     v-on:onClick="onClick4AddUser"></marvel-primary-button>
              <!--btn area end-->
            </div>
          </div>
        </div>
        <div class="downArea">
          <!--grid area start-->
          <marvel-grid :titles="userTitles" :rows="userRows"></marvel-grid>
          <!--grid area end-->
        </div>
      </div>
      <div class="panel devicePanel">
        <div class="mapArea">
          <marvel-leaflet ref="refGISMap4Mgr" id="refGISMap4Mgr"></marvel-leaflet>
        </div>
        <div class="deviceArea">
          <div class="deviceIcons">
            <div class="deviceIcon select"></div>
            <div class="deviceIcon"></div>
            <div class="deviceIcon"></div>
            <div class="deviceIcon"></div>
          </div>
          <div class="deviceInfo">
            <div class="deviceInfoArea">
              <div class="deviceInfoText">设备ID：01001</div>
              <div class="deviceInfoText">设备名称：device1</div>
              <div class="deviceInfoText">经度：100.11</div>
              <div class="deviceInfoText">纬度：12.001</div>
            </div>
            <div class="deviceOperation">
              <div class="deviceOperationBox">
                <div class="add icon-plus"></div>
                <div class="del icon-minus"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb";
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet";
  import MarvelLocation from "@/walle/component/location"
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelRouter from "@/walle/component/router";
  import MarvelAccordion from "../../walle/widget/accordion/MarvelAccordion";
  import MarvelGrid from "../../walle/widget/grid/MarvelGrid";
  export default {
    components: {
      MarvelGrid,
      MarvelAccordion,
      MarvelInput,
      MarvelPrimaryButton,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame,
      MarvelRouter},
    name: 'page45',
    data: function() {
      return {
        //#region const
        debug: false,
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
        //#region accordion
        accordionItems: [{
          label: "用户管理",
          icon: "icon-users"
        }, {
          label: "站点管理",
          icon: "icon-office"
        }],
        //#endregion
        //#region userGrid
        userTitles: [{
          label: "用户名",
          width: "25%"
        }, {
          label: "密码",
          width: "25%"
        }, {
          label: "角色",
          width: "25%"
        }, {
          label: "操作",
          width: "25%"
        }],
        skip: 0,
        limit: 10,
        userRows: []
        //#endregion
      }
    },
    mounted: function(){
      var self = this;
      this.companyInfo = {
        clientNo: "client1",
        clientMapCenterX: "31.429",
        clientMapCenterY: "104.589",
        clientMapCenterZoomMin: "5",
        clientMapCenterZoomMax: "18"
      };
      self.$refs.refGISMap4Mgr.init(self.companyInfo.clientMapCenterX,
        self.companyInfo.clientMapCenterY,
        self.companyInfo.clientMapCenterZoomMin,
        self.companyInfo.clientMapCenterZoomMax,
        "/static/leaflet/images/shit.png");
    },
    destroyed: function(){

    },
    methods: {
      onClick4AddUser: function(){
        alert(1);
      }
    }
  }
</script>

<style scoped>
  .dpn{
    display: none;
  }
  .container{
    height: 100%;
  }
  .container .leftArea{
    width: 280px;
    height: 100%;
    background-color: #f4f5f6;
    float: left;
  }
  .container .rightArea{
    width: calc(100% - 280px);
    height: 100%;
    float: right;
  }
  .container .rightArea .userPanel{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
  }
  .container .rightArea .panel .upArea{
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .container .rightArea .panel .upArea .upAreaItem{
    height: 36px;
  }
  .container .rightArea .panel .upArea .upAreaItem .btnWrapper{
    float: right;
  }
  .container .rightArea .devicePanel{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .container .rightArea .panel .mapArea{
    width: 100%;
    height: 100%;
  }
  .container .rightArea .panel .deviceArea{
    width: calc(100% - 40px);
    height: 120px;
    left: 20px;
    bottom: 20px;
    padding: 16px;
    box-sizing: border-box;
    position: absolute;
    background-color: #fff;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.25);
    z-index: 1000;
  }
  .container .rightArea .panel .deviceArea .deviceIcons{
    height: 100%;
    width: calc(100% - 360px);
    float: left;
    border-right: 1px dashed #d5d5d5;
  }
  .container .rightArea .panel .deviceArea .deviceIcon{
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: 3px solid transparent;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    background: url("/static/demo/deviceIcon-01.png") no-repeat center;
    background-size: cover;
  }
  .container .rightArea .panel .deviceArea .select{
    background-color: #3399ff;
    border: 3px solid #3399ff;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.25);
  }
  .container .rightArea .panel .deviceArea .deviceInfo{
    height: 100%;
    width: 356px;
    padding-left: 20px;
    box-sizing: border-box;
    float: left;
  }
  .container .rightArea .panel .deviceArea .deviceInfo .deviceInfoArea{
    height: calc(100% - 60px);
  }
  .container .rightArea .panel .deviceArea .deviceInfo .deviceInfoArea .deviceInfoText{
    line-height: 24px;
    font-size: 14px;
    font-family: arial, "微软雅黑", sans-serif;
    color: #666;
  }
  .container .rightArea .panel .deviceArea .deviceInfo .deviceOperation{
    height: 60px;
  }
  .deviceOperation .deviceOperationBox{
    height: 100%;
    padding: 18px 0;
    float: right;
  }
  .deviceOperation .deviceOperationBox .add{
    float: left;
    height: 24px;
    width: 24px;
    margin-right: 20px;
    color: #3399ff;
    font-size: 18px;
    line-height: 24px;
    border: 2px solid #3399ff;
    border-radius: 100%;
    text-align: center;
    cursor: pointer;
  }
  .deviceOperation .deviceOperationBox .del{
    float: left;
    height: 24px;
    width: 24px;
    color: #ff4c4c;
    font-size: 18px;
    line-height: 24px;
    border: 2px solid #ff4c4c;
    border-radius: 100%;
    text-align: center;
    cursor: pointer;
  }
</style>
