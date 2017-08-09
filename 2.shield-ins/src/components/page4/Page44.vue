<template>
  <div class="container large-24 middle-24 small-24 mini-24">
    <marvel-frame></marvel-frame>
    <div class="contArea">
      <div class="mapArea large-24 middle-24 small-24 mini-24">
        <marvel-leaflet ref="refGISMap2" id="refGISMap2"></marvel-leaflet>
      </div>
      <div class="details">
        <div class="detailsBlock1">
          <div class="detailsName icon-codepen">
            设备ID：<span>{{devId}}</span>
          </div>
          <div class="detailsName icon-earth">
            经度/纬度：<span>{{x}}</span> / <span>{{y}}</span>
          </div>
        </div>
        <div class="iconBtnArea icon-location2" v-on:click="onBtnClick4GetLoc"></div>
        <div class="inputBlock">
          <div class="detailsCont">
            <marvel-input ref="ref1" theme="dark" size=""
                          placeHolder="请输入设备名称33333"
                          errMsg="输入错误..." status=""></marvel-input>
          </div>
          <div class="detailsBtn" v-on:click="onBtnClick4InitDev">开站</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb";
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet";
  import MarvelLocation from "@/walle/component/location"
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelRouter from "@/walle/component/router";
  export default {
    components: {
      MarvelInput,
      MarvelPrimaryButton,
      MarvelLeaflet,
      MarvelCrumb,
      MarvelFrame,
      MarvelRouter},
    name: 'page41',
    data: function() {
      return {
        //#region const
        debug: false,
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
        //#region devInfo
        devId: "",
        devType: "1",
        x: "",
        y: "",
        devName: ""
        //#endregion
      }
    },
    mounted: function(){
      var self = this;

      //1._getCompanyInfoMock
      this._getCompanyInfoMock(function(){
        //2._initDevInfo
        self._initDevInfo();

        //3._initGisMap
        self._initGisMap();
      });
    },
    destroyed: function(){

    },
    methods: {
      _getCompanyInfoMock: function(oCallback){
        this.companyInfo = {};

        if(this.debug){
          this.companyInfo = {
            clientNo: "client1",
            clientMapCenterX: "31.429",
            clientMapCenterY: "104.589",
            clientMapCenterZoomMin: "5",
            clientMapCenterZoomMax: "18"
          };

          oCallback();
        }
        else{
          this.$http.post('/getCompanyInfo', {}).then(res=>{
            this.companyInfo = res.data.resultObj;

            oCallback();
          });
        }
      },
      _initDevInfo: function(){
        this.devId = MarvelRouter.getParam(this.$route, "devId");
        this.devType = MarvelRouter.getParam(this.$route, "devType");
        this.x = this.companyInfo.clientMapCenterX;
        this.y = this.companyInfo.clientMapCenterY;
      },
      _initGisMap: function(){
        this.$refs.refGISMap2.init(this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          this.companyInfo.clientMapCenterZoomMin,
          this.companyInfo.clientMapCenterZoomMax,
          "/static/leaflet/images/shit.png");

        this.$refs.refGISMap2.addIcon("myPos",
          this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          "/static/leaflet/images/2.png", "移动获得新坐标", undefined,
          undefined,
          this._onDragGisMap);
      },
      _onDragGisMap: function(oItem){
        this.x = oItem._latlng.lat;
        this.y = oItem._latlng.lng;
      },
      onBtnClick4InitDev: function(){
        if(this.debug){
          alert("开站成功...");
        }
        else{
          this.devName = this.$refs.ref1.getInputMsg();
          this.$http.post('/initDevByDevId', {
            "reqBuVoStr": JSON.stringify({
              clientNo: this.companyInfo.clientNo,
              devId: this.devId,
              devType: this.devType,
              x: this.x,
              y: this.y,
              devName: this.devName
            })
          }).then(res=>{
            alert("开站成功...");
          });
        }
      },
      onBtnClick4GetLoc: function(){
        var self = this;

        MarvelLocation.getLocation(function(oPos){
          //1.update self.devInfo
          self.x = oPos.x;
          self.y = oPos.y;

          //2.update gis map
          self._updateGisMap();

          alert("坐标获取成功...");
        }, function(oError){
          //1.update self.devInfo
          self.x = self.companyInfo.clientMapCenterX;
          self.y = self.companyInfo.clientMapCenterY;

          //2.update gis map
          self._updateGisMap();

          alert("坐标获取失败...请扔掉你的手机...");
        });
      },
      _updateGisMap: function(){
        this.$refs.refGISMap2.updateIcon("myPos",
          this.companyInfo.clientMapCenterX,
          this.companyInfo.clientMapCenterY,
          "/static/leaflet/images/2.png", "移动获得新坐标", undefined);
      },
    }
  }
</script>

<style scoped>
  .container{
    height: 100%;
  }
  .contArea{
    width: 100%;
    height:100%;
    position: fixed;
    top: 0;
    left: 0px;
  }
  .contArea .mapArea{
    height:100%;
  }
  .contArea .details{
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1000;
  }
  .details .detailsBlock1{
    position: absolute;
    padding: 10px;
    box-sizing: border-box;
    pointer-events: auto;
    width: calc(100% - 20px);
    background-color: rgba(24,27,33,0.9);
    top: 10px;
    left: 10px;
    border: 1px dashed #ccc;
  }
  .details .detailsBlock1 .detailsName{
    font-size: 14px;
    color: #f0f0f0;
    line-height: 22px;
  }
  .details .detailsBlock1 .detailsName:before{
    font-size: 18px;
    margin-right: 10px;
    line-height: 22px;
  }
  .details .iconBtnArea{
    position: absolute;
    left: 10px;
    bottom: 120px;
    width: 40px;
    height: 40px;
    color: #ff6767;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.25);
    border-radius: 100%;
    pointer-events: auto;
    background-color: #41475a;
  }
  .details .inputBlock{
    pointer-events: auto;
    height: 98px;
    position: absolute;
    bottom: 10px;
    width: calc(100% - 20px);
    left: 10px;
    background-color: #181b21;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.25);
  }
  .details .inputBlock .detailsCont{
    height: 36px;
    padding-bottom: 6px;
  }
  .details .inputBlock .detailsBtn{
    height: 36px;
    background-color: #3399ff;
    line-height: 36px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    letter-spacing: 16px;
  }
</style>
