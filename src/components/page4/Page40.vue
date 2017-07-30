<template>
  <div class="loginPage">
    <div v-bind:class="[loginBgRandom]"></div>
    <div class="loginArea">
      <div class="solgan1"></div>
      <div class="solgan2">造云 | 你造物 我造云</div>
      <div class="inputArea">
        <div class="inputWrapper icon-marvelIcon-10">
          <input ref="ref0" type="text" placeholder="Username" v-model="userName">
        </div>
        <div class="inputWrapper icon-marvelIcon-11">
          <input ref="ref1" type="password" placeholder="Password" v-model="pwd">
        </div>
      </div>
      <div class="signIn" v-on:click="onClick">Sign In</div>
    </div>
    <div class="copyRight">Copyright 2017 造云 http://www.zaocloud.com – 鄂ICP备16005435号-3</div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";
  export default {
    components: {},
    name: 'page40',
    data: function() {
      return {
        //#region const
        debug: false,
        //#endregion
        //#region loginBgRandom
        loginBgRandom: "loginBg0",
        //#endregion
        //#region user/pwd
        userName: "",
        pwd: ""
        //#endregion
      }
    },
    mounted: function(){
      var iRandom = Math.ceil(Math.random() * 5);
      this.loginBgRandom = "loginBg" + iRandom;
    },
    destroyed: function(){

    },
    methods: {
      onClick: function(){
        MarvelRouter.to(this.$router, "page41");
      }
    }
  }
</script>

<style scoped>
  .loginBg0{
     position: fixed;
     width: 1000%;
     height: 1000%;
     top: 0;
     left: 0;
     background: url("/static/demo/bg0.png") no-repeat center;
     background-size: 100%;
     -moz-animation: animate 200s linear 0s infinite;
     -webkit-animation: animate 200s linear 0s infinite;
     -o-animation: animate 200s linear 0s infinite;
     animation: animate 200s linear 0s infinite;
   }
  .loginBg1{
    position: fixed;
    width: 1000%;
    height: 1000%;
    top: 0;
    left: 0;
    background: url("/static/demo/bg1.png") no-repeat center;
    background-size: 100%;
    -moz-animation: animate 200s linear 0s infinite;
    -webkit-animation: animate 200s linear 0s infinite;
    -o-animation: animate 200s linear 0s infinite;
    animation: animate 200s linear 0s infinite;
  }
  .loginBg2{
    position: fixed;
    width: 1000%;
    height: 1000%;
    top: 0;
    left: 0;
    background: url("/static/demo/bg2.png") no-repeat center;
    background-size: 100%;
    -moz-animation: animate 200s linear 0s infinite;
    -webkit-animation: animate 200s linear 0s infinite;
    -o-animation: animate 200s linear 0s infinite;
    animation: animate 200s linear 0s infinite;
  }
  .loginBg3{
    position: fixed;
    width: 1000%;
    height: 1000%;
    top: 0;
    left: 0;
    background: url("/static/demo/bg3.png") no-repeat center;
    background-size: 100%;
    -moz-animation: animate 200s linear 0s infinite;
    -webkit-animation: animate 200s linear 0s infinite;
    -o-animation: animate 200s linear 0s infinite;
    animation: animate 200s linear 0s infinite;
  }
  .loginBg4{
    position: fixed;
    width: 1000%;
    height: 1000%;
    top: 0;
    left: 0;
    background: url("/static/demo/bg4.png") no-repeat center;
    background-size: 100%;
    -moz-animation: animate 200s linear 0s infinite;
    -webkit-animation: animate 200s linear 0s infinite;
    -o-animation: animate 200s linear 0s infinite;
    animation: animate 200s linear 0s infinite;
  }
  .loginBg5{
    position: fixed;
    width: 1000%;
    height: 1000%;
    top: 0;
    left: 0;
    background: url("/static/demo/bg5.png") no-repeat center;
    background-size: 100%;
    -moz-animation: animate 200s linear 0s infinite;
    -webkit-animation: animate 200s linear 0s infinite;
    -o-animation: animate 200s linear 0s infinite;
    animation: animate 200s linear 0s infinite;
  }
  @-webkit-keyframes animate {
    0%,100%{ top:0;left:0;}
    20%{top:-900%;left:-900%;}
    30%{top:0;left:-900%;}
    50%{top:-900%;left:0;}
    60%{top:0;left:0;}
    70%{top:0;left:-900%;}
    80%{top:-900%;left:-900%;}
    90%{top:0;left:-900%;}
  }
  @-moz-keyframes animate {
    0%,100%{ top:0;left:0;}
    20%{top:-900%;left:-900%;}
    30%{top:0;left:-900%;}
    50%{top:-900%;left:0;}
    60%{top:0;left:0;}
    70%{top:0;left:-900%;}
    80%{top:-900%;left:-900%;}
    90%{top:0;left:-900%;}
  }
  @keyframes animate {
    0%,100%{ top:0;left:0;}
    20%{top:-900%;left:-900%;}
    30%{top:0;left:-900%;}
    50%{top:-900%;left:0;}
    60%{top:0;left:0;}
    70%{top:0;left:-900%;}
    80%{top:-900%;left:-900%;}
    90%{top:0;left:-900%;}
  }
  .loginArea{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -230px;
    margin-left: -450px;
    padding-top: 50px;
    width: 900px;
    height: 380px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 2px;
  }
  .loginArea .solgan1{
    width: 100%;
    height: 50px;
    background: url("/static/demo/slogan.svg") no-repeat center;
    background-size: contain;
    margin-bottom: 30px;
  }
  .loginArea .solgan2{
    color: #ffffff;
    font-size: 24px;
    line-height: 24px;
    font-family: arial, "微软雅黑", sans-serif;
    text-align: center;
    margin-bottom: 70px;
    word-spacing: 3px;
  }
  .loginArea .inputArea{
    height: 44px;
    width: 700px;
    margin: 0 auto 60px auto;
    clear: both;
  }
  .loginArea .inputArea .inputWrapper{
    float: left;
    height: 100%;
    width: 300px;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    font-size: 34px;
    position: relative;
  }
  .loginArea .inputArea .inputWrapper:first-child{
    float: left;
  }
  .loginArea .inputArea .inputWrapper:last-child{
    float: right;
  }
  .loginArea .inputArea .inputWrapper input{
    outline: none;
    border: none;
    width: 240px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    color: #ffffff;
    font-size: 18px;
    position: absolute;
    top: 0;
    left: 44px;
    background-color: rgba(0,0,0,0);
  }
  .loginArea .signIn{
    width: 200px;
    height: 44px;
    border: 1px solid #ffffff;
    line-height: 44px;
    box-sizing: border-box;
    margin: 0 auto;
    color: #ffffff;
    font-family: arial, "微软雅黑", sans-serif;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 2px;
  }
  .copyRight{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
</style>
