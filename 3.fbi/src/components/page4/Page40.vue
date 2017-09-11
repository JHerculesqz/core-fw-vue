<template>
  <div class="loginPage">
    <div class="loginBg" v-bind:class="[loginBgRandom]"></div>
    <div class="loginArea">
      <div class="solgan1"
           v-bind:style="{ backgroundImage : 'url(' + companyInfo.sloganImgUrl + ')'}"></div>
      <div class="solgan2">{{ companyInfo.sloganLabel }}</div>
      <div class="inputArea">
        <div class="inputWrapper icon-marvelIcon-10">
          <input ref="ref0" type="text" placeholder="Username" v-model="user">
        </div>
        <div class="inputWrapper icon-marvelIcon-11">
          <input ref="ref1" type="password" placeholder="Password" v-model="pwd"
                 v-on:keyup.enter="onClick">
        </div>
      </div>
      <div class="rememberMeArea">
        <marvel-check-box ref="refRememberMe" id="refRememberMe"
                          label="记住我" showLabel="true"></marvel-check-box>
      </div>
      <div class="signIn" v-on:click="onClick">Sign In</div>
    </div>
    <div class="copyRight">{{ companyInfo.sloganCopyRight }}</div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";
  import MarvelCheckBox from "@/walle/widget/select/MarvelCheckBox";
  export default {
    components: {MarvelCheckBox},
    name: 'page40',
    data: function() {
      return {
        //#region const
        debug: false,
        //#endregion
        //#region loginBgRandom
        loginBgRandom: "loginBg0",
        redirectUrl: undefined,
        //#endregion
        //#region user/pwd
        user: "",
        pwd: "",
        //#endregion
        //#region companyInfo
        companyInfo: {},
        //#endregion
      }
    },
    mounted: function(){
      var iRandom = Math.ceil(Math.random() * 5);
      this.loginBgRandom = "loginBg" + iRandom;
      this.redirectUrl = MarvelRouter.getParam(this.$route, "redirect");

      this._getCompanyInfo();
    },
    destroyed: function(){

    },
    methods: {
      _getCompanyInfo: function(){
        if(this.debug){
          this.companyInfo = {
            clientNo: "client1",
            clientMapCenterX: "31.429",
            clientMapCenterY: "104.589",
            clientMapCenterZoomMin: "5",
            clientMapCenterZoomMax: "18",
            logoImgUrl: "/static/demo/logo1.png",
            sloganImgUrl: "/static/demo/slogan1.png",
            sloganLabel: "锐 意 进 取 ， 科 技 创 新",
            sloganCopyRight: "Copyright 2017 Raycus – 鄂ICP备16005435号-3"
          };
        }
        else{
          this.$http.post('/getCompanyInfo', {}).then(res=>{
            this.companyInfo = res.data.resultObj;
          });
        }
      },
      onClick: function(){
        var self = this;

        if(this.debug){
          //do nothing
        }
        else{
          this.$http.post('/login', {
            reqBuVoStr: JSON.stringify({
              user: this.user,
              pwd: this.pwd,
              rememberMe: this.$refs.refRememberMe.getCheckItem()
            })
          }).then(res=>{
            if(res.data.ok){
              if(undefined == this.redirectUrl){
                MarvelRouter.to(self.$router, "page41");
              }
              else{
                MarvelRouter.toEx(self.$router, this.redirectUrl);
              }
            }
            else{
              alert(res.data.resultObj);
            }
          });
        }
      }
    }
  }
</script>

<style scoped>
  .loginPage{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .loginBg0{
    background: url("/static/demo/bg0.png") no-repeat center;
  }
  .loginBg1{
    background: url("/static/demo/bg1.png") no-repeat center;
  }
  .loginBg2{
    background: url("/static/demo/bg2.png") no-repeat center;
  }
  .loginBg3{
    background: url("/static/demo/bg3.png") no-repeat center;
  }
  .loginBg4{
    background: url("/static/demo/bg4.png") no-repeat center;
  }
  .loginBg5{
    background: url("/static/demo/bg5.png") no-repeat center;
  }
  .loginBg{
    position: fixed;
    width: 1000%;
    height: 1000%;
    top: 0;
    left: 0;
    background-size: cover;
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

  @media (max-width: 768px){
    .loginArea{
      position: absolute;
      top: 50%;
      left: 20px;
      margin-top: -170px;
      padding: 20px 16px;
      width:calc(100% - 40px);
      /*height: 480px;*/
      background-color: rgba(255,255,255,0.1);
      border-radius: 2px;
      box-sizing:border-box;
    }
    .loginArea .solgan1{
      color: #ffffff;
      font-size: 36px;
      line-height: 40px;
      font-family: arial, "微软雅黑", sans-serif;
      text-align: center;
      width: 100%;
      height: 40px;
      /*background: url("/static/demo/logo.png") no-repeat center;*/
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin-bottom: 20px;
    }
    .loginArea .solgan2{
      color: #ffffff;
      font-size: 16px;
      line-height: 24px;
      font-family: arial, "微软雅黑", sans-serif;
      text-align: center;
      margin-bottom: 30px;
      word-spacing: 3px;
    }
    .loginArea .inputArea{
      width: 100%;
      overflow:hidden;
      margin: 0 auto 10px auto;
    }
    .loginArea .rememberMeArea{
      width: 100%;
      margin: 0 auto 10px auto;
    }
    .loginArea .rememberMeArea *{
      color: #ffffff !important;
    }
    .loginArea .inputArea .inputWrapper{
      height: 44px;
      width: 100%;
      border-bottom: 1px solid #ffffff;
      color: #ffffff;
      font-size: 34px;
      position: relative;
      margin-bottom:20px;
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
      width: calc(100% - 68px);
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
  }
  @media (min-width: 768px){
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
      color: #ffffff;
      font-size: 42px;
      line-height: 50px;
      font-family: arial, "微软雅黑", sans-serif;
      text-align: center;
      width: 100%;
      height: 50px;
      /*background: url("/static/demo/logo.png") no-repeat center;*/
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin-bottom: 30px;
    }
    .loginArea .solgan2{
      color: #ffffff;
      font-size: 24px;
      line-height: 16px;
      font-family: arial, "微软雅黑", sans-serif;
      text-align: center;
      margin-bottom: 70px;
      word-spacing: 3px;
    }
    .loginArea .inputArea{
      height: 44px;
      width: 700px;
      margin: 0 auto 20px auto;
      clear: both;
    }
    .loginArea .rememberMeArea{
      width: 100%;
      width: 700px;
      margin: 0 auto 40px auto;
    }
    .loginArea .rememberMeArea *{
      color: #ffffff !important;
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
