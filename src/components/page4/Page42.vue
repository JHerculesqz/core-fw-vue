<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar large-24 middle-24 small-24 mini-24">
      <div class="crumb large-12 middle-20 small-20 mini-20">
        <marvel-crumb :items="crumbItems" theme="dark" v-on:onItemClick="onCrumbItemClick"></marvel-crumb>
      </div>
    </div>
    <div class="pageFrameWrapper">
      <div class="session">
        <div class="sessionName">告警信息</div>
        <div class="searchConfigArea">
          <div class="searchConfig large-10 small-8 mini-24">
            <div class="configName">查看周期:</div>
            <div class="configInput">
              <marvel-input ref="ref4Days" status="" placeHolder="请输入想查看距今几天的告警..."
                            errMsg="输入错误..."></marvel-input>
            </div>
          </div>
          <div class="searchConfig large-14 small-18 mini-24">
            <div class="configName configName2">仅查看未消除的告警</div>
            <div class="switchArea">
              <marvel-switch ref="refSwitch" id="refSwitch"></marvel-switch>
            </div>
          </div>
        </div>
        <div class="dashboards hasMargin">
          <!--<div class="chartDashboard large-12 small-24">-->
            <!--<marvel-dashboard title="新产生告警">-->
              <!--<div slot="customArea"></div>-->
              <!--<div slot="contArea" style="height: 100%">-->
                <!--<marvel-chart-gauge ref="refGauge" id="refGauge" theme="dark"></marvel-chart-gauge>-->
              <!--</div>-->
            <!--</marvel-dashboard>-->
          <!--</div>-->
          <!--<div class="chartDashboard large-12 small-24">-->
            <!--<marvel-dashboard title="未消除告警">-->
              <!--<div slot="customArea"></div>-->
              <!--<div slot="contArea" style="height: 100%">-->
                <!--<marvel-chart-gauge ref="refGauge2" id="refGauge2" theme="dark"></marvel-chart-gauge>-->
              <!--</div>-->
            <!--</marvel-dashboard>-->
          <!--</div>-->
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
        <div style="height: 400px;">
          <marvel-dashboard title="实时数据">
            <div slot="customArea"></div>
            <div slot="contArea" style="height: 100%">
              <div class="detailsCont large-24">
                <div class="left large-10 small-24">
                  <div class="deviceShowArea"></div>
                  <div class="deviceDescribe"></div>
                </div>
                <div class="right large-14 small-24">
                  <marvel-grid :titles="titles4BasicInfo" :rows="rows4BasicInfo"></marvel-grid>
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
      MarvelGrid,
      MarvelSwitch,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame},
    name: 'page42',
    data: function() {
      return {
        //#region const
        debug: true,
        timerInterval: 2000,
        //#endregion
        //#region crumbItems
        crumbItems: ["设备监控", "单站管理"],
        //#endregion
        //#region devId
        devId: 0,
        //#endregion
        //#region data4SingleDev
        data4SingleDev: {},
        //#endregion
        //#region 4warn
        titles4Warn: [{
          label: "告警ID",
          width: "13%"
        }, {
          label: "告警内容",
          width: "20%"
        }, {
          label: "是否消除",
          width: "7%"
        }, {
          label: "产生时间",
          width: "20%"
        }, {
          label: "消除时间",
          width: "20%"
        }, {
          label: "常见处理方法",
          width: "20%"
        }],
        rows4Warn: [],
        //#endregion
        //#region basicInfo
        titles4BasicInfo: [{
          label: "属性",
          width: "50%"
        }, {
          label: "值",
          width: "50%"
        }],
        rows4BasicInfo: [],
        //#endregion
        //#region timer
        timer: undefined
        //#endregion
      }
    },
    mounted: function(){
      var self = this;

      //0.set devId
      this.devId = this.$route.query.id;

      //1.setData
      this._getData4SingleDevMock(function(){
        //1.1._setData4WarnGrid
        self._setData4WarnGrid();

        //1.2._setData4BasicInfo
        self._setData4BasicInfo();
      });

      //2.basicInfo
      this.timer = setInterval(function(){
        //1.setData
        self._getData4SingleDevMock(function(){
          //1.1._setData4WarnGrid
          self._setData4WarnGrid();

          //1.2._setData4BasicInfo
          self._setData4BasicInfo();
        });
      }, this.timerInterval);
    },
    destroyed: function(){
      if(this.timer != undefined){
        clearInterval(this.timer);
      }
    },
    methods: {
      onCrumbItemClick: function(strItemLabel){
        if("设备监控" == strItemLabel){
          this.$router.push({name: "page41"});
        }
      },
      _getData4SingleDevMock: function(oCallback){
        var self = this;

        var strDays = this.$refs.ref4Days.getInputMsg();
        var bIsNotAll = this.$refs.refSwitch.getCheckItem();

        if(this.debug){
          //1.basicInfos
          self.data4SingleDev.basicInfos = [
            [{value: "设备ID", type:"text"}, {value: Math.random(), type:"text"}],
            [{value: "设备名称", type:"text"}, {value: "1", type:"text"}],
            [{value: "状态", type:"text"}, {value: "1", type:"text"}],
            [{value: "告警", type:"text"}, {value: "1", type:"text"}],
            [{value: "最近更新时间", type:"text"}, {value: "1", type:"text"}],
            [{value: "经度", type:"text"}, {value: "1", type:"text"}],
            [{value: "纬度", type:"text"}, {value: "1", type:"text"}],
            [{value: "软件版本", type:"text"}, {value: "1", type:"text"}],
            [{value: "机床幅面", type:"text"}, {value: "1", type:"text"}],
            [{value: "激光器型号", type:"text"}, {value: "1", type:"text"}],
            [{value: "电机型号", type:"text"}, {value: "1", type:"text"}],
            [{value: "切割头型号", type:"text"}, {value: "1", type:"text"}],
            [{value: "X轴脉冲当量", type:"text"}, {value: "1", type:"text"}],
            [{value: "X轴最大行程", type:"text"}, {value: "1", type:"text"}],
            [{value: "Y轴双边驱动", type:"text"}, {value: "1", type:"text"}],
            [{value: "Y轴脉冲当量", type:"text"}, {value: "1", type:"text"}],
            [{value: "Y轴最大行程", type:"text"}, {value: "1", type:"text"}],
            [{value: "激光器类型", type:"text"}, {value: "1", type:"text"}],
            [{value: "激光器控制方式", type:"text"}, {value: "1", type:"text"}],
            [{value: "调高器控制方式", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时切割速度", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时开光延时", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时切割功率", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时切割频率", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时切割高度", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时切割气体", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时切割气压", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时峰值电流", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时启用分段穿孔", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时启用渐进穿孔", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时穿孔延时", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时穿孔功率", type:"text"}, {value: "1", type:"text"}],
            [{value: "加工时穿孔高度", type:"text"}, {value: "1", type:"text"}]
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

          oCallback();
        }
        else{
          //1.post getBasicInfoByDevId
          self.$http.post('/getBasicInfoByDevId', {
            reqBuVoStr: JSON.stringify({
              clientNo:"client1",
              devId: self.devId
            })
          }).then(res=>{
            //2.oDevBasicInfo to arrBasicInfo
            var oDevBasicInfo = res.data.resultObj;
            self.data4SingleDev.basicInfos = [
              [{value: "设备ID", type:"text"}, {value: oDevBasicInfo.devId, type:"text"}],
              [{value: "设备名称", type:"text"}, {value: oDevBasicInfo.mname, type:"text"}],
              [{value: "状态", type:"text"}, {value: oDevBasicInfo.status, type:"text"}],
              [{value: "告警", type:"text"}, {value: oDevBasicInfo.warnCount, type:"text"}],
              [{value: "最近更新时间", type:"text"}, {value: oDevBasicInfo.lastUpdateTime, type:"text"}],
              [{value: "经度", type:"text"}, {value: oDevBasicInfo.x, type:"text"}],
              [{value: "纬度", type:"text"}, {value: oDevBasicInfo.y, type:"text"}],
              [{value: "软件版本", type:"text"}, {value: oDevBasicInfo.tsoftVersion, type:"text"}],
              [{value: "机床幅面", type:"text"}, {value: oDevBasicInfo.mjcfm, type:"text"}],
              [{value: "激光器型号", type:"text"}, {value: oDevBasicInfo.mlaser, type:"text"}],
              [{value: "电机型号", type:"text"}, {value: oDevBasicInfo.mdj, type:"text"}],
              [{value: "切割头型号", type:"text"}, {value: oDevBasicInfo.mqgt, type:"text"}],
              [{value: "X轴脉冲当量", type:"text"}, {value: oDevBasicInfo.txmcdl, type:"text"}],
              [{value: "X轴最大行程", type:"text"}, {value: oDevBasicInfo.txzdxc, type:"text"}],
              [{value: "Y轴双边驱动", type:"text"}, {value: oDevBasicInfo.tysbqd, type:"text"}],
              [{value: "Y轴脉冲当量", type:"text"}, {value: oDevBasicInfo.tymcdl, type:"text"}],
              [{value: "Y轴最大行程", type:"text"}, {value: oDevBasicInfo.tyzdxc, type:"text"}],
              [{value: "激光器类型", type:"text"}, {value: oDevBasicInfo.tlaserType, type:"text"}],
              [{value: "激光器控制方式", type:"text"}, {value: oDevBasicInfo.tjgqkzfs, type:"text"}],
              [{value: "调高器控制方式", type:"text"}, {value: oDevBasicInfo.ttgqkzfs, type:"text"}],
              [{value: "加工时切割速度", type:"text"}, {value: oDevBasicInfo.tjgsqgsd, type:"text"}],
              [{value: "加工时开光延时", type:"text"}, {value: oDevBasicInfo.tjgskgys, type:"text"}],
              [{value: "加工时切割功率", type:"text"}, {value: oDevBasicInfo.tjgsqggl, type:"text"}],
              [{value: "加工时切割频率", type:"text"}, {value: oDevBasicInfo.tjgsqgpl, type:"text"}],
              [{value: "加工时切割高度", type:"text"}, {value: oDevBasicInfo.tjgsqggd, type:"text"}],
              [{value: "加工时切割气体", type:"text"}, {value: oDevBasicInfo.tjgsqgqt, type:"text"}],
              [{value: "加工时切割气压", type:"text"}, {value: oDevBasicInfo.tjgsqgqy, type:"text"}],
              [{value: "加工时峰值电流", type:"text"}, {value: oDevBasicInfo.tjgsfzdl, type:"text"}],
              [{value: "加工时启用分段穿孔", type:"text"}, {value: oDevBasicInfo.tjgsqyfdck, type:"text"}],
              [{value: "加工时启用渐进穿孔", type:"text"}, {value: oDevBasicInfo.tjgsqyjjck, type:"text"}],
              [{value: "加工时穿孔延时", type:"text"}, {value: oDevBasicInfo.tjgsckys, type:"text"}],
              [{value: "加工时穿孔功率", type:"text"}, {value: oDevBasicInfo.tjgsckgl, type:"text"}],
              [{value: "加工时穿孔高度", type:"text"}, {value: oDevBasicInfo.tjgsckgd, type:"text"}]
            ];

            //3.post getWarnLstByDevId
            self.$http.post('/getWarnLstByDevId', {
              reqBuVoStr: JSON.stringify({
                clientNo:"client1",
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
                self.data4SingleDev.warnLst.push([
                  {value: oWarnInfo.warnId, type:"text"},
                  {value: oWarnInfo.warnContent, type:"text"},
                  {value: oWarnInfo.end, type:"text"},
                  {value: oWarnInfo.startTime, type:"text"},
                  {value: oWarnInfo.endTime, type:"text"},
                  {value: oWarnInfo.warnProcess, type:"text"}
                ]);
              }

              oCallback();
            });
          });
        }
      },
      _setData4BasicInfo: function(){
        this.rows4BasicInfo = this.data4SingleDev.basicInfos;
      },
      _setData4WarnGrid: function(){
        this.rows4Warn = this.data4SingleDev.warnLst;
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
    height: 400px;
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
