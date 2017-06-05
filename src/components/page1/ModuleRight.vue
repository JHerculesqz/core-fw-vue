<template>
  <div class="moduleRight" v-if="isShow">
    <div class="closeBtn" v-on:click="closeRightDialog"></div>
    <div v-text="label"></div>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleRight',
    data: function() {
      return {
        label: 'moduleRight(展示指标项详情)',
        isShow: false
      }
    },
    created: function () {
      Bus.$on('imsgModuleRightShow', this.imsgModuleRightShow);
    },
    beforeDestroy: function () {
      Bus.$off('imsgModuleRightShow', this.imsgModuleRightShow);
    },
    methods:{
      imsgModuleRightShow: function(){
        this.isShow = !this.isShow;
      },
      closeRightDialog:function(){
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style>
  .moduleRight {
    position: absolute;
    height: 100%;
    width: 500px;
    right: 0;
    top: 30px;
    background-color: #1b1e25;
  }
  .moduleRight .closeBtn{
    width: 23px;
    height: 50px;
    background-color: #181b21;
    position: absolute;
    top: 50%;
    margin-top: -25px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 100%;
    cursor:pointer;
  }
</style>
