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
      <div class="gridView">
        <marvel-grid :titles="titles" :rows="rows"></marvel-grid>
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
        //region const
        debug: false,
        timerInterval: 2000,
        //endregion
        //region crumb
        crumbItems: [{
          label: "设备监控",
          click: function(){

          }
        }, {
          label: "GIS视图",
          click: function(){

          }
        }],
        //endregion
        //region devLst
        devLst: [],
        //endregion
        //region warnPanel
        warnPanel: [],
        //endregion
        //region grid
        titles: [{
          label: "ID",
          width: "15%"
        }, {
          label: "名称",
          width: "15%"
        }, {
          label: "状态",
          width: "5%"
        }, {
          label: "告警",
          width: "5%"
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
          width: "20%"
        }],
        rows: [],
        //endregion
        //region timer
        timer: undefined
        //endregion
      }
    },
    mounted: function(){
      var self = this;

      //1.gisMap
      //1.1.init gis map
      this.$refs.refGISMap.init(51.505, -0.09, 13, 18, "/static/leaflet/images/shit.png");
      //1.2.getDevLst
      this._getDevLstMock(function(){
        //1.3.draw
        self._drawGisMap();

        //1.4.warnPanel
        self._updateWarnPanel();

        //1.5.grid
        self._drawGrid();
      });

      //2.getStatus by timer
      //2.1.timer
      this.timer = setInterval(function(){
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
      if(this.timer != undefined){
        clearInterval(this.timer);
      }
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
      _getDevLstMock: function(oCallback){
        this.devLst = [];

        if(this.debug){
          for(var i=0;i<10;i++){
            var oDev = {
              id: i,
              clientNo: "client1",
              devId: "3217030228" + i,
              x: 51.5 + Math.random() * 0.1,
              y: -0.09 + Math.random() * 0.1,
              lastUpdateTime: "2017-07-14 10:00:00.540",
              status: Math.random() > 0.5 ? "加工": "离线",
              hasWarn: Math.random() > 0.5 ? true: false,
              warnCount: (Math.random() * 10).toFixed(0)
            };
            this.devLst.push(oDev);
          }
          oCallback();
        }
        else{
          this.$http.post('/getDevLst', {
            reqBuVoStr: JSON.stringify({clientNo:"client1"})
          }).then(res=>{
            this.devLst = res.data.resultObj;
            oCallback();
          });
        }
      },
      _drawGisMap: function(){
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          var strImgUrl = false == oDev.hasWarn ?
            "/static/leaflet/images/dev1.png" :
            "/static/leaflet/images/dev2.png";
          var strTips = "<b>" + oDev.devId + "</b><br>" +
            "状态:" + oDev.status + "<br>" +
            "告警数量:" + oDev.warnCount + "<br>";
          this.$refs.refGISMap.addIcon(oDev.id, oDev.x, oDev.y, strImgUrl, strTips, oDev,
            this._onDBClickGisMap);
        }
      },
      _onDBClickGisMap: function(strId){
        this.$router.push({name: "page42", query: { id: strId }});
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

          if(oDev.hasWarn){
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
      },
      _drawGrid: function(){
        this.rows = [];
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          var oRow = [];
          oRow.push({value: oDev.devId, type:"text"});
          oRow.push({value: oDev.devId, type:"text"});
          oRow.push({value: oDev.status, type:"text"});
          oRow.push({value: oDev.warnCount, type:"text"});
          oRow.push({value: oDev.lastUpdateTime, type:"text"});
          oRow.push({value: oDev.x, type:"text"});
          oRow.push({value: oDev.y, type:"text"});
          oRow.push({value: oDev.desc, type:"text"});
          this.rows.push(oRow);
        }
      },
      _updateGisMap: function(){
        for(var i=0;i<this.devLst.length;i++){
          var oDev = this.devLst[i];
          var strImgUrl = false == oDev.hasWarn ?
            "/static/leaflet/images/dev1.png" :
            "/static/leaflet/images/dev2.png";
          var strTips = "<b>" + oDev.devId + "</b><br>" +
            "状态:" + oDev.status + "<br>" +
            "告警数量:" + oDev.warnCount + "<br>";
          this.$refs.refGISMap.updateIcon(oDev.id, strImgUrl, strTips, oDev);
        }
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
  .details .gridView{
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fafafa;
  }
</style>
