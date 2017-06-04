<template>
  <div class="moduleRight" v-if="isShow">
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
      }
    }
  }
</script>

<style>
  .moduleRight {
    position: absolute;
    height: 100%;
    width: 200px;
    right: 0;
    top: 70px;
    background-color: #e8e8e8;
  }
</style>
