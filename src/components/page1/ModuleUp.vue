<template>
  <div class="moduleUp">
    <div class="moduleUpTitle">moduleUp(展示工具栏)</div>
    <!--<div class="clickShowLeft" v-on:click="clickShowLeft">" | 展开moduleLeft"</div>-->
    <!--<div class="clickShowRight" v-on:click="clickShowRight">" | 展开moduleRight"</div>-->
    <div class="rightDialogExpandFolderIcon" v-on:click="clickShowRight">》</div>
  </div>
</template>

<script>
  import Bus from '@/walle/core/bus.js';
  export default {
    name: 'moduleUp',
    data: function() {
      return {

      }
    },
    created: function () {

    },
    beforeDestroy: function () {

    },
    methods:{
      clickShowLeft: function(){
        Bus.$emit("imsgModuleLeftShow");
      },
      clickShowRight: function(){
        Bus.$emit("imsgModuleRightShow");
      }
    }
  }
</script>

<style>
  .moduleUp {
    height: 40px;
    background-color: #222d38;
  }
  .rightDialogIsShow{
    width:calc(100% - 500px)
  }
  .moduleUp .moduleUpTitle{
    height: 40px;
    float: left;
    margin-left: 10px;
    font-size: 14px;
    line-height: 40px;
    color: #ffffff;
  }
  .moduleUp .clickShowLeft{
    float: left;
    color:#fff;
    margin-left:20px;
    font-size:12px;
    line-height:40px;
  }
  .moduleUp .clickShowRight{
    float: left;
    color:#fff;
    margin-left:20px;
    font-size:12px;
    line-height:40px;
  }
  .moduleUp .rightDialogExpandFolderIcon{
    height: 40px;
    float: right;
    margin-right: 4px;
    font-size: 14px;
    line-height: 40px;
    color: #ffffff;
    cursor:pointer;
  }
</style>
