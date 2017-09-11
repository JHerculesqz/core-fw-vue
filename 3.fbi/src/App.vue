<template>
  <div id="app">
    <div class="header">
      <div class="logo"></div>
      <ul>
        <li>
          <router-link :to="{name:'ImportEx'}" exact>脚本解析</router-link>
        </li>
        <li>
          <router-link :to="{name:''}" exact>网络还原</router-link>
        </li>
        <li>
          <router-link :to="{name:''}" exact>网络规划</router-link>
        </li>
        <li>
          <router-link :to="{name:''}" exact>网络设计</router-link>
        </li>
        <li>
          <router-link :to="{name:''}" exact>对比分析</router-link>
        </li>
        <li>
          <router-link :to="{name:''}" exact>割接分析</router-link>
        </li>
      </ul>
      <div class="userInfoArea">

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
      };
    },
    mounted: function(){
      var self = this;

    },
    methods: {

    },
    watch: {
      '$route' (to, from) {
        var self = this;
        if(this.debug){

        }
        else{

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
    background-color: #1e1f37;
  }
  #app {
    height:100%;
    background-color: #1e1f37;
  }
  .header{
    height: 60px;
    background-color: #1a1827;
  }
  .header .logo{
    width: 240px;
    height: 100%;
    float: left;
    background: url("/static/demo/logo.png") no-repeat center;
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
    line-height: 60px;
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
