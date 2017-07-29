export default {
  getLocation: function (oCallback) {
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
        oCallback(oRes);
      },function(error){
        switch(error.code){
          case 1:
            alert("位置服务被拒绝");
            break;
          case 2:
            alert("暂时获取不到位置信息");
            break;
          case 3:
            alert("获取信息超时");
            break;
          case 4:
            alert("未知错误");
            break;
        }
      },options);
    }else{
      alert("内核不支持获取地理坐标!");
    }
  }
}
