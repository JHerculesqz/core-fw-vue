import DateUtils from "@/walle/component/date"

export default {
  debug: function (strModuleName, strMethodName, strMsg) {
    var strLog = "[" + strModuleName + "." + strMethodName + "]" +
      "[" + DateUtils.now() + "]" +
      strMsg;
    console.log(strLog);
  }
}
