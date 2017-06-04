<template>
  <div class="moduleRight" v-bind:class="{ dpn: isHide }">
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
        isHide: true
      }
    },
    created: function () {
      Bus.$on('imsgModuleRightShowHide', this.imsgModuleRightShowHide);
    },
    beforeDestroy: function () {
      Bus.$off('imsgModuleRightShowHide', this.imsgModuleRightShowHide);
    },
    methods:{
      imsgModuleRightShowHide: function(){
        this.isHide = !this.isHide;
      }
    }
  }
</script>

<style>
  .moduleRight {
    position: absolute;
    height: 100%;
    width: 300px;
    right: 0;
    top: 40px;
    background-color: #e8e8e8;
  }
  .dpn {
    display: none;
  }
</style>
