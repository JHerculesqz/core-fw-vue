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
