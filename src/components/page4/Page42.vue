<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar large-24 middle-24 small-24 mini-24">
      <div class="crumb large-12 middle-20 small-20 mini-20">
        <marvel-crumb :items="crumbItems" theme="dark"></marvel-crumb>
      </div>
    </div>
    <div class="pageFrameWrapper">
      <div class="session">
        <div class="sessionName">告警信息</div>
        <div class="searchConfigArea">
          <div class="searchConfig large-5 small-8 mini-24">
            <div class="configName">开始时间:</div>
            <div class="configInput">
              <marvel-input ref="ref4StartTime" status="" placeHolder="Please enter..."
                            errMsg="输入错误..."></marvel-input>
            </div>
          </div>
          <div class="searchConfig large-5 small-8 mini-24">
            <div class="configName">结束时间:</div>
            <div class="configInput">
              <marvel-input ref="ref4EndTime" status="" placeHolder="Please enter..."
                            errMsg="输入错误..."></marvel-input>
            </div>
          </div>
          <div class="searchConfig large-5 small-8 mini-24">
            <div class="configName">告警ID:</div>
            <div class="configInput">
              <marvel-input ref="ref4WarnID" status="" placeHolder="Please enter..."
                            errMsg="输入错误..."></marvel-input>
            </div>
          </div>
          <div class="searchConfig large-5 small-18 mini-24">
            <div class="configName configName2">仅查看未消除的告警</div>
            <div class="switchArea">
              <marvel-switch ref="refSwitch" id="refSwitch"></marvel-switch>
            </div>
          </div>
          <div class="searchConfig large-4 small-6 mini-24">
            <div class="searchBtn">
              <marvel-primary-button isLarge="false" label="查询"
                             v-on:onClick="onClick4WarnSearch"></marvel-primary-button>
            </div>
          </div>
        </div>
        <div class="dashboards hasMargin">
          <div class="chartDashboard large-12 small-24">
            <marvel-dashboard title="新产生告警">
              <div slot="customArea"></div>
              <div slot="contArea" style="height: 100%">
                <marvel-chart-gauge ref="refGauge" id="refGauge" theme="dark"></marvel-chart-gauge>
              </div>
            </marvel-dashboard>
          </div>
          <div class="chartDashboard large-12 small-24">
            <marvel-dashboard title="未消除告警">
              <div slot="customArea"></div>
              <div slot="contArea" style="height: 100%">
                <marvel-chart-gauge ref="refGauge2" id="refGauge2" theme="dark"></marvel-chart-gauge>
              </div>
            </marvel-dashboard>
          </div>
          <div class="gridDashboard large-24 small-24">
            <marvel-dashboard title="告警列表">
              <div slot="customArea"></div>
              <div slot="contArea" style="height: 100%">
                <marvel-grid :titles="titles4Warn" :rows="rows4Warn"></marvel-grid>
              </div>
            </marvel-dashboard>
          </div>
        </div>
      </div>
      <div class="session">
        <div class="sessionName">设备详情</div>
        <div style="height: 800px;">
          <marvel-dashboard title="实时数据">
            <div slot="customArea"></div>
            <div slot="contArea" style="height: 100%">
              <div class="detailsCont larg-24">
                <div class="left large-10 small-24">
                  <div class="deviceShowArea"></div>
                  <div class="deviceDescribe">
                    <marvel-grid :titles="titles4BasicInfo" :rows="rows4BasicInfo"></marvel-grid>
                  </div>
                </div>
                <div class="right large-14 small-24">
                  <marvel-grid :titles="titles4Advance" :rows="rows4Advance"></marvel-grid>
                </div>
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
  import MarvelChartGauge from "@/walle/widget/echart/MarvelChartGauge";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelChartRadar from "@/walle/widget/echart/MarvelChartRadar";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelButton from "@/walle/widget/button/MarvelButton";
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelDashboard from "@/walle/widget/dashboard/MarvelDashboard";
  export default {
    components: {
      MarvelDashboard,
      MarvelPrimaryButton,
      MarvelButton,
      MarvelInput,
      MarvelChartRadar,
      MarvelIconTxtButton,
      MarvelChartGauge,
      MarvelGrid,
      MarvelSwitch,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame},
    name: 'page42',
    data: function() {
      return {
        //region crumbItems
        crumbItems: [{
          label: "设备监控",
          click: function(){
            window.location = "/page4/page41";
          }
        }, {
          label: "单站管理",
          click: function(){

          }
        }],
        //endregion
        //region data4SingleDev
        data4SingleDev: {},
        //endregion
        //region gaugeData
        gaugeData: {
          title: "新产生告警",
          key: "产生率",
          value: 0
        },
        //endregion
        //region gaugeData2
        gaugeData2: {
          title: "已消除告警",
          key: "消除率",
          value: 0
        },
        //endregion
        //region 4warn
        titles4Warn: [{
          label: "ID",
          width: "12%"
        }, {
          label: "类型",
          width: "12%"
        }, {
          label: "内容",
          width: "12%"
        }, {
          label: "故障定位",
          width: "12%"
        }, {
          label: "快速处置方式",
          width: "12%"
        }, {
          label: "备注",
          width: "12%"
        }, {
          label: "消除时间",
          width: "19%"
        }, {
          label: "产生时间",
          width: "19%"
        }],
        rows4Warn: [],
        //endregion
        //region basicInfo
        titles4BasicInfo: [{
          label: "属性",
          width: "33%"
        }, {
          label: "值",
          width: "33%"
        }, {
          label: "时间",
          width: "34%"
        }],
        rows4BasicInfo: [],
        //endregion
        //region advanceInfo
        titles4Advance: [{
          label: "名称",
          width: "20%"
        }, {
          label: "厂家",
          width: "20%"
        }, {
          label: "型号",
          width: "20%"
        }, {
          label: "备注",
          width: "20%"
        }, {
          label: "操作",
          width: "20%"
        }],
        rows4Advance: []
        //endregion
      }
    },
    mounted: function(){
      var self = this;

      //1.setData
      this._getData4SingleDevMock();
      this._setData4Gauge();
      this._setData4Gauge2();
      this._setData4WarnGrid();
      this._setData4BasicInfo();
      this._setData4AdvanceInfo();

      //2.basicInfo
      setInterval(function(){
        self._getData4SingleDevMock();
        self._setData4BasicInfo();
      }, 2000);
    },
    methods: {
      _getData4SingleDevMock: function(){
        var lstWarn = [];
        var iCount = parseInt(Math.random() * 20);
        for(var i=0;i<iCount;i++) {
          var oRow = [];
          for (var j = 0; j < 8; j++) {
            if(1 == j){
              var iWarnType = parseInt(Math.random() * 7);
              oRow.push({value: "告警" + iWarnType, type: "text"});
            }
            else{
              oRow.push({value: "value" + i, type: "text"});
            }
          }
          lstWarn.push(oRow);
        }

        var arrBasicInfo = [
          [{value: "设备ID", type:"text"}, {value: "3217031027", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "设备名称", type:"text"}, {value: "南坡村切割机", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "工作状态", type:"text"}, {value: "加工", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "告警状态", type:"text"}, {value: "告警", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "激光器型号", type:"text"}, {value: "Raycus-500W", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "最新消息时间", type:"text"}, {value: "2017/7/5 10：20", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "机床幅面", type:"text"}, {value: "3105", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "X轴脉冲当量", type:"text"}, {value: "1000", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "X轴最大行程", type:"text"}, {value: "1000", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "Y轴双边驱动", type:"text"}, {value: "1", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "Y轴脉冲当量", type:"text"}, {value: "1000", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "X轴最大行程", type:"text"}, {value: "3000", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "激光器类型", type:"text"}, {value: "0", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "激光器控制方式", type:"text"}, {value: "0", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "调高器控制方式", type:"text"}, {value: "0", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1切割速度", type:"text"}, {value: "200", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1开光延时", type:"text"}, {value: "0", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1切割功率", type:"text"}, {value: "100", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1切割频率", type:"text"}, {value: "5000", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1切割高度", type:"text"}, {value: "10", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1切割气体", type:"text"}, {value: "0", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1切割气压", type:"text"}, {value: "5", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1峰值电流", type:"text"}, {value: "100", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1启用分段穿孔", type:"text"}, {value: "0", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1启用渐进穿孔", type:"text"}, {value: "0", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1穿孔延时", type:"text"}, {value: "1000", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1穿孔功率", type:"text"}, {value: "50", type:"text"}, {value: new Date(), type:"text"}],
          [{value: "图层1穿孔高度", type:"text"}, {value: "50", type:"text"}, {value: new Date(), type:"text"}],
        ];

        var arrRows4Advance = [];
        for(var i=0;i<5;i++){
          var oRow = [];
          for(var j=0;j<5;j++){
            oRow.push({value:"value" + i, type:"text"});
          }
          arrRows4Advance.push(oRow);
        }

        this.data4SingleDev = {
          newWarnRate: (Math.random() * 100).toFixed(2) - 0,
          disposeWarnRate: (Math.random() * 100).toFixed(2) - 0,
          warnLst: lstWarn,
          basicInfos: arrBasicInfo,
          rows4Advance: arrRows4Advance
        };
      },
      _setData4Gauge: function(){
        this.gaugeData.value = this.data4SingleDev.newWarnRate;
        this.$refs.refGauge.setData(this.gaugeData);
      },
      _setData4Gauge2: function(){
        this.gaugeData2.value = this.data4SingleDev.disposeWarnRate;
        this.$refs.refGauge2.setData(this.gaugeData2);
      },
      _setData4WarnGrid: function(){
        this.rows4Warn = this.data4SingleDev.warnLst;
      },
      _setData4BasicInfo: function(){
        this.rows4BasicInfo = this.data4SingleDev.basicInfos;
      },
      _setData4AdvanceInfo: function(){
        this.rows4Advance = this.data4SingleDev.rows4Advance;
      },
      onClick4WarnSearch: function(){
        this._setData4Gauge();
        this._setData4Gauge2();
        this._setData4WarnGrid();
      }
    }
  }
