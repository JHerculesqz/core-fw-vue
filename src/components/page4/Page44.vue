<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="toolbar">
      <div class="crumb">
        <marvel-crumb :items="crumbItems" theme="dark" v-on:onCrumbItemClick="onCrumbItemClick"></marvel-crumb>
      </div>
    </div>
    <div class="details large-24 middle-24 small-24 mini-24">
      <marvel-button isLarge="false" label="获得当前位置"
                     v-on:onClick="onBtnClick4GetLoc"></marvel-button>
      <marvel-input ref="ref0" placeHolder="设备ID" errMsg="输入错误..." status="disable"></marvel-input>
      <marvel-input ref="ref1" placeHolder="设备类型(1/2)" errMsg="输入错误..." status="disable"></marvel-input>
      <marvel-input ref="ref2" placeHolder="经度" errMsg="输入错误..."></marvel-input>
      <marvel-input ref="ref3" placeHolder="纬度" errMsg="输入错误..."></marvel-input>
      <marvel-button isLarge="false" label="开站"
                     v-on:onClick="onBtnClick4InitDev"></marvel-button>
      <marvel-leaflet ref="refGISMap" id="refGISMap"></marvel-leaflet>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb";
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet";
  import MarvelLocation from "@/walle/component/location"
  import MarvelButton from "@/walle/widget/button/MarvelButton";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelRouter from "@/walle/component/router";
  export default {
    components: {
      MarvelInput,
      MarvelButton,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame,
      MarvelRouter},
    name: 'page41',
    data: function() {
      return {
        //#region const
        debug: false,
        timerInterval: 2000,
        //#endregion
        //#region crumb
        crumbItems: [{
          label: "管理"
        }, {
          label: "开站"
        }],
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
        //#region devInfo
        devInfo: {
          devId: "",
          devType: "1",
          x: "",
          y: ""
        },
        //#endregion
      }
    },
    mounted: function(){
      var self = this;

      //1.init devInfo.devId
      this.devInfo.devId = MarvelRouter.getParam(this.$route, "devId");
      this.devInfo.devType = MarvelRouter.getParam(this.$route, "devType");

      //2._getLocationMock
      this._getLocationMock(function(){
        //3.init gis map
        self._initGisMap();

        //4.init input
        self._initInput();
      });
    },
    destroyed: function(){

    },
    methods: {
      onCrumbItemClick: function(strItemLabel){

      },
      _getLocationMock: function(oCallback){
        this.companyInfo = {};

        if(this.debug){
          this.companyInfo = {
            clientNo: "client1",
            clientMapCenterX: "31.429",
            clientMapCenterY: "104.589",
            clientMapCenterZoomMin: "5",
            clientMapCenterZoomMax: "18"
          };

          this.devInfo.x = this.companyInfo.clientMapCenterX;
          this.devInfo.y = this.companyInfo.clientMapCenterY;

          this._initInput();

          oCallback();
        }
        else{
          this.$http.post('/getCompanyInfo', {}).then(res=>{
            this.companyInfo = res.data.resultObj;

            this.devInfo.x = this.companyInfo.clientMapCenterX;
            this.devInfo.y = this.companyInfo.clientMapCenterY;

            this._initInput();

            oCallback();
          });
        }
      },
      _initGisMap: function(){
        this.$refs.refGISMap.init(this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          this.companyInfo.clientMapCenterZoomMin,
          this.companyInfo.clientMapCenterZoomMax,
          "/static/leaflet/images/shit.png");

        this.$refs.refGISMap.addIcon("myPos",
          this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          "/static/leaflet/images/2.png", "移动获得新坐标", undefined,
          undefined,
          this._onDragGisMap);
      },
      _onDragGisMap: function(oItem){
        this.devInfo.x = oItem._latlng.lat;
        this.devInfo.y = oItem._latlng.lng;

        this._initInput();
      },
      _initInput: function(){
        this.$refs.ref0.setInputMsg(this.devInfo.devId);
        this.$refs.ref1.setInputMsg(this.devInfo.devType);
        this.$refs.ref2.setInputMsg(this.devInfo.x);
        this.$refs.ref3.setInputMsg(this.devInfo.y);
      },
      onBtnClick4GetLoc: function(){
        var self = this;

        MarvelLocation.getLocation(function(oPos){
          //1.update self.devInfo
          self.devInfo.x = oPos.x;
          self.devInfo.y = oPos.y;

          //2.update gis map
          self._updateGisMap();

          //3.init input
          self._initInput();
        }, function(oError){
          //1.update self.devInfo
          self.devInfo.x = self.companyInfo.clientMapCenterX;
          self.devInfo.y = self.companyInfo.clientMapCenterY;

          //2.update gis map
          self._updateGisMap();

          //3.init input
          self._initInput();
        });
      },
      _updateGisMap: function(){
        this.$refs.refGISMap.updateIcon("myPos",
          this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          "/static/leaflet/images/2.png", "移动获得新坐标", undefined);
      },
      onBtnClick4InitDev: function(){
        if(this.debug){
          alert("开站成功...");
        }
        else{
          this.$http.post('/initDevByDevId', {
            "reqBuVoStr": JSON.stringify({
              clientNo: this.companyInfo.clientNo,
              devId: this.$refs.ref0.getInputMsg(),
              devType: this.$refs.ref1.getInputMsg(),
              x: this.$refs.ref2.getInputMsg(),
              y: this.$refs.ref3.getInputMsg()
            })
          }).then(res=>{
            alert("开站成功...");
          });
        }
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
</style>
