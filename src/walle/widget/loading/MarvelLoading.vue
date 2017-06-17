<template>
  <div class="globalLoading" v-bind:class="{ dpn: !show }">
    <div class="loadingBoard">
      <div class="loadingIcon">
        <div class="spinner">
          <div class="spinner-container container1">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
          <div class="spinner-container container2">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
          <div class="spinner-container container3">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
        </div>
      </div>
      <div class="loadingTip" v-text="loadingMsg"></div>
      <div class="loadingCancel">取消</div>
    </div>
  </div>
</template>

<script>
  import BusUtils from '@/walle/core/bus';

  export default {
    name: 'MarvelLoading',
    data: function() {
        return {
          show: false,
          loadingMsg: ""
        }
    },
    created: function () {
      BusUtils.$on('imsgMarvelLoadingShow', this.imsgMarvelLoadingShow);
      BusUtils.$on('imsgMarvelLoadingHide', this.imsgMarvelLoadingHide);
    },
    beforeDestroy: function () {
      BusUtils.$off('imsgMarvelLoadingShow', this.imsgMarvelLoadingShow);
      BusUtils.$off('imsgMarvelLoadingHide', this.imsgMarvelLoadingHide);
    },
    methods: {
      imsgMarvelLoadingShow : function(strLoadingMsg){
          this.show = true;
          this.loadingMsg = strLoadingMsg;
      },
      imsgMarvelLoadingHide: function(){
          this.show = false;
        this.loadingMsg = "";
      }
    }
  }
</script>

<style>
  .dpn {
    display: none;
  }
  /*loadingAnimate*/
  .spinner {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .container1 > div, .container2 > div, .container3 > div {
    width: 4px;
    height: 4px;
    background-color: #3399ff;

    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .spinner .spinner-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }

  .circle1 { top: 0; left: 0; }
  .circle2 { top: 0; right: 0; }
  .circle3 { right: 0; bottom: 0; }
  .circle4 { left: 0; bottom: 0; }

  .container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  .container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }

  .container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }

  .container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }

  .container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }

  .container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }

  .container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }

  .container3 .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
  /*loadingAnimate end*/

  .globalLoading{
    position:fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.15);
    z-index: 1000;
  }

  .globalLoading .loadingBoard{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -100px;
    border-radius: 2px;
    overflow: hidden;
    padding: 21px 40px;
    background-color: #ffffff;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.15);
  }
  .globalLoading .loadingBoard .loadingIcon{
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 10px;
  }
  .globalLoading .loadingBoard .loadingTip{
    font-size: 14px;
    line-height: 18px;
    color: #666;
    margin-right: 10px;
    float: left;
  }
  .globalLoading .loadingBoard .loadingCancel{
    font-size: 14px;
    line-height: 18px;
    color: #3399ff;
    float: left;
    cursor: pointer;
  }


  .localLoading{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .localLoading .loadingBoard{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -100px;
    border-radius: 2px;
    overflow: hidden;
    padding: 21px 40px;
  }
  .localLoading .loadingBoard .loadingIcon{
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 10px;
  }
  .localLoading .loadingBoard .loadingTip{
    font-size: 14px;
    line-height: 18px;
    color: #666;
    margin-right: 10px;
    float: left;
  }
  .localLoading .loadingBoard .loadingCancel{
    font-size: 14px;
    line-height: 18px;
    color: #3399ff;
    float: left;
    cursor: pointer;
  }


  .microLoading{
    width: 100%;
    height: 18px;
  }
  .microLoading .loadingBoard{
    overflow: hidden;
  }
  .microLoading .loadingBoard .loadingIcon{
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 10px;
  }
  .microLoading .loadingBoard .loadingIcon .container1 > div,
  .microLoading .loadingBoard .loadingIcon .container2 > div,
  .microLoading .loadingBoard .loadingIcon .container3 > div{
    background-color: #3dcca6;
  }
  .microLoading .loadingBoard .loadingTip{
    font-size: 14px;
    line-height: 18px;
    color: #666;
    margin-right: 10px;
    float: left;
  }
  .microLoading .loadingBoard .loadingBar{
    height: 6px;
    width: 108px;
    margin-top: 6px;
    background-color: #d6d7e6;
    margin-right: 10px;
    float: left;
  }
  .microLoading .loadingBoard .loadingBar .currentRate{
    background-color: #3dcca6;
    height: 100%;
  }
  .microLoading .loadingBoard .loadingCancel{
    font-size: 14px;
    line-height: 18px;
    color: #3399ff;
    float: left;
    cursor: pointer;
  }
</style>
