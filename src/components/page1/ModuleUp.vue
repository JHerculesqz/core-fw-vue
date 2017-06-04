<template>
  <div class="moduleUp">
    <div class="title" v-text="label"></div>
    <div class="clickShowHide" v-text="label4ShowHide" v-on:click="clickShowHide"></div>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleUp',
    data: function() {
      return {
        label: 'moduleUp(展示工具栏)',
        label4ShowHide: "展开moduleRight"
      }
    },
    created: function () {

    },
    beforeDestroy: function () {

    },
    methods:{
      clickShowHide: function(){
        Bus.$emit("imsgModuleRightShowHide");
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
  .moduleUp .clickShowHide{
    float: left
  }
</style>
