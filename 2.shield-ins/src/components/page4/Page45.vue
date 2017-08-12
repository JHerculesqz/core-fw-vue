<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar">
      <div class="crumb">
        <marvel-crumb :items="crumbItems" theme="dark" v-on:onCrumbItemClick="onCrumbItemClick"></marvel-crumb>
      </div>
    </div>
    <div class="leftArea">
      <!--accordionArea start-->
      <marvel-accordion isFolder="false" hasShadow="true"
                        title="管理" titleIcon="icon-user-tie"
                        :defaultSelectLabel="defaultSelectLabel"
                        :items="accordionItems"
                        v-on:accordionItemClick="accordionItemClick"></marvel-accordion>
      <!--accordionArea end-->
    </div>
    <div class="rightArea">
      <div class="panel userPanel" v-bind:class="{ dpn: !isUserMgrShow }">
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
          <marvel-grid :titles="userTitles" :rows="userRows" :limit="limit"
                       v-on:onIconClick="_onIconClick"></marvel-grid>
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
        timerInterval: 2000,
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
        //#region crumb
        crumbItems: [{
          label: "管理"
        }, {
          label: "用户管理"
        }],
        //#endregion
        //#region accordion
        defaultSelectLabel: "用户管理",
        accordionItems: [{
          label: "用户管理",
          icon: "icon-users"
        }, {
          label: "站点管理",
          icon: "icon-office"
        }],
        //#endregion
        //#region userGrid
        isUserMgrShow: true,
        userTitles: [{
          label: "用户名",
          width: "35%"
        }, {
          label: "密码",
          width: "35%"
        }, {
          label: "角色",
          width: "25%"
        }, {
          label: "操作",
          width: "5%"
        }],
        skip: 0,
        limit: 10,
        userRows: [],
        //#endregion
        //#region devMgr
        //#endregion
      }
    },
    mounted: function(){
      var self = this;
      if(this.debug){
        this.user = "debug";
      }
      else{
        this._authorize(function(){
          self._getDevLstMock(function(){
            //1.init gis map
            self.$refs.refGISMap4Mgr.init(self.companyInfo.clientMapCenterX,
              self.companyInfo.clientMapCenterY,
              self.companyInfo.clientMapCenterZoomMin,
              self.companyInfo.clientMapCenterZoomMax,
              "/static/leaflet/images/shit.png");

            //2._getUserLstMock();
            self._getUserLstMock();
          });
        });
      }
    },
    destroyed: function(){

    },
    methods: {
      _authorize: function(oCallback){
        var self = this;

        this.$http.post('/getLoginUser', {}).then(res=>{
          if(res.data.ok){
            self.user = res.data.resultObj.user;
            if(0 == res.data.resultObj.role){
              oCallback();
            }
            else{
              MarvelRouter.to(self.$router, "page41");
            }
          }
        });
      },
      _getDevLstMock: function(oCallback){
        this.companyInfo = {};

        if(this.debug){
          this.companyInfo = {
            clientNo: "client1",
            clientMapCenterX: "31.429",
            clientMapCenterY: "104.589",
            clientMapCenterZoomMin: "5",
            clientMapCenterZoomMax: "18"
          };
          oCallback();
        }
        else{
          this.$http.post('/getCompanyInfo', {}).then(res=>{
            this.companyInfo = res.data.resultObj;
            oCallback();
          });
        }
      },
      _getUserLstMock: function(){
        this.userRows = [];

        if(this.debug){
          for(var i=0;i<10;i++){
            var oUser = {
              user: i,
              pwd: i,
              role: 1
            };
            var oRow = [
              {value: oUser.user, type:"text"},
              {value: oUser.pwd, type:"text"},
              {value: oUser.role, type:"text"},
              {value: [{value: "icon-marvelIcon-20", color:"#808080"}], type:"icon" }
            ];
            this.userRows.push(oRow);
          }
        }
        else{
          this.$http.post('/getUserLst', {}).then(res=>{
            for(var i=0;i<res.data.resultObj.lstUsers.length;i++){
              var oUser = res.data.resultObj.lstUsers[i];
              var oRow = [
                {value: oUser.user, type:"text"},
                {value: oUser.pwd, type:"text"},
                {value: oUser.role, type:"text"},
                {value: [{value: "icon-marvelIcon-20", color:"#808080"}], type:"icon" }
              ];
              this.userRows.push(oRow);
            }
          });
        }
      },
      onCrumbItemClick: function(strItemLabel){
        if("管理" == strItemLabel){
          MarvelRouter.to(this.$router, "page45");
        }
      },
      accordionItemClick: function(oItem){
        //1.update crumb
        this.crumbItems[1].label = oItem.label;

        //2.update isXXMgrShow
        if(oItem.label == "用户管理"){
          this.isUserMgrShow =  true;
          this.$refs.refGISMap4Mgr.showOrHide(false);
        }
        else if(oItem.label == "站点管理"){
          this.isUserMgrShow =  false;
          this.$refs.refGISMap4Mgr.showOrHide(true);
        }
      },
      onClick4AddUser: function(){
        var strUser = this.$refs.refUser.getInputMsg();
        var strPwd = this.$refs.refPwd.getInputMsg();
        var iRole = this.$refs.refRole.getInputMsg();
        if(this.debug){

        }
        else{
          this.$http.post('/addUser', {
            reqBuVoStr: JSON.stringify({
              user: strUser,
              pwd: strPwd,
              role: iRole
            })
          }).then(res=>{
            this._getUserLstMock();
          });
        }
      },
      _onIconClick: function(oRow){
        if(this.debug){

        }
        else{
          this.$http.post('/delUser', {
            reqBuVoStr: JSON.stringify({
              user: oRow[0].value
            })
          }).then(res=>{
            this._getUserLstMock();
          });
        }
      },
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
  .toolbar{
    height: 36px;
    width: 100%;
    background-color: #41475a;
  }
  .crumb{
    margin-top: 11px;
    float: left;
    margin-left: 20px;
  }
  .container .leftArea{
    width: 200px;
    height: 100%;
    background-color: #f4f5f6;
    float: left;
  }
  .container .rightArea{
    width: calc(100% - 200px);
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
