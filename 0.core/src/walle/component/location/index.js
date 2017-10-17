export default {
  getLocation: function (oCallbackOK, oCallbackFail) {
    var options={
      enableHighAccuracy:true,
      timeout: 5000,
      maximumAge:0
    };
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        if(oCallbackOK){
          var oRes = {
            x: position.coords.longitude,
            y: position.coords.latitude
          };
          oCallbackOK(oRes);
        }
      },function(oError){
        if(oCallbackFail){
          oCallbackFail(oError);
        }
      },options);
    }else{
      alert("内核不支持获取地理坐标!");
    }
  },
  getLocationByBD: function (oCallbackOK, oCallbackFail) {
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        if(oCallbackOK){
          var oRes = {
            x: r.point.lng,
            y: r.point.lat
          };
          oCallbackOK(oRes);
        }
      }
      else {
        if(oCallbackFail){
          oCallbackFail(this.getStatus());
        }
      }
    }, {
      enableHighAccuracy: true
    });
  }
}
