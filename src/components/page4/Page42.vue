<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar large-24 middle-24 small-24 mini-24">
      <div class="crumb large-12 middle-20 small-20 mini-20">
        <marvel-crumb :items="crumbItems"></marvel-crumb>
      </div>
    </div>
    <div class="details large-24 middle-24 small-24 mini-24">
      <div class="warnInfo large-24 middle-24 small-24 mini-24">
        <div class="layer1 large-24 middle-24 small-24 mini-24">
          <marvel-icon-txt-button isLarge="false" label="查询" icon="icon-home3"
                                  v-on:onClick="onClick4WarnSearch"></marvel-icon-txt-button>
        </div>
        <div class="layer2 large-8 middle-8 small-8 mini-8">
          <div class="top large-24 middle-24 small-24 mini-24">
            <marvel-chart-gauge ref="refGauge" id="refGauge" theme="dark"></marvel-chart-gauge>
          </div>
          <div class="bottom large-24 middle-24 small-24 mini-24">
            <marvel-chart-gauge ref="refGauge2" id="refGauge2" theme="dark"></marvel-chart-gauge>
          </div>
        </div>
        <div class="layer3 large-16 middle-16 small-16 mini-16">
          <marvel-grid :titles="titles4Warn" :rows="rows4Warn"></marvel-grid>
        </div>
      </div>
      <div class="basicInfo large-24 middle-24 small-24 mini-24">
        <div class="layer1 large-12 middle-12 small-12 mini-12">
          <div class="left large-12 middle-12 small-12 mini-12">
            <img src="/static/demo/dev.jpg">
          </div>
          <div class="right large-12 middle-12 small-12 mini-12" v-html="basicInfo"></div>
        </div>
        <div class="layer2 large-12 middle-12 small-12 mini-12" v-html="basicInfo2"></div>
      </div>
      <div class="advanceInfo large-24 middle-24 small-24 mini-24">
        <marvel-grid :titles="titles4Advance" :rows="rows4Advance"></marvel-grid>
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
  export default {
    components: {
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
        basicInfo: "",
        basicInfo2: "",
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
      this._setData4BasicInfo2();
      this._setData4AdvanceInfo();

      //2.basicInfo
      setInterval(function(){
        self._getData4SingleDevMock();
        self._setData4BasicInfo();
        self._setData4BasicInfo2();
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

        var strBasicInfo = "设备ID:3217031027<br>" +
          "设备名称：南坡村切割机<br>" +
          "工作状态：加工/待机/离线<br>" +
          "告警状态：正常/告警<br>" +
          "激光器型号：Raycus-500W<br>" +
          "最新消息时间：2017/7/5  10：20<br>" +
          "机床幅面：3105<br>";
        var strBasicInfo2 = "X轴脉冲当量:1000;" + new Date + "<br>" +
          "X轴最大行程:1500;" + new Date + "<br>" +
          "Y轴双边驱动:1;" + new Date + "<br>" +
          "Y轴脉冲当量:1000;" + new Date + "<br>" +
          "X轴最大行程:3000;" + new Date + "<br>" +
          "激光器类型:0;" + new Date + "<br>" +
          "激光器控制方式:0;" + new Date + "<br>" +
          "调高器控制方式:0;" + new Date + "<br>" +
          "图层1切割速度:200;" + new Date + "<br>" +
          "图层1开光延时:0;" + new Date + "<br>" +
          "图层1切割功率:100;" + new Date + "<br>" +
          "图层1切割频率:5000;" + new Date + "<br>" +
          "图层1切割高度:10;" + new Date + "<br>" +
          "图层1切割气体:0;" + new Date + "<br>" +
          "图层1切割气压:5;" + new Date + "<br>" +
          "图层1峰值电流:100;" + new Date + "<br>" +
          "图层1启用分段穿孔:0;" + new Date + "<br>" +
          "图层1启用渐进穿孔:0;" + new Date + "<br>" +
          "图层1穿孔延时:1000;" + new Date + "<br>" +
          "图层1穿孔功率:50;" + new Date + "<br>" +
          "图层1穿孔高度:50;" + new Date + "<br>" ;
        var arrRows4Advance = [];
        for(var i=0;i<5;i++){
          var oRow = [];
          for(var j=0;j<4;j++){
            var oCell = {
              value: "value" + i,
              type: "text"
            }
            oRow.push(oCell);
          }
          arrRows4Advance.push(oRow);
        }

        this.data4SingleDev = {
          newWarnRate: (Math.random() * 100).toFixed(2) - 0,
          disposeWarnRate: (Math.random() * 100).toFixed(2) - 0,
          warnLst: lstWarn,
          basicInfo: strBasicInfo,
          basicInfo2: strBasicInfo2,
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
        this.basicInfo = this.data4SingleDev.basicInfo;
      },
      _setData4BasicInfo2: function(){
        this.basicInfo2 = this.data4SingleDev.basicInfo2;
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
    height: 25px;
  }
  .crumb{
    margin-top: 5px;
  }
  .details{
    height: calc(100% - 25px);
    overflow-y: auto;
  }
  .details .warnInfo{
    height: 550px;
  }
  .details .warnInfo .layer1{
    height: 40px;
  }
  .details .warnInfo .layer2{
    height: 100%;
  }
  .details .warnInfo .layer2 .top{
    height: 50%;
  }
  .details .warnInfo .layer2 .bottom{
    height: 50%;
  }
  .details .warnInfo .layer3{
    height: 100%;
  }
  .details .basicInfo{
    height: 300px;
  }
  .details .basicInfo .layer1{
    height: 100%;
  }
  .details .basicInfo .layer1 .left{
    height: 100%;
  }
  .details .basicInfo .layer1 .left img{
    width: 100%;
    height: 100%;
  }
  .details .basicInfo .layer1 .right{
    height: 100%;
  }
  .details .basicInfo .layer2{
    height: 100%;
    background-color: #e74c3c;
  }
  .details .advanceInfo{
    height: 300px;
  }
</style>
