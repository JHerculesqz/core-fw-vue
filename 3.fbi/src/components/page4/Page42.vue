<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar large-24 middle-24 small-24 mini-24">
      <div class="crumb large-12 middle-20 small-20 mini-20">
        <marvel-crumb :items="crumbItems" theme="dark" v-on:onCrumbItemClick="onCrumbItemClick"></marvel-crumb>
      </div>
    </div>
    <div class="pageFrameWrapper">
      <div class="session">
        <div class="sessionName">设备详情</div>
        <div style="height: 400px;">
          <marvel-dashboard title="基础信息">
            <div slot="customArea"></div>
            <div slot="contArea" style="height: 100%;">
              <div class="detailsCont large-24">
                <div class="left mini-10">
                  <div class="deviceShowArea"
                       v-bind:style="{ backgroundImage : 'url(' + data4SingleDev.uiImgDetails + ')'}"></div>
                  <div class="deviceDescribe"></div>
                </div>
                <div class="right mini-14">
                  <marvel-tab :tabItems="tabItems">
                    <marvel-tab-item :isActive="tabItems[0].isActive">
                      <marvel-grid :titles="titles4BasicInfo" :rows="rows4BasicInfo" limit="5"></marvel-grid>
                    </marvel-tab-item>
                  </marvel-tab>
                </div>
              </div>
            </div>
          </marvel-dashboard>
        </div>
      </div>

      <div class="session">
        <div class="dashboards">
          <div class="gridDashboard">
            <marvel-dashboard title="告警列表">
              <div slot="customArea">
                <div class="searchConfigArea">

                  <div class="searchConfig">
                    <div class="configName configName2">仅查看未消除的告警</div>
                    <div class="switchArea">
                      <marvel-switch ref="refSwitch" id="refSwitch"></marvel-switch>
                    </div>
                  </div>
                  <div class="searchConfig">
                    <div class="configName">查看周期(天):</div>
                    <div class="configInput">
                      <marvel-drop-down-button ref="ref4Days"></marvel-drop-down-button>
                    </div>
                  </div>
                </div>
              </div>
              <div slot="contArea" style="height: 100%">
                <marvel-grid :titles="titles4Warn" :rows="rows4Warn" limit="10"></marvel-grid>
              </div>
            </marvel-dashboard>
          </div>
        </div>
      </div>

      <div class="session">
        <div style="height: 400px;">
          <marvel-dashboard title="高级信息">
            <div slot="customArea"></div>
            <div slot="contArea" style="height: 100%">
              <div class="detailsCont large-24">
                <marvel-grid :titles="titles4AdvInfo" :rows="rows4AdvInfo" limit="10"></marvel-grid>
              </div>
            </div>
          </marvel-dashboard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb";
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet";
  import MarvelSwitch from "@/walle/widget/select/MarvelSwitch";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelChartRadar from "@/walle/widget/echart/MarvelChartRadar";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelButton from "@/walle/widget/button/MarvelButton";
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelDashboard from "@/walle/widget/dashboard/MarvelDashboard";
  import MarvelRouter from "@/walle/component/router";
  import MarvelTimer from "@/walle/component/timer";
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelDropDownButton from "@/walle/widget/button/MarvelDropDownButton";
  export default {
    components: {
      MarvelDropDownButton,
      MarvelTabItem,
      MarvelTab,
      MarvelDashboard,
      MarvelPrimaryButton,
      MarvelButton,
      MarvelInput,
      MarvelChartRadar,
      MarvelIconTxtButton,
      MarvelGrid,
      MarvelSwitch,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame,
      MarvelRouter,
      MarvelTimer},
    name: 'page42',
    data: function() {
      return {
        //#region const
        debug: false,
        timerInterval: 2000,
        //#endregion
        //#region crumbItems
        crumbItems: [{
          label: "设备监控"
        }, {
          label: "单站管理"
        }],
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
        //#region devId
        clientNo: "",
        devId: 0,
        //#endregion
        //#region data4SingleDev
        data4SingleDev: {
          basicInfos: [],
          advInfos: [],
          warnLst:[]
        },
        //#endregion
        //#region tab
        tabItems: [{
          label: "基础信息",
          isActive: true
        }],
        //#endregion
        //#region basicInfo
        titles4BasicInfo: [{
          label: "参数名称",
          width: "50%"
        }, {
          label: "当前值",
          width: "50%"
        }],
        rows4BasicInfo: [],
        //#endregion
        //#region 4warn
        titles4Warn: [{
          label: "",
          width: "3%"
        }, {
          label: "告警ID",
          width: "8%"
        }, {
          label: "告警内容",
          width: "20%"
        }, {
          label: "产生时间",
          width: "20%"
        }, {
          label: "消除时间",
          width: "20%"
        }, {
          label: "常见处理方法",
          width: "29%"
        }],
        rows4Warn: [],
        limit4Warn: [{
          label: "10",
          icon: ""
        }, {
          label: "30",
          icon: ""
        }, {
          label: "90",
          icon: ""
        }, {
          label: "所有",
          icon: ""
        }],
        //#endregion
        //#region advInfo
        titles4AdvInfo: [{
          label: "参数ID",
          width: "15%"
        }, {
          label: "参数名称",
          width: "25%"
        }, {
          label: "当前值",
          width: "30%"
        }, {
          label: "更新时间",
          width: "30%"
        }],
        rows4AdvInfo: [],
        limit4AdvInfo: 10,
        //#endregion
      }
    },
    mounted: function(){
      var self = this;

      //0.set clientNo/devId
      this.clientNo = MarvelRouter.getParam(this.$route, "clientNo");
      this.devId = MarvelRouter.getParam(this.$route, "devId");
      this._getCompanyInfo(function(){
        //1.init ref4Days/refSwitch
        self.$refs.ref4Days.init(self.limit4Warn, "所有");
        self.$refs.refSwitch.setStatus(false, false);

        //2.setData
        self._getData4SingleDevMock(function(){
          //1.1._setData4WarnGrid
          self._setData4WarnGrid();

          //1.2._setData4BasicInfo
          self._setData4BasicInfo();

          //1.3._setData4AdvInfo
          self._setData4AdvInfo();
        });

        //3.timer
        MarvelTimer.startTimer(function(){
          //1.setData
          self._getData4SingleDevMock(function(){
            //1.1._setData4WarnGrid
            self._setData4WarnGrid();

            //1.2._setData4BasicInfo
            self._setData4BasicInfo();

            //1.3._setData4AdvInfo
            self._setData4AdvInfo();
          });
        }, self.timerInterval);
      });
    },
    destroyed: function(){
      MarvelTimer.endTimer();
    },
    methods: {
      _getCompanyInfo: function(oCallback){
        if(this.debug){
          this.companyInfo = {
            clientNo: "client1",
            clientMapCenterX: "31.429",
            clientMapCenterY: "104.589",
            clientMapCenterZoomMin: "5",
            clientMapCenterZoomMax: "18",
            logoImgUrl: "/static/demo/logo1.png",
            sloganImgUrl: "/static/demo/slogan1.png",
            sloganLabel: "锐 意 进 取 ， 科 技 创 新",
            sloganCopyRight: "Copyright 2017 Raycus – 鄂ICP备16005435号-3"
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
      onCrumbItemClick: function(strItemLabel){
        if("设备监控" == strItemLabel){
          MarvelRouter.to(this.$router, "page41");
        }
      },
      _getData4SingleDevMock: function(oCallback){
        var self = this;

        var strDays = this.$refs.ref4Days.getSelectItem();
        var bIsNotAll = this.$refs.refSwitch.getCheckItem();

        if(this.debug){
          //1.basicInfos
          self.data4SingleDev.basicInfos = [
            [{value: "设备ID", type:"text"}, {value: Math.random(), type:"text"}],
            [{value: "设备名称", type:"text"}, {value: "1", type:"text"}],
            [{value: "状态", type:"text"}, {value: "1", type:"text"}],
            [{value: "告警", type:"text"}, {value: "1", type:"text"}],
            [{value: "最近更新时间", type:"text"}, {value: "1", type:"text"}]
          ];

          //2.warnLst
          var lstWarn = [];
          var iCount = parseInt(Math.random() * 20);
          for(var i=0;i<iCount;i++) {
            var oRow = [];
            for (var j = 0; j < 6; j++) {
              oRow.push({value: "value" + i, type: "text"});
            }
            lstWarn.push(oRow);
          }
          self.data4SingleDev.warnLst = lstWarn;

          //3.advInfos
          self.data4SingleDev.advInfos = [
            [{value: "1001", type:"text"}, {value: "经度", type:"text"}, {value: Math.random(), type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1002", type:"text"}, {value: "纬度", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1003", type:"text"}, {value: "软件版本", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1004", type:"text"}, {value: "机床幅面", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1005", type:"text"}, {value: "激光器型号", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1006", type:"text"}, {value: "电机型号", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1007", type:"text"}, {value: "切割头型号", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1008", type:"text"}, {value: "X轴脉冲当量", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1009", type:"text"}, {value: "X轴最大行程", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1010", type:"text"}, {value: "Y轴双边驱动", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1011", type:"text"}, {value: "Y轴脉冲当量", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1012", type:"text"}, {value: "Y轴最大行程", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1013", type:"text"}, {value: "激光器类型", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1014", type:"text"}, {value: "激光器控制方式", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1015", type:"text"}, {value: "调高器控制方式", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1016", type:"text"}, {value: "加工时切割速度", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1017", type:"text"}, {value: "加工时开光延时", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1018", type:"text"}, {value: "加工时切割功率", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1019", type:"text"}, {value: "加工时切割频率", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1020", type:"text"}, {value: "加工时切割高度", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1021", type:"text"}, {value: "加工时切割气体", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1022", type:"text"}, {value: "加工时切割气压", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1023", type:"text"}, {value: "加工时峰值电流", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1024", type:"text"}, {value: "加工时启用分段穿孔", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1025", type:"text"}, {value: "加工时启用渐进穿孔", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1026", type:"text"}, {value: "加工时穿孔延时", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1027", type:"text"}, {value: "加工时穿孔功率", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}],
            [{value: "1028", type:"text"}, {value: "加工时穿孔高度", type:"text"}, {value: "1", type:"text"}, {value: "2017-7-1 12:11:11", type:"text"}]
          ];

          oCallback();
        }
        else{
          //1.post getBasicInfoByDevId
          self.$http.post('/getBasicInfoByDevId', {
            reqBuVoStr: JSON.stringify({
              clientNo: self.clientNo,
              devId: self.devId
            })
          }).then(res=>{
            //2.oDevBasicInfo to basicInfos/advInfos
            if(res.data.ok){
              var oDevBasicInfo = res.data.resultObj;
              self.data4SingleDev.uiImgDetails = oDevBasicInfo.uiImgDetails;
              self.data4SingleDev.basicInfos = [];
              for(var i=0;i<oDevBasicInfo.lstBasicInfo.length;i++){
                var oBasicInfo = oDevBasicInfo.lstBasicInfo[i];
                var oRow = [
                  {value: oBasicInfo.devPropAlias, type:"text"},
                  {value: oBasicInfo.devPropValue, type:"text"}
                ];
                self.data4SingleDev.basicInfos.push(oRow);
              }
              self.data4SingleDev.advInfos = [];
              for(var i=0;i<oDevBasicInfo.lstAdvInfo.length;i++){
                var oAdvInfo = oDevBasicInfo.lstAdvInfo[i];
                var oRow = [
                  {value: oAdvInfo.devPropId, type:"text"},
                  {value: oAdvInfo.devPropAlias, type:"text"},
                  {value: oAdvInfo.devPropValue, type:"text"},
                  {value: oDevBasicInfo.lastUpdateTime, type:"text"}
                ];
                self.data4SingleDev.advInfos.push(oRow);
              }

              //3.post getWarnLstByDevId
              self.$http.post('/getWarnLstByDevId', {
                reqBuVoStr: JSON.stringify({
                  clientNo: self.clientNo,
                  devId: self.devId,
                  days: strDays,
                  all: !bIsNotAll
                })
              }).then(res=>{
                //4.oDevBasicInfo to arrBasicInfo
                self.data4SingleDev.warnLst = [];
                var lstWarnInfo = res.data.resultObj;
                for(var i=0;i<lstWarnInfo.length;i++){
                  var oWarnInfo = lstWarnInfo[i];
                  var strColor = oWarnInfo.end ? "#808080" : "#ff4c4c";
                  var oRow = [
                    {value: [{value: "icon-marvelIcon-17", color:strColor}], type:"icon" },
                    {value: oWarnInfo.warnId, type:"text"},
                    {value: oWarnInfo.warnContent, type:"text"},
                    {value: oWarnInfo.startTime, type:"text"},
                    {value: oWarnInfo.endTime, type:"text"},
                    {value: oWarnInfo.warnProcess, type:"text"}
                  ];
                  self.data4SingleDev.warnLst.push(oRow);
                }

                oCallback();
              });
            }
          });
        }
      },
      _setData4BasicInfo: function(){
        this.rows4BasicInfo = this.data4SingleDev.basicInfos;
      },
      _setData4AdvInfo: function(){
        this.rows4AdvInfo = this.data4SingleDev.advInfos;
      },
      _setData4WarnGrid: function(){
        this.rows4Warn = this.data4SingleDev.warnLst;
      }
    }
  }
</script>

<style scoped>
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
  .pageFrameWrapper{
    width: 100%;
    padding: 16px 40px 0 40px;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #fafafa;
    height:calc(100% - 25px);
  }
  .pageFrameWrapper .session{
    width: 100%;
    margin-bottom: 30px;
  }
  .pageFrameWrapper .session:last-child{
    margin-bottom: 20px;
  }
  .pageFrameWrapper .session .sessionName{
    line-height: 22px;
    color: #444;
    font-size: 22px;
    font-family: arial,"微软雅黑",sans-serif;
    letter-spacing: 3px;
    margin-bottom: 16px;
  }
  .pageFrameWrapper .session .searchConfigArea{
    width: 100%;
    height: 48px;
    padding-top: 9px;
    /*overflow-flow: hidden;*/
    clear: both;
    box-sizing: border-box;
  }

  .searchConfigArea .searchConfig{
    float: right;
    /*overflow: hidden;*/
    margin-left: 20px;

  }
  .searchConfigArea .searchConfig .configName, .searchConfigArea .searchConfig .configInput{
    float: left;
  }
  .searchConfigArea .searchConfig .configInput{
    width: calc(100% - 120px);
  }
  .searchConfigArea .searchConfig .switchArea{
    padding-top: 5px;
    float: left;
  }
  .searchConfigArea .searchConfig .configName{
    font-family: arial, "微软雅黑", sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 32px;
    width: 100px;
  }
  .searchConfigArea .searchConfig .configName2{
    width: auto;
    margin-right: 10px;
  }
  .searchConfigArea .searchConfig .searchBtn{
    float: right;
  }

  .dashboards{
    overflow: hidden;
  }
  .dashboards .chartDashboard{
    height:400px;
  }
  .dashboards .gridDashboard{
    height: 400px;
  }

  .detailsCont{
    height:100%;
    background-color: #ffffff;
  }
  .detailsCont .left,.detailsCont .right{
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .detailsCont .left{
    border: 1px dashed #d5d5d5;
  }
  .detailsCont .left .deviceShowArea{
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
  }
  .detailsCont .left .deviceDescribe{
    font-family: arial, "微软雅黑", sans-serif;
    font-size: 14px;
    height:calc( 100% - 380px);
    color: #666;
    line-height: 22px;
  }
</style>
