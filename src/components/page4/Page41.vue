<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar">
      <div class="crumb">
        <marvel-crumb :items="crumbItems" theme="dark"></marvel-crumb>
      </div>
      <div class="search">
        搜索框占位置
      </div>
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
      <marvel-grid ref="refGrid"></marvel-grid>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb";
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet";
  import MarvelSwitch from "@/walle/widget/select/MarvelSwitch";
  import MarvelGrid from "@/walle/widget/gird/MarvelGrid";
  import MarvelWarning from "../../walle/widget/warning/MarvelWarning";
  export default {
    components: {
      MarvelWarning,
      MarvelGrid,
      MarvelSwitch,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame},
    name: 'page41',
    data: function() {
      return {
        crumbItems: [{
          label: "设备监控",
          click: function(){

          }
        }, {
          label: "GIS视图",
          click: function(){

          }
        }],
        devLst: [],
        statusLst: [],
        warnPanel: []
      }
    },
    mounted: function(){
      var self = this;

      //1.gisMap
      //1.1.init gis map
      this.$refs.refGISMap.init(51.505, -0.09, 13, 18, "/static/leaflet/images/shit.png");
      //1.2.getDevLst
      this._getDevLstMock();
      //1.3.draw
      this._drawGisMap();

      //2.warnPanel
      this._updateWarnPanel();

      //3.getStatus by timer
      setInterval(function(){
        //3.1.getStatusLst
        self._getStatusLstMock();

        //3.2.merge
        self._mergeStatus2DevLst();

        //3.3.draw
        self._updateGisMap();

        //3.4.update warnPanel
        self._updateWarnPanel();
      }, 2000);
    },
    methods: {
      onChange4Switch: function(){
        var bIsGisView = this.$refs.refSwitch.getCheckItem();
        if(bIsGisView){
          this.$refs.refGISMap.showOrHide(true);
          this.crumbItems[1].label="GIS视图";
        }
        else{
          this.$refs.refGISMap.showOrHide(false);
          this.crumbItems[1].label="表格视图";
        }
      },
      onGisMapClick: function(oPoint){
        console.log(oPoint);
      },
      _getDevLstMock: function(){
        this.devLst = [];
        for(var i=0;i<10;i++){
          var oDev = {
            id: i,
            name: "3217030228" + i,
            warn: i % 2 ==0 ? true: false,
            status: "加工",
            laser: "Raycus-500w",
            x: 51.5 + Math.random() * 0.1,
            y: -0.09 + Math.random() * 0.1
          };
          this.devLst.push(oDev);
        }
      },
      _drawGisMap: function(){
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          var strImgUrl = oDev.warn ?
            "/static/leaflet/images/dev1.png" :
            "/static/leaflet/images/dev2.png";
          var strUrl = "/page4/page42?id=" + oDev.id;
          var strTips = "<b>" + oDev.name + "</b><br>" +
            oDev.status + "<br>" +
            oDev.laser + "<br>" +
            "<a href=\"" + strUrl + "\">单站管理</a><br>";
          this.$refs.refGISMap.addIcon(oDev.id, oDev.x, oDev.y, strImgUrl, strTips, oDev);
        }
      },
      _getStatusLstMock: function(){
        this.statusLst = [];
        for(var i=0;i<10;i++){
          var oStatus = {
            id: i
          };
          var iStatus = Math.random();
          if(iStatus > 0 && iStatus <= 0.3){
            oStatus.status = "加工";
          }
          else if(iStatus > 0.3 && iStatus <= 0.6){
            oStatus.status = "待机";
          }
          else {
            oStatus.status = "离线";
          }
          oStatus.warn = Math.random() > 0.5 ? true : false;
          this.statusLst.push(oStatus);
        }
      },
      _mergeStatus2DevLst: function(){
        for(var i=0;i< this.statusLst.length;i++){
          var oStatus = this.statusLst[i];
          for(var j=0;j<this.devLst.length;j++){
            var oDev = this.devLst[j];
            if(oDev.id == oStatus.id){
              oDev.status = oStatus.status;
              oDev.warn = oStatus.warn;
              break;
            }
          }
        }
      },
      _updateGisMap: function(){
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          var strImgUrl = oDev.warn ?
            "/static/leaflet/images/dev1.png" :
            "/static/leaflet/images/dev2.png";
          var strUrl = "/page4/page42?id=" + oDev.id;
          var strTips = "<b>" + oDev.name + "</b><br>" +
            oDev.status + "<br>" +
            oDev.laser + "<br>" +
            "<a href=\"" + strUrl + "\">单站管理</a><br>";
          this.$refs.refGISMap.updateIcon(oDev.id, strImgUrl, strTips, oDev);
        }
      },
      _updateWarnPanel: function(){
        var iCountStatus1 = 0;
        var iCountStatus2 = 0;
        var iCountStatus3 = 0;
        var iCountWarn = 0;
        for(var i = 0; i< this.devLst.length;i++){
          var oDev = this.devLst[i];
          if(oDev.status == "加工"){
            iCountStatus1++;
          }
          else if(oDev.status == "待机"){
            iCountStatus2++;
          }
          else if(oDev.status == "离线"){
            iCountStatus3++;
          }

          if(oDev.warn){
            iCountWarn++;
          }
        }

        this.warnPanel = [{
          label: "加工:" + iCountStatus1,
          level: "level5"
        }, {
          label: "待机" + iCountStatus2,
          level: "level3"
        }, {
          label: "离线" + iCountStatus3,
          level: "level6"
        }, {
          label: "告警" + iCountWarn,
          level: "level1"
        }];
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
</style>
