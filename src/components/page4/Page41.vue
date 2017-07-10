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
        //region statusLst
        statusLst: [],
        //endregion
        //region warnPanel
        warnPanel: [],
        //endregion
        //region grid
        titles: [{
          label: "ID",
          width: "5%"
        }, {
          label: "名称",
          width: "5%"
        }, {
          label: "描述",
          width: "15%"
        }, {
          label: "制造时间",
          width: "5%"
        }, {
          label: "状态",
          width: "5%"
        }, {
          label: "告警",
          width: "5%"
        }, {
          label: "最近更新时间",
          width: "10%"
        }, {
          label: "买家公司",
          width: "10%"
        }, {
          label: "买家地址",
          width: "5%"
        }, {
          label: "是否锁定",
          width: "5%"
        }, {
          label: "所在城市",
          width: "10%"
        }, {
          label: "所在部门",
          width: "5%"
        }, {
          label: "绑定手机11",
          width: "5%"
        }, {
          label: "经度",
          width: "5%"
        }, {
          label: "纬度",
          width: "5%"
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
      this._getDevLstMock();
      //1.3.draw
      this._drawGisMap();

      //2.warnPanel
      this._updateWarnPanel();

      //3.grid
      this._drawGrid();

      //3.getStatus by timer
      this.timer = setInterval(function(){
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
            y: -0.09 + Math.random() * 0.1,
            desc: "",
            createTime: "",
            lastUpdateTime: "",
            company: "",
            addr: "",
            lock: "",
            city: "",
            department: "",
            phone: ""
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
      },
      _drawGrid: function(){
        this.rows = [];
        for(var i=0;i<10;i++){
          var oDev = this.devLst[i];
          var oRow = [];
          oRow.push({value: oDev.id, type:"text"});
          oRow.push({value: oDev.name, type:"text"});
          oRow.push({value: oDev.desc, type:"text"});
          oRow.push({value: oDev.createTime, type:"text"});
          oRow.push({value: oDev.status, type:"text"});
          oRow.push({value: oDev.warn, type:"text"});
          oRow.push({value: oDev.lastUpdateTime, type:"text"});
          oRow.push({value: oDev.company, type:"text"});
          oRow.push({value: oDev.addr, type:"text"});
          oRow.push({value: oDev.lock, type:"text"});
          oRow.push({value: oDev.city, type:"text"});
          oRow.push({value: oDev.department, type:"text"});
          oRow.push({value: oDev.phone, type:"text"});
          oRow.push({value: oDev.x, type:"text"});
          oRow.push({value: oDev.y, type:"text"});
          this.rows.push(oRow);
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
