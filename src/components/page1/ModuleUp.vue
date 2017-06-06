<template>
  <div class="moduleUp">
    <div class="title">moduleUp(展示工具栏)</div>
    <div class="clickShowLeft" v-on:click="clickShowLeft">" | 展开moduleLeft"</div>
    <div class="clickShowRight" v-on:click="clickShowRight">" | 展开moduleRight"</div>
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
    height: 30px;
    background-color: #fafafa
  }
  .moduleUp .title{
    float: left
  }
  .moduleUp .clickShowLeft{
    float: left
  }
  .moduleUp .clickShowRight{
    float: left
  }
</style>
