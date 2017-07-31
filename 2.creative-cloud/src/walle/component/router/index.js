export default {
  to: function (oRouter, strPageName, oParam) {
    if(oParam == undefined){
      oRouter.push({
        name: strPageName
      });
    }
    else{
      oRouter.push({
        name: strPageName,
        query: oParam
      });
    }
  },
  getParam: function(oRouter, strKey){
    var strValue = oRouter.query[strKey];
    return strValue;
  }
}
