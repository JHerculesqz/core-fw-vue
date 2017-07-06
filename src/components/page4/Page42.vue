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
            <marvel-chart-radar ref="refRadar" id="refRadar" theme="dark"></marvel-chart-radar>
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
        <!--<marvel-grid :titles="titles4Advance" :rows="rows4Advance"></marvel-grid>-->
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
        gaugeData: {
          title: "新产生告警",
          key: "产生率",
          value: 0
        },
        radarData:{
          title: "告警分布",
          seriesTitle: [],
          seriesName: "",
          data: []
        },
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
        basicInfo: "",
        basicInfo2: ""
      }
    },
    mounted: function(){
      //1.gauge
      this.$refs.refGauge.init();
      this._setData4Gauge();

      //2.radar
      this.$refs.refRadar.init();
      this._setData4Radar();

      //3.grid
      this._setData4WarnGrid();

      //4.basicInfo
      this._setData4BasicInfo();

      //5.basicInfo2
      this._setData4BasicInfo2();
    },
    methods: {
      _setData4Gauge: function(){
        this.gaugeData.value = (Math.random() * 100).toFixed(2) - 0;
        this.$refs.refGauge.setData(this.gaugeData);
      },
      _setData4Radar: function(){
        this.radarData.seriesTitle = [
          {name: '告警1', max: 300},
          {name: '告警2', max: 250},
          {name: '告警3', max: 300},
          {name: '告警4', max: 5},
          {name: '告警5', max: 200},
          {name: '告警7', max: 100}
        ];
        //region data
        var dataBJ = [
          [55,9,56,0.46,18,6,1],
          [25,11,21,0.65,34,9,2],
          [56,7,63,0.3,14,5,3],
          [33,7,29,0.33,16,6,4],
          [42,24,44,0.76,40,16,5],
          [82,58,90,1.77,68,33,6],
          [74,49,77,1.46,48,27,7],
          [78,55,80,1.29,59,29,8],
          [267,216,280,4.8,108,64,9],
          [185,127,216,2.52,61,27,10],
          [39,19,38,0.57,31,15,11],
          [41,11,40,0.43,21,7,12],
          [64,38,74,1.04,46,22,13],
          [108,79,120,1.7,75,41,14],
          [108,63,116,1.48,44,26,15],
          [33,6,29,0.34,13,5,16],
          [94,66,110,1.54,62,31,17],
          [186,142,192,3.88,93,79,18],
          [57,31,54,0.96,32,14,19],
          [22,8,17,0.48,23,10,20],
          [39,15,36,0.61,29,13,21],
          [94,69,114,2.08,73,39,22],
          [99,73,110,2.43,76,48,23],
          [31,12,30,0.5,32,16,24],
          [42,27,43,1,53,22,25],
          [154,117,157,3.05,92,58,26],
          [234,185,230,4.09,123,69,27],
          [160,120,186,2.77,91,50,28],
          [134,96,165,2.76,83,41,29],
          [52,24,60,1.03,50,21,30],
          [46,5,49,0.28,10,6,31]
        ];
        var dataGZ = [
          [26,37,27,1.163,27,13,1],
          [85,62,71,1.195,60,8,2],
          [78,38,74,1.363,37,7,3],
          [21,21,36,0.634,40,9,4],
          [41,42,46,0.915,81,13,5],
          [56,52,69,1.067,92,16,6],
          [64,30,28,0.924,51,2,7],
          [55,48,74,1.236,75,26,8],
          [76,85,113,1.237,114,27,9],
          [91,81,104,1.041,56,40,10],
          [84,39,60,0.964,25,11,11],
          [64,51,101,0.862,58,23,12],
          [70,69,120,1.198,65,36,13],
          [77,105,178,2.549,64,16,14],
          [109,68,87,0.996,74,29,15],
          [73,68,97,0.905,51,34,16],
          [54,27,47,0.592,53,12,17],
          [51,61,97,0.811,65,19,18],
          [91,71,121,1.374,43,18,19],
          [73,102,182,2.787,44,19,20],
          [73,50,76,0.717,31,20,21],
          [84,94,140,2.238,68,18,22],
          [93,77,104,1.165,53,7,23],
          [99,130,227,3.97,55,15,24],
          [146,84,139,1.094,40,17,25],
          [113,108,137,1.481,48,15,26],
          [81,48,62,1.619,26,3,27],
          [56,48,68,1.336,37,9,28],
          [82,92,174,3.29,0,13,29],
          [106,116,188,3.628,101,16,30],
          [118,50,0,1.383,76,11,31]
        ];
        var dataSH = [
          [91,45,125,0.82,34,23,1],
          [65,27,78,0.86,45,29,2],
          [83,60,84,1.09,73,27,3],
          [109,81,121,1.28,68,51,4],
          [106,77,114,1.07,55,51,5],
          [109,81,121,1.28,68,51,6],
          [106,77,114,1.07,55,51,7],
          [89,65,78,0.86,51,26,8],
          [53,33,47,0.64,50,17,9],
          [80,55,80,1.01,75,24,10],
          [117,81,124,1.03,45,24,11],
          [99,71,142,1.1,62,42,12],
          [95,69,130,1.28,74,50,13],
          [116,87,131,1.47,84,40,14],
          [108,80,121,1.3,85,37,15],
          [134,83,167,1.16,57,43,16],
          [79,43,107,1.05,59,37,17],
          [71,46,89,0.86,64,25,18],
          [97,71,113,1.17,88,31,19],
          [84,57,91,0.85,55,31,20],
          [87,63,101,0.9,56,41,21],
          [104,77,119,1.09,73,48,22],
          [87,62,100,1,72,28,23],
          [168,128,172,1.49,97,56,24],
          [65,45,51,0.74,39,17,25],
          [39,24,38,0.61,47,17,26],
          [39,24,39,0.59,50,19,27],
          [93,68,96,1.05,79,29,28],
          [188,143,197,1.66,99,51,29],
          [174,131,174,1.55,108,50,30],
          [187,143,201,1.39,89,53,31]
        ];
        //endregion
        var i = Math.random() * 100;
        if(i > 0 && i < 30){
          this.radarData.data = dataBJ;
        }
        else if(i > 30 && i < 50){
          this.radarData.data = dataGZ;
        }
        else {
          this.radarData.data = dataSH;
        }
        this.$refs.refRadar.setData(this.radarData);
      },
      _setData4WarnGrid: function(){
        this.rows4Warn = [];
        var iCount = parseInt(Math.random() * 100);
        for(var i=0;i<iCount;i++) {
          var oRow = [];
          for (var j = 0; j < 8; j++) {
            oRow.push({value: "value" + i, type: "text"});
          }
          this.rows4Warn.push(oRow);
        }
      },
      _setData4BasicInfo: function(){
        this.basicInfo = "设备ID:3217031027<br>" +
          "设备名称：南坡村切割机<br>" +
          "工作状态：加工/待机/离线<br>" +
          "告警状态：正常/告警<br>" +
          "激光器型号：Raycus-500W<br>" +
          "最新消息时间：2017/7/5  10：20<br>" +
          "机床幅面：3015<br>";
      },
      _setData4BasicInfo2: function(){
        this.basicInfo2 = "X轴脉冲当量:1000;2016/1/28 20:10:48<br>" +
          "X轴最大行程:1500;2016/1/28 20:10:48<br>" +
          "Y轴双边驱动:1;2016/1/28 20:10:48<br>" +
          "Y轴脉冲当量:1000;2016/1/28 20:10:48<br>" +
          "X轴最大行程:3000;2016/1/28 20:10:48<br>" +
          "激光器类型:0;2016/1/28 20:10:48<br>" +
          "激光器控制方式:0;2016/1/28 20:10:48<br>" +
          "调高器控制方式:0;2016/1/28 20:10:48<br>" +
          "图层1切割速度:200;2016/1/28 20:10:48<br>" +
          "图层1开光延时:0;2016/1/28 20:10:48<br>" +
          "图层1切割功率:100;2016/1/28 20:10:48<br>" +
          "图层1切割频率:5000;2016/1/28 20:10:48<br>" +
          "图层1切割高度:10;2016/1/28 20:10:48<br>" +
          "图层1切割气体:0;2016/1/28 20:10:48<br>" +
          "图层1切割气压:5;2016/1/28 20:10:48<br>" +
          "图层1峰值电流:100;2016/1/28 20:10:48<br>" +
          "图层1启用分段穿孔:0;2016/1/28 20:10:48<br>" +
          "图层1启用渐进穿孔:0;2016/1/28 20:10:48<br>" +
          "图层1穿孔延时:1000;2016/1/28 20:10:48<br>" +
          "图层1穿孔功率:50;2016/1/28 20:10:48<br>" +
          "图层1穿孔高度:50;2016/1/28 20:10:48<br>" ;
      },
      onClick4WarnSearch: function(){
        //0.queryWarnLst

        //1.gauge setData
        this._setData4Gauge();

        //2.radar setData
        this._setData4Radar();

        //3.grid setData

        //4.basicInfo setData
        this._setData4BasicInfo();

        //5.basicInfo setData
        this._setData4BasicInfo2();
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
