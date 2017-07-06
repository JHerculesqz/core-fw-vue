<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar">
      <div class="crumb">
        <marvel-crumb :items="crumbItems" theme="dark"></marvel-crumb>
      </div>
    </div>
    <div class="details">
      <marvel-icon-txt-button isLarge="false" label="查询" icon="icon-home3"
                              v-on:onClick="onClick4UsageSearch"></marvel-icon-txt-button>
      <div class="scatter">
        <marvel-chart-scatter ref="refScatter" id="refScatter" theme="dark"></marvel-chart-scatter>
      </div>
      <div class="stackLine">
        <marvel-chart-stack-line ref="refStackLine" id="refStackLine" theme="dark"></marvel-chart-stack-line>
      </div>
      <div class="grid">
        <marvel-grid :titles="titles" :rows="rows"></marvel-grid>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb";
  import MarvelChartScatter from "@/walle/widget/echart/MarvelChartScatter";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelChartStackLine from "@/walle/widget/echart/MarvelChartStackLine";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  export default {
    components: {
      MarvelGrid,
      MarvelChartStackLine,
      MarvelIconTxtButton,
      MarvelChartScatter,
      MarvelCrumb,
      MarvelFrame},
    name: 'page43',
    data: function() {
      return {
        crumbItems: [{
          label: "商业洞察",
          click: function () {

          }
        }, {
          label: "机床运行状态分析",
          click: function () {

          }
        }],
        scatterData: {
          title: "机床利用率",
          name: "usage",
          subtxt: "",
          sublink: "",
          topN: 3,
          data: []
        },
        stackLineData: {
          y1Title: "机床状态用时(小时)",
          y2Title: "机床在线率(%)",
          category: ["加工", "待机", "离线", "机床在线率"],
          data: []
        },
        titles: [{
          label: "时间",
          width: "25%"
        }, {
          label: "加工时间占比(小时)",
          width: "25%"
        }, {
          label: "待机时间占比(小时)",
          width: "25%"
        }, {
          label: "离线时间占比(小时)",
          width: "25%"
        }],
        rows: []
      }
    },
    mounted: function(){
      //1.scatter
      this._getScatterDataMock();
      this._initScatter();
      this._drawScatter();

      //2.stackLine
      this._getStackLineDataMock();
      this._initStackLine();
      this._drawStackLine();

      //3.grid
      this._getGridDataMock();
      this._setGridData();
    },
    methods: {
      _getScatterDataMock: function(){
        this.scatterData.data = [{
          name: "机床1",
          value: [121.15,31.89, 300 * Math.random()]
        }, {
          name: "机床2",
          value: [120.38,37.35, 300 * Math.random()]
        }, {
          name: "机床3",
          value: [122.207216,29.985295, 300 * Math.random()]
        }, {
          name: "机床4",
          value: [123.97,47.33, 300 * Math.random()]
        }, {
          name: "机床5",
          value: [120.33,36.07, 300 * Math.random()]
        }];
      },
      _initScatter: function(){
        this.$refs.refScatter.init();
      },
      _drawScatter: function(){
        this.$refs.refScatter.setData(this.scatterData);
      },
      _getStackLineDataMock: function(){
        this.stackLineData.data = [];
        for(var i=1;i<=30;i++){
          var d1 = 12 * Math.random();
          var d2 = 12 * Math.random();
          var d3 = 24 - d1 - d2;
          var rate = d1 / 24 * 100;
          var oData = {
            label: "2017-7-" + i,
            value: [d1, d2, d3, rate]
          };
          this.stackLineData.data.push(oData);
        }
      },
      _initStackLine: function(){
        this.$refs.refStackLine.init();
      },
      _drawStackLine: function(){
        this.$refs.refStackLine.setData(this.stackLineData);
      },
      _getGridDataMock: function(){
        this.rows = [];
        var iCount = parseInt(Math.random() * 100);
        for(var i=0;i<iCount;i++) {
          var oRow = [];
          for (var j = 0; j < 4; j++) {
            var oCell = {
              value: "value" + i,
              type: "text"
            };
            oRow.push(oCell);
          }
          this.rows.push(oRow);
        }
      },
      _setGridData: function(){

      },
      onClick4UsageSearch: function(){
        //1.scatter
        this._getScatterDataMock();
        this._drawScatter();

        //2.stackLine
        this._getStackLineDataMock();
        this._drawStackLine();

        //3.grid
        this._getGridDataMock();
        this._setGridData();
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
  .details{
    width: 100%;
    height: calc(100% - 36px);
    overflow-y: auto;
  }
  .details .scatter{
    width: 500px;
    height: 300px;
  }
  .details .stackLine{
    width: 500px;
    height: 300px;
  }
  .details .grid{
    width: 100%;
    height: 300px;
  }
</style>
