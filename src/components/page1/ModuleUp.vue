<template>
  <div class="moduleUp">
    <div class="title" v-text="label"></div>
    <div class="clickShowLeft" v-text="lable4clickShowLeft" v-on:click="clickShowLeft"></div>
    <div class="clickShowRight" v-text="lable4clickShowRight" v-on:click="clickShowRight"></div>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleUp',
    data: function() {
      return {
        label: 'moduleUp(展示工具栏)',
        lable4clickShowLeft: " | 展开moduleLeft",
        lable4clickShowRight: " | 展开moduleRight"
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
    background-color: rgba(255,0,0,0.2)
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