</script>

<style>
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
    padding: 0 40px;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #fafafa;
    height:calc(100% - 25px);
  }
  .pageFrameWrapper .session{
    width: 100%;
    margin-top: 30px;
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
    margin-bottom: 20px;
  }
  .pageFrameWrapper .session .searchConfigArea{
    width: 100%;
    overflow: hidden;
    clear: both;
  }

  .searchConfigArea .searchConfig{
    float: left;
    overflow: hidden;
    margin-bottom: 20px;
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
    width: 80px;
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
  .dashboards .chartDashboard, .dashboards .gridDashboard{
    margin-bottom: 20px;
  }
  .dashboards .chartDashboard{
    height:400px;
  }
  .dashboards .gridDashboard{
    height: 800px;
  }

  .detailsCont{
    height:100%;
  }
  .detailsCont .left,.detailsCont .right{
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .detailsCont .left{
    border-right: 1px dashed #d5d5d5;
  }
  .detailsCont .left .deviceShowArea{
    background: url("/static/demo/dev.jpg") no-repeat center;
    background-size: contain;
    height: 380px;
  }
  .detailsCont .left .deviceDescribe{
    font-family: arial, "微软雅黑", sans-serif;
    font-size: 14px;
    height:calc( 100% - 380px);
    color: #666;
    line-height: 22px;
  }
</style>
