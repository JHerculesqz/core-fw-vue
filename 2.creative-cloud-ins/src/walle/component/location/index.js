export default {
  getLocation: function (oCallbackOK, oCallbackFail) {
    var options={
      enableHighAccuracy:true,
      timeout: 5000,
      maximumAge:0
    };
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){

        var oRes = {
          x: position.coords.longitude,
          y: position.coords.latitude
        };
        oCallbackOK(oRes);
      },function(oError){
        oCallbackFail(oError);
      },options);
    }else{
      alert("内核不支持获取地理坐标!");
    }
  }
}
