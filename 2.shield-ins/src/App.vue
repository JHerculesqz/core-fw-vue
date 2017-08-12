<template>
  <div id="app">
    <div class="header">
      <div class="logo"></div>
      <ul>
        <li>
          <router-link :to="{name:'page41'}" exact>设备监控</router-link>
        </li>
        <li>
          <router-link :to="{name:'page43'}" exact>商业洞察</router-link>
        </li>
        <li v-bind:class="{ dpn: isHide }">
          <router-link :to="{name:'page45'}" exact>管理</router-link>
        </li>
      </ul>
      <div class="userInfoArea">
        <div class="userInfoItem">
          <div class="userInfoIcon icon-marvelIcon-10"></div>
          <div class="userInfoName">{{ user }}</div>
        </div>
        <div class="userInfoItem">
          <div class="userInfoIcon icon-marvelIcon-12"></div>
          <div class="userInfoName" v-on:click="onClickLogout">Logout</div>
        </div>
      </div>
    </div>
    <div class="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";

  export default {
    name: 'app',
    data: function(){
      return {
        //#region const
        debug: false,
        //#endregion
        //#region user
        user: "",
        isHide: false
        //#endregion
      };
    },
    methods: {
      onClickLogout: function(){
        this.$http.post('/logout', {}).then(res=>{
          MarvelRouter.to(this.$router, "page40");
        });
      }
    },
    watch: {
      '$route' (to, from) {
        var self = this;
        if(this.debug){
          this.user = "debug";
        }
        else{
          this.$http.post('/getLoginUser', {}).then(res=>{
            if(res.data.ok){
              self.user = res.data.resultObj.user;
              if(0 == res.data.resultObj.role){
                self.isHide = false;
              }
              else{
                self.isHide = true;
              }
            }
          });
        }
      }
    }
  }
</script>

<style>
  .dpn {
    display: none;
  }
  body {
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #app {
    height:100%;
  }
  .header{
    height: 50px;
    background-color: #181b21;
  }
  .header .logo{
    width: 150px;
    height: 100%;
    float: left;
    background: url("/static/demo/logo.svg") no-repeat center;
    background-size: 70%;
  }
  .header ul{
    margin: 0;
    padding: 0
  }
  .header ul li{
    float: left;
    margin-right: 15px;
    margin-top: 0;
    list-style-type: none
  }
  .header ul li a{
    line-height: 50px;
    color: #ffffff;
    font-size: 16px;
    padding: 0 10px;
    text-decoration: none;
  }
  .header ul li .active{
    color:#00a0e9;
  }
  .header .userInfoArea{
    height: 100%;
    float: right;
    overflow: hidden;
  }
  .header .userInfoArea .userInfoItem{
    float: left;

    margin-right: 20px;
  }
  .header .userInfoArea .userInfoItem .userInfoIcon{
    float: left;
    font-size: 24px;
    line-height: 50px;
    margin-right: 10px;
    color: #FFFFFF;
  }
  .header .userInfoArea .userInfoItem .userInfoName{
    float: left;
    line-height: 50px;
    font-size: 14px;
    color: #ffffff;
  }
  .content{
    height: calc(100% - 50px);
    position: relative;
  }
  .footer{
    height: 0px;
    background-color: #e8e8e8
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(-430px);
    opacity: 0;
  }
</style>
