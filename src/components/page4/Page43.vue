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
        <div class="sessionName">机床运行状态分析</div>
        <div class="searchConfigArea">
          <div class="searchConfig large-6 small-8 mini-24">
            <div class="configName">开始时间:</div>
            <div class="configInput">
              <marvel-input ref="ref4StartTime" status="" placeHolder="Please enter..."
                            errMsg="输入错误..."></marvel-input>
            </div>
          </div>
          <div class="searchConfig large-6 small-8 mini-24">
            <div class="configName">结束时间:</div>
            <div class="configInput">
              <marvel-input ref="ref4EndTime" status="" placeHolder="Please enter..."
                            errMsg="输入错误..."></marvel-input>
            </div>
          </div>
          <div class="searchConfig large-8 small-8 mini-24">

          </div>
          <div class="searchConfig large-4 small-6 mini-24">
            <div class="searchBtn">
              <marvel-primary-button isLarge="false" label="查询"
                                     v-on:onClick="onClick4UsageSearch"></marvel-primary-button>
            </div>
          </div>
        </div>
        <div class="dashboards hasMargin">
          <div class="chartDashboard large-24 small-24">
            <marvel-dashboard title="热力图">
              <div slot="customArea"></div>
              <div slot="contArea" style="height: 100%">
                <marvel-chart-scatter2 ref="refScatter" id="refScatter" theme="dark"
                                       v-on:onClick="onScatterItemClick"></marvel-chart-scatter2>
              </div>
            </marvel-dashboard>
          </div>
          <div class="chartDashboard large-24 small-24">
            <marvel-dashboard title="利用率趋势">
              <div slot="customArea"></div>
              <div slot="contArea" style="height: 100%">
                <marvel-chart-stack-line ref="refStackLine" id="refStackLine"
                                         theme="dark"></marvel-chart-stack-line>
              </div>
            </marvel-dashboard>
          </div>
          <div class="gridDashboard large-24 small-24">
            <marvel-dashboard title="利用率详情">
              <div slot="customArea"></div>
              <div slot="contArea" style="height: 100%">
                <marvel-grid :titles="titles" :rows="rows"></marvel-grid>
              </div>
            </marvel-dashboard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb";
  import MarvelChartStackLine from "@/walle/widget/echart/MarvelChartStackLine";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelDashboard from "@/walle/widget/dashboard/MarvelDashboard";
  import MarvelSelectCard from "@/walle/widget/select/MarvelSelectCard";
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelChartScatter2 from "@/walle/widget/echart/MarvelChartScatter2";
  export default {
    components: {
      MarvelChartScatter2,
      MarvelInput,
      MarvelPrimaryButton,
      MarvelSelectCard,
      MarvelDashboard,
      MarvelGrid,
      MarvelChartStackLine,
      MarvelCrumb,
      MarvelFrame},
    name: 'page43',
    data: function() {
      return {
        //region const
        debug: false,
        //#endregion
        //region crumbItems
        crumbItems: [{
          label: "商业洞察",
          click: function () {

          }
        }, {
          label: "机床运行状态分析",
          click: function () {

          }
        }],
        //endregion
        //region scatter
        scatterData: {
          title: "机床利用率",
          name: "usage",
          subtxt: "",
          sublink: "",
          geoType: "world",
          geoZoom: 0.9,
          topN: 10,
          topNEx: 10,
          data: []
        },
        selectItem: "",
        //endregion
        //region stackLine
        stackLineData: {
          y1Title: "机床状态用时(小时)",
          y2Title: "机床在线率(%)",
          category: ["加工", "待机", "离线", "机床在线率"],
          data: []
        },
        //endregion
        //region grid
        titles: [{
          label: "利用率",
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
        //endregion
      }
    },
    mounted: function(){
      this._drawScatter();
      this._drawStackLine();
    },
    methods: {
      onClick4UsageSearch: function(){
        var self = this;

        //1.scatter
        this._getScatterDataMock(function(){
          self._drawScatter();
        });
      },
      onScatterItemClick: function(oItem){
        this.selectItem = oItem;
        this.stackLineData.data = [];
        this.rows = [];

        //1.update this.stackLineData and this.rows
        var arrReportUsageOutTimeVo = this.selectItem.value[3].treeReportUsageOutTimeVo;
        console.log(arrReportUsageOutTimeVo);
        for(var i=0;i<arrReportUsageOutTimeVo.length;i++){
          var oStackItem = arrReportUsageOutTimeVo[i];
          var oStackLineData = {
            label: oStackItem.time,
            value: [oStackItem.hourProcess, oStackItem.hourAwait, oStackItem.hourOffline, oStackItem.usage]
          };
          this.stackLineData.data.push(oStackLineData);

          var oRowData = [{
            value: oStackItem.usage,
            type: "text"
          }, {
            value: oStackItem.hourProcess,
            type: "text"
          }, {
            value: oStackItem.hourAwait,
            type: "text"
          }, {
            value: oStackItem.hourOffline,
            type: "text"
          }];
          this.rows.push(oRowData);
        }

        //2.update rows

        //3.stackLine
        this._drawStackLine();
      },
      _getScatterDataMock: function(oCallback){
        this.scatterData.data = [];

        if(this.debug){
          //region debug

          // 1.mock
          for(var i=0;i<50;i++){
            var oDevVo = {
              treeReportUsageOutTimeVo: []
            };
            for(var j=1;j<=30;j++){
              var d1 = 12 * Math.random();
              var d2 = 12 * Math.random();
              var d3 = 24 - d1 - d2;
              var rate = d1 / 24 * 100;
              oDevVo.treeReportUsageOutTimeVo.push({
                time: "2017-7-" + j,
                usage: rate,
                hourProcess: d1,
                hourAwait: d2,
                hourOffline: d3
              });
            }

            var oDev = {
              name: "机床" + i,
              value: [80 + Math.random()*10, 30 + Math.random()*10, 100 * Math.random(), oDevVo]
            };
            this.scatterData.data.push(oDev);
          }

          //2.callback
          oCallback();

          //endregion
        }
        else{
          //region prod

          //1.post getUsageByClientNoAndStartTimeAndEndTime
          this.$http.post('/getUsageByClientNoAndStartTimeAndEndTime', {
            reqBuVoStr: JSON.stringify({
              clientNo:"client1",
              startTime: "2017-7-1",
              endTime: "2017-10-1"
            })
          }).then(res=>{
            //2.更新this.scatterData.data
            var oClientVo = res.data.resultObj.lstReportUsageOutClientNoVo[0];
            var lstDevVo = oClientVo.lstReportUsageDevVo;
            for(var i=0;i<lstDevVo.length;i++){
              var oDevVo = lstDevVo[i];
              var oDev = {
                name: oDevVo.devId,
                value: [oDevVo.x, oDevVo.y, oDevVo.usage, oDevVo]
              };
              this.scatterData.data.push(oDev);
            }

            //3.callback
            oCallback();
          });

          //endregion
        }
      },
      _drawScatter: function(){
        this.$refs.refScatter.setData(this.scatterData);
      },
      _drawStackLine: function(){
        this.$refs.refStackLine.setData(this.stackLineData);
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
    height: 500px;
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
