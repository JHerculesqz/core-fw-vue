<template>
  <div class="container large-24 middle-24 small-24 mini-24" v-bind:class="[isContainerFold]">
    <marvel-frame></marvel-frame>
    <div class="toolbar">
      <div class="crumb">
        <marvel-crumb :items="crumbItems" theme="dark" v-on:onCrumbItemClick="onCrumbItemClick"></marvel-crumb>
      </div>
      <div class="switch" v-bind:class="{ dpn: isHideSwitch }">
        <marvel-switch ref="refSwitch4DevMgr" id="refSwitch4DevMgr"
                       v-on:onChange="onChange4Switch"></marvel-switch>
      </div>
    </div>
    <div class="leftArea">
      <!--accordionArea start-->
      <marvel-accordion isFolder="false" hasShadow="true"
                        title="管理" titleIcon="icon-user-tie"
                        :defaultSelectLabel="defaultSelectLabel"
                        :items="accordionItems"
                        v-on:accordionItemClick="accordionItemClick"
                        v-on:afterShowOrHide="afterShowOrHide"></marvel-accordion>
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
                       v-on:onIconClick="onIconClick4DelUser"></marvel-grid>
          <!--grid area end-->
        </div>
      </div>
      <div class="panel devicePanel">
        <div class="mapArea">
          <marvel-leaflet ref="refGISMap4DevMgr" id="refGISMap4DevMgr"></marvel-leaflet>
          <marvel-menu-context ref="refContextMenu"
                               :items="menuItems4DevMgr"
                               v-on:onMenuItemClick="_onContextMenuItemClick"></marvel-menu-context>
          <marvel-list1 :items="listItems" :bargeCount="listBargeCount"
                        v-on:onListItemClick="onListItemClick"></marvel-list1>
          <div class="gridArea">
            <div style="height: 100%">
              <marvel-dashboard title="站点管理">
                <div slot="customArea"></div>
                <div slot="contArea" style="height: 100%">
                  <div class="large-24" style="height: 100%">
                    <marvel-grid :titles="titles4DevMgr" :rows="rows4DevMgr" :limit="limit4DevMgr"
                                 v-on:onIconClick="onIconClick4DevMgr"></marvel-grid>
                  </div>
                </div>
              </marvel-dashboard>
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
  import MarvelAccordion from "@/walle/widget/accordion/MarvelAccordion";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelSwitch from "@/walle/widget/select/MarvelSwitch";
  import MarvelTimer from "@/walle/component/timer";
  import MarvelDashboard from "@/walle/widget/dashboard/MarvelDashboard";
  import MarvelMenuContext from "@/walle/widget/menu/MarvelMenuContext";
  import MarvelList1 from "@/walle/widget/list/MarvelList1";
  export default {
    components: {
      MarvelList1,
      MarvelMenuContext,
      MarvelDashboard,
      MarvelTimer,
      MarvelSwitch,
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
        timerInterval: 1000,
        //#endregion
        //#region authorize
        user: "",
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
        isContainerFold: "",
        //#endregion
        //#region userMgr
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
        //#region switch
        isHideSwitch: true,
        //#endregion
        //#region contextMenu
        menuItems4DevMgr: [{
          icon: "icon-cancel-circle",
          color: "#ff4c4c",
          label: "关站"
        }, {
          icon: "icon-pencil",
          color: "",
          label: "编辑"
        }],
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
        //#region devLst
        devLstEnable: [],
        devLstDisable: [],
        //#endregion
        //#region grid
        titles4DevMgr: [{
          label: "设备ID",
          width: "45%"
        }, {
          label: "设备名称",
          width: "45%"
        }, {
          label: "关站",
          width: "5%"
        }, {
          label: "编辑",
          width: "5%"
        }],
        rows4DevMgr: [],
        limit4DevMgr: 20,
        //#endregion
        //#region listView
        listItems: [],
        listBargeCount: 0
        //#endregion
        //#endregion
      }
    },
    mounted: function(){
      var self = this;

      this._authorize(function(){
        self._getDevLstMock(function(){
          self._initGisMap();
          self._drawGisMap();
          self._drawGrid();
          self._drawListView();
          self._getUserLstMock();
        });

        //2.getStatus by timer
        MarvelTimer.startTimer(function(){
          self._getDevLstMock(function(){
            self._updateGisMap();
            self._drawListView();
            self._drawGrid();
          });
        }, self.timerInterval);
      });
    },
    destroyed: function(){
      MarvelTimer.endTimer();
    },
    methods: {
      _authorize: function(oCallback){
        var self = this;

        if(this.debug){
          this.user = "debug";
        }
        else{
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
          this.isHideSwitch = true;
          this.onChange4Switch();
        }
        else if(oItem.label == "站点管理"){
          this.isUserMgrShow =  false;
          this.isHideSwitch = false;
          this.onChange4Switch();
        }
      },
      afterShowOrHide: function(bIsFolder){
        if(bIsFolder){
          this.isContainerFold = "fold";
        }
        else{
          this.isContainerFold = "";
        }
      },
      _getDevLstMock: function(oCallback){
        this.companyInfo = {};
        this.devLstEnable = [];
        this.devLstDisable = [];

        if(this.debug){
          this.companyInfo = {
            clientNo: "client1",
            clientMapCenterX: "31.429",
            clientMapCenterY: "104.589",
            clientMapCenterZoomMin: "5",
            clientMapCenterZoomMax: "18"
          };

          for(var i=0;i<5;i++){
            var oDev = {
              id: i,
              clientNo: "client1",
              devId: "3217030228" + i,
              devType: 1,
              x: parseFloat(this.companyInfo.clientMapCenterX) + Math.random() * 10,
              y: parseFloat(this.companyInfo.clientMapCenterY) + Math.random() * 10,
              lastUpdateTime: "2017-07-14 10:00:00.540",
              status: 0,
              hasWarn: Math.random() > 0.5 ? true: false,
              warnCount: (Math.random() * 10).toFixed(0),
              uiStatus: Math.random() > 0.5 ? "加工": "待机",
              uiImg: Math.random() > 0.5 ? "/static/demo/deviceIcon-01.png": "/static/demo/deviceIcon-04.png",
              uiTips: "<b>3217030228_1</b><br>状态:离线<br>告警数量:1<br>"
            };
            this.devLstEnable.push(oDev);
          }
          for(var i=5;i<10;i++){
            var oDev = {
              id: i,
              clientNo: "client1",
              devId: "3217030228" + i,
              devType: 1,
              x: parseFloat(this.companyInfo.clientMapCenterX) + Math.random() * 10,
              y: parseFloat(this.companyInfo.clientMapCenterY) + Math.random() * 10,
              lastUpdateTime: "2017-07-14 10:00:00.540",
              status: 0,
              hasWarn: Math.random() > 0.5 ? true: false,
              warnCount: (Math.random() * 10).toFixed(0),
              uiStatus: Math.random() > 0.5 ? "加工": "待机",
              uiImg: Math.random() > 0.5 ? "/static/demo/deviceIcon-01.png": "/static/demo/deviceIcon-04.png",
              uiTips: "<b>3217030228_1</b><br>状态:离线<br>告警数量:1<br>"
            };
            this.devLstDisable.push(oDev);
          }

          oCallback();
        }
        else{
          this.$http.post('/getCompanyInfo', {}).then(res=>{
            this.companyInfo = res.data.resultObj;

            this.$http.post('/getDevLstByEnable', {
              reqBuVoStr: JSON.stringify({
                clientNo:"client1"
              })
            }).then(res=>{
              this.devLstEnable = res.data.resultObj;

              this.$http.post('/getDevLstByDisable', {
                reqBuVoStr: JSON.stringify({
                  clientNo:"client1"
                })
              }).then(res=>{
                this.devLstDisable = res.data.resultObj;
                oCallback();
              });
            });
          });
        }
      },
      _initGisMap: function(){
        this.$refs.refGISMap4DevMgr.init(this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          this.companyInfo.clientMapCenterZoomMin,
          this.companyInfo.clientMapCenterZoomMax,
          "/static/leaflet/images/shit.png");
      },
      _drawGisMap: function(){
        for(var i=0;i<this.devLstEnable.length;i++){
          var oDev = this.devLstEnable[i];
          this.$refs.refGISMap4DevMgr.addIcon(oDev.devId, oDev.x, oDev.y, oDev.uiImg, oDev.uiTips, oDev,
            this._onDBClickGisMap, undefined, this._onContextMenuGisMap);
        }
      },
      _onDBClickGisMap: function(strId){

      },
      _onContextMenuGisMap: function(oEvent, iX, iY, oBuObj){
        this.$refs.refContextMenu.showSubMenu(iX, iY, oBuObj);
      },
      _onContextMenuItemClick: function(strMenuLabel, oBuObj){
        //1.del->"关站"
        if("关站" == strMenuLabel){
          this._devEnable(oBuObj.devId, false);
          this.$refs.refContextMenu.hideSubMenu();
        }
        //2.edit->"编辑"
        else if("编辑" == strMenuLabel){
          this._updateDevName(oBuObj.devId, "");
        }
      },
      _updateGisMap: function(){
        var lstDevId = [];
        for(var i=0;i<this.devLstEnable.length;i++) {
          var oDev = this.devLstEnable[i];
          lstDevId.push(oDev.devId);
        }
        var oResDiffIcon = this.$refs.refGISMap4DevMgr.getNeedDiffIconLst(lstDevId);

        //1.处理待关站的设备
        for(var i=0;i<oResDiffIcon.delDevIdLst.length;i++){
          var strDevId = oResDiffIcon.delDevIdLst[i];
          this.$refs.refGISMap4DevMgr.delIcon(strDevId);
        }

        //2.处理待添加的设备
        for(var i=0;i<oResDiffIcon.addDevIdLst.length;i++){
          var strDevId = oResDiffIcon.addDevIdLst[i];
          var oDev = this._findByDevId(strDevId);
          this.$refs.refGISMap4DevMgr.addIcon(oDev.devId, oDev.x, oDev.y, oDev.uiImg, oDev.uiTips, oDev,
            this._onDBClickGisMap, undefined, this._onContextMenuGisMap);
        }

        //3.处理待更新的设备
        for(var i=0;i<oResDiffIcon.updateDevIdLst.length;i++){
          var strDevId = oResDiffIcon.updateDevIdLst[i];
          var oDev = this._findByDevId(strDevId);
          this.$refs.refGISMap4DevMgr.updateIcon(oDev.devId, oDev.x, oDev.y, oDev.uiImg, oDev.uiTips,
            false, oDev);
        }
      },
      _findByDevId: function(strDevId){
        for(var i=0;i<this.devLstEnable.length;i++) {
          var oDev = this.devLstEnable[i];
          if(oDev.devId == strDevId){
            return oDev;
          }
        }
      },
      _drawGrid: function(){
        this.rows4DevMgr = [];
        for(var i=0;i<this.devLstEnable.length;i++){
          var oDev = this.devLstEnable[i];
          var oRow = [
            {value: oDev.devId, type:"text"},
            {value: oDev.devName, type:"text"},
            {value: [{value: "icon-marvelIcon-20", color:"#808080"}], type:"icon" },
            {value: [{value: "icon-pencil", color:"#808080"}], type:"icon" }
          ];
          this.rows4DevMgr.push(oRow);
        }
      },
      _drawListView: function(){
        this.listItems = [];

        for(var i=0;i<this.devLstDisable.length;i++){
          var oDev = this.devLstDisable[i];
          this.listItems.push({
            icon: oDev.uiImg,
            devId: oDev.devId,
            devName: oDev.devName
          });
        }
        this.listBargeCount = this.listItems.length;
      },
      onListItemClick: function(oItem){
        this._devEnable(oItem.devId, true);
      },
      onChange4Switch: function(){
        var bIsGisView = this.$refs.refSwitch4DevMgr.getCheckItem();
        if(bIsGisView){
          this.$refs.refGISMap4DevMgr.showOrHide(true);
        }
        else{
          this.$refs.refGISMap4DevMgr.showOrHide(false);
        }
      },
      onIconClick4DevMgr: function(oRow, oCell){
        //1.del->"icon-marvelIcon-20"
        if("icon-marvelIcon-20" == oCell.value){
          this._devEnable(oRow[0].value, false);
        }
        //2.edit->"icon-pencil"
        else if("icon-pencil" == oCell.value){
          this._updateDevName(oRow[0].value, "");
        }
      },
      _devEnable: function(strDevId, bIsEnable){
        this.$http.post('/devEnable', {
          reqBuVoStr: JSON.stringify({
            clientNo:"client1",
            devId: strDevId,
            enable: bIsEnable
          })
        }).then(res=>{
          if(res.data.ok){
            if(bIsEnable){
              alert("开站成功...");
            }
            else{
              alert("关站成功...");
            }
          }
        });
      },
      _updateDevName: function(strDevId, strDevNameNew){
        alert("努力开发ing...");
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
      onIconClick4DelUser: function(oRow){
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
  .switch{
    float: right;
    margin-right: 20px;
    margin-top: 7px;
  }
  .container .leftArea{
    width: 200px;
    height: calc(100% - 36px);
    background-color: #f4f5f6;
    float: left;
  }
  .container .rightArea{
    width: calc(100% - 200px);
    height: calc(100% - 36px);
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
  .container .rightArea .panel .downArea{
    height:calc(100% - 106px);
  }
  .container .rightArea .devicePanel{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .container .rightArea .panel .mapArea{
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    position: relative;
  }
  .container .rightArea .panel .mapArea .gridArea{
    width: 100%;
    height: calc(100% - 40px);
    padding: 20px;
    box-sizing: border-box;
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
  .fold .leftArea{
    width: 78px;
  }
  .fold .rightArea{
    width: calc(100% - 78px);
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
