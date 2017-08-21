<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar">
      <div class="crumb">
        <marvel-crumb :items="crumbItems" theme="dark" v-on:onCrumbItemClick="onCrumbItemClick"></marvel-crumb>
      </div>
      <!--<div class="search">-->
      <!--搜索框占位置-->
      <!--</div>-->
      <div class="bar"></div>
      <div class="tip">
        <marvel-warning :items="warnPanel" theme="dark"></marvel-warning>
      </div>
      <div class="bar"></div>
      <div class="switch">
        <marvel-switch ref="refSwitch" id="refSwitch" v-on:onChange="onChange4Switch"></marvel-switch>
      </div>
    </div>
    <div class="details large-24 middle-24 small-24 mini-24">
      <marvel-leaflet ref="refGISMap" id="refGISMap" v-on:onClick="onGisMapClick"></marvel-leaflet>
      <div class="legendArea" v-bind:class="{dpn: isLegendHide}">
        <marvel-legend :legendItems="legendItems"
                       v-on:onLegendItemClick="onLegendItemClick"></marvel-legend>
      </div>
      <div class="gridView">
        <marvel-grid :titles="titles" :rows="rows" :limit="limit" v-on:onIconClick="_onIconClick"></marvel-grid>
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
  import MarvelWarning from "@/walle/widget/warning/MarvelWarning";
  import MarvelRouter from "@/walle/component/router";
  import MarvelTimer from "@/walle/component/timer";
  import MarvelLegend from "../../walle/widget/legend/MarvelLegend";
  export default {
    components: {
      MarvelLegend,
      MarvelWarning,
      MarvelGrid,
      MarvelSwitch,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame,
      MarvelRouter,
      MarvelTimer},
    name: 'page41',
    data: function() {
      return {
        //#region const
        debug: false,
        timerInterval: 2000,
        //#endregion
        //#region crumb
        crumbItems: [{
          label: "设备监控"
        }, {
          label: "GIS视图"
        }],
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
        //#region devLst
        devLst: [],
        //#endregion
        //#region legendItems
        isLegendHide: false,
        legendItems: [{
          label: "加工",
          level: "level5",
          isHide: false
        }, {
          label: "待机",
          level: "level3",
          isHide: false
        }, {
          label: "离线",
          level: "level6",
          isHide: false
        }, {
          label: "告警",
          level: "level1",
          isHide: true
        }],
        //#endregion
        //#region warnPanel
        warnPanel: [{
          label: "加工:0",
          level: "level5"
        }, {
          label: "待机:0",
          level: "level3"
        }, {
          label: "离线:0",
          level: "level6"
        }, {
          label: "告警:0",
          level: "level1"
        }],
        //#endregion
        //#region grid
        titles: [{
          label: "",
          width: "3%"
        }, {
          label: "设备ID",
          width: "15%"
        }, {
          label: "设备名称",
          width: "15%"
        }, {
          label: "状态",
          width: "7%"
        }, {
          label: "告警",
          width: "7%"
        }, {
          label: "最近更新时间",
          width: "20%"
        }, {
          label: "经度",
          width: "10%"
        }, {
          label: "纬度",
          width: "10%"
        }, {
          label: "备注",
          width: "13%"
        }],
        rows: [],
        limit: 20
        //#endregion
      }
    },
    mounted: function(){
      var self = this;

      //1.gisMap
      //1.1.getDevLst
      this._getDevLstMock(function(){
        //1.2.init gis map
        self._initGisMap();

        //1.3.draw
        self._drawGisMap();

        //1.4.warnPanel
        self._updateWarnPanel();

        //1.5.grid
        self._drawGrid();
      });

      //2.getStatus by timer
      //2.1.timer
      MarvelTimer.startTimer(function(){
        //2.2.getDevLst
        self._getDevLstMock(function(){
          //2.3.draw
          self._updateGisMap();

          //2.4.update warnPanel
          self._updateWarnPanel();

          //2.5.grid
          self._drawGrid();
        });
      }, this.timerInterval);
    },
    destroyed: function(){
      MarvelTimer.endTimer();
    },
    methods: {
      onCrumbItemClick: function(strItemLabel){
        if("设备监控" == strItemLabel){
          MarvelRouter.to(this.$router, "page41");
        }
      },
      onChange4Switch: function(){
        var bIsGisView = this.$refs.refSwitch.getCheckItem();
        if(bIsGisView){
          this.$refs.refGISMap.showOrHide(true);
          this.crumbItems[1].label ="GIS视图";
          this.isLegendHide = false;
        }
        else{
          this.$refs.refGISMap.showOrHide(false);
          this.crumbItems[1].label ="表格视图";
          this.isLegendHide = true;
        }
      },
      _getDevLstMock: function(oCallback){
        this.companyInfo = {};
        this.devLst = [];

        if(this.debug){
          this.companyInfo = {
            clientNo: "client1",
            clientMapCenterX: "31.429",
            clientMapCenterY: "104.589",
            clientMapCenterZoomMin: "5",
            clientMapCenterZoomMax: "18"
          };

          for(var i=0;i<10;i++){
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
            this.devLst.push(oDev);
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
              this.devLst = res.data.resultObj;
              oCallback();
            });
          });
        }
      },
      _initGisMap: function(){
        this.$refs.refGISMap.init(this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          this.companyInfo.clientMapCenterZoomMin,
          this.companyInfo.clientMapCenterZoomMax,
          "/static/leaflet/images/shit.png");
      },
      _drawGisMap: function(){
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          this.$refs.refGISMap.addIcon(oDev.devId, oDev.x, oDev.y, oDev.uiImg, oDev.uiTips, oDev,
            this._onDBClickGisMap);
        }
      },
      onGisMapClick: function(oPoint){
        console.log(oPoint);
      },
      _onDBClickGisMap: function(strId){
        MarvelRouter.to(this.$router, "page42", {
          clientNo: this.companyInfo.clientNo,
          devId: strId
        });
      },
      _updateWarnPanel: function(){
        var iCountStatus1 = 0;
        var iCountStatus2 = 0;
        var iCountStatus3 = 0;
        var iCountWarn = 0;
        for(var i = 0; i< this.devLst.length;i++){
          var oDev = this.devLst[i];
          if(oDev.status == 0){
            iCountStatus1++;
          }
          else if(oDev.status == 1){
            iCountStatus2++;
          }
          else if(oDev.status == 2){
            iCountStatus3++;
          }

          if(oDev.hasWarn){
            iCountWarn++;
          }
        }

        this.warnPanel[0].label = "加工:" + iCountStatus1;
        this.warnPanel[1].label = "待机:" + iCountStatus2;
        this.warnPanel[2].label = "离线:" + iCountStatus3;
        this.warnPanel[3].label = "告警:" + iCountWarn;
      },
      _drawGrid: function(){
        this.rows = [];
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          var oRow = [
            {value: [{value: "icon-eye", color:"#808080"}], type:"icon" },
            {value: oDev.devId, type:"text"},
            {value: oDev.devName, type:"text"},
            {value: "icon-marvelIcon-16", color: "#3dcca6", label: oDev.uiStatus, type:"textIcon" },
            {value: "icon-marvelIcon-16", color: "#ff4c4c", label: oDev.warnCount, type:"textIcon"},
            {value: oDev.lastUpdateTime, type:"text"},
            {value: oDev.x, type:"text"},
            {value: oDev.y, type:"text"},
            {value: oDev.desc, type:"text"}
          ];
          if(oDev.status == 0){
            oRow[3] = {value: "icon-marvelIcon-16", color: "#008958", label: oDev.uiStatus, type:"textIcon"};
          }
          else if(oDev.status == 1){
            oRow[3] = {value: "icon-marvelIcon-16", color: "#ffaa00", label: oDev.uiStatus, type:"textIcon"};
          }
          else if(oDev.status == 2){
            oRow[3] = {value: "icon-marvelIcon-16", color: "#666", label: oDev.uiStatus, type:"textIcon"};
          }
          if(oDev.hasWarn){
            oRow[4] = {value: "icon-marvelIcon-16", color: "#ff4c4c", label: oDev.warnCount, type:"textIcon"};
          }
          this.rows.push(oRow);
        }
      },
      _updateGisMap: function(){
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          var bIsHide = false;
          //1.加工/有告警
          if(oDev.uiStatus == "加工" && oDev.hasWarn){
            var bHideThisStatus = this.legendItems[0].isHide;
            var bOnlyWatchWarn = !this.legendItems[3].isHide;
            if(bOnlyWatchWarn){
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
            else{
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
          }
          //2.加工/无告警
          else if(oDev.uiStatus == "加工" && !oDev.hasWarn){
            var bHideThisStatus = this.legendItems[0].isHide;
            var bOnlyWatchWarn = !this.legendItems[3].isHide;
            if(bOnlyWatchWarn){
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = true;
              }
            }
            else{
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
          }
          //3.待机/有告警
          else if(oDev.uiStatus == "待机" && oDev.hasWarn){
            var bHideThisStatus = this.legendItems[1].isHide;
            var bOnlyWatchWarn = !this.legendItems[3].isHide;
            if(bOnlyWatchWarn){
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
            else{
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
          }
          //4.待机/无告警
          else if(oDev.uiStatus == "待机" && !oDev.hasWarn){
            var bHideThisStatus = this.legendItems[1].isHide;
            var bOnlyWatchWarn = !this.legendItems[3].isHide;
            if(bOnlyWatchWarn){
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = true;
              }
            }
            else{
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
          }
          //5.离线/有告警
          else if(oDev.uiStatus == "离线" && oDev.hasWarn){
            var bHideThisStatus = this.legendItems[2].isHide;
            var bOnlyWatchWarn = !this.legendItems[3].isHide;
            if(bOnlyWatchWarn){
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
            else{
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
          }
          //6.离线/无告警
          else if(oDev.uiStatus == "离线" && !oDev.hasWarn){
            var bHideThisStatus = this.legendItems[2].isHide;
            var bOnlyWatchWarn = !this.legendItems[3].isHide;
            if(bOnlyWatchWarn){
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = true;
              }
            }
            else{
              if(bHideThisStatus){
                bIsHide = true;
              }
              else{
                bIsHide = false;
              }
            }
          }

          this.$refs.refGISMap.updateIcon(oDev.devId, oDev.x, oDev.y, oDev.uiImg, oDev.uiTips,
            bIsHide, oDev);
        }
      },
      onLegendItemClick: function(){
        this._updateGisMap();
      },
      _onIconClick: function(oRow){
        var strDevId = oRow[1].value;
        MarvelRouter.to(this.$router, "page42", {
          clientNo: this.companyInfo.clientNo,
          devId: strDevId
        });
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
  .search,.tip,.switch,.bar{
    float: right;
    margin-right: 20px;
  }
  .search,.switch{
    margin-top: 7px;
  }
  .tip{
    margin-top: 9px;
  }
  .bar{
    width: 1px;
    height: 20px;
    margin-top: 8px;
    background-color: rgba(255,255,255,0.4);
  }
  .details{
    height: calc(100% - 25px);
  }
  .details .gridView{
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fafafa;
  }
  .details .legendArea{
    pointer-events: none;
    position: relative;
    width: 100%;
    height: 100%;
    top: -100%;
    z-index: 1000;
  }
  .dpn {
    display: none;
  }
</style>
