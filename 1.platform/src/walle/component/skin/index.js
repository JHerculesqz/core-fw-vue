export default {
  themeChange: function (strTheme) {
    //1.get current theme
    var strClassName = document.body.className;
    //2.kill me
    document.body.classList.remove(strClassName);
    //3.change new girl friend
    document.body.classList.add(strTheme);
  }
}
