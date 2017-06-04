<template>
  <div class="moduleLeft" v-bind:class="{ dpn: isHide }">
    <div v-text="label"></div>
    <ul>
      <li v-for="item in metrics">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleLeft',
    data: function(){
      return {
        label: "moduleLeft(展示指标项)",
        isHide: true,
        metrics: [{
          id:1,
          label: "指标1"
        }, {
          id:2,
          label: "指标2"
        }]
      }
    },
    created: function () {
      Bus.$on('imsgModuleLeftShow', this.imsgModuleLeftShow);
    },
    beforeDestroy: function () {
      Bus.$off('imsgModuleLeftShow', this.imsgModuleLeftShow);
    },
    methods:{
      imsgModuleLeftShow: function(){
        this.isHide = !this.isHide;
      }
    }
  }
</script>

<style>
  .moduleLeft {
    position: absolute;
    height: 100%;
    width: 300px;
    left: 0;
    top: 70px;
    background-color: #e8e8e8
  }
  .dpn {
    display: none;
  }
</style>
