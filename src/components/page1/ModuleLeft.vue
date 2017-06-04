<template>
  <div class="moduleLeft" v-if="isShow">
    <div v-text="label"></div>
    <button v-on:click="clickModuleLeftConfigShow">配置</button>
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
        isShow: false,
        metrics: []
      }
    },
    created: function () {
      Bus.$on('imsgModuleLeftShow', this.imsgModuleLeftShow);
      Bus.$on('imsgModuleLeftDataUpdate', this.imsgModuleLeftDataUpdate);
    },
    beforeDestroy: function () {
      Bus.$off('imsgModuleLeftShow', this.imsgModuleLeftShow);
      Bus.$off('imsgModuleLeftDataUpdate', this.imsgModuleLeftDataUpdate);
    },
    methods:{
      imsgModuleLeftShow: function(){
        //1.
        this.isShow = !this.isShow;

        if(this.isShow){
          //2.post to service
          this.metrics = [{
            id:1,
            label: "指标1"
          }, {
            id:2,
            label: "指标2"
          }];
        }
      },
      clickModuleLeftConfigShow: function(){
        Bus.$emit("imsgModuleLeftConfigShow");
      },
      imsgModuleLeftDataUpdate: function(){
        //1.post to service
        this.metrics = [{
          id:1,
          label: "指标2"
        }, {
          id:2,
          label: "指标3"
        }];
      }
    }
  }
</script>

<style>
  .moduleLeft {
    position: absolute;
    height: 100%;
    width: 200px;
    left: 0;
    top: 70px;
    background-color: #e8e8e8
  }
</style>
