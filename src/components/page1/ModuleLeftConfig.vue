<template>
  <div class="moduleLeftConfig" v-if="isShow">
    <div v-text="label"></div>
    <ul>
      <li v-for="item in metrics">
        <input type="checkbox" v-model="item.show">{{item.label}}</input>
      </li>
    </ul>
    <button v-on:click="clickSave">保存</button>
    <button v-on:click="clickClose">关闭</button>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleLeftConfig',
    data: function() {
        return {
          label: 'moduleLeftConfig(展示指标配置)',
          isShow: false,
          metrics: []
        }
    },
    created: function () {
        Bus.$on('imsgModuleLeftConfigShow', this.imsgModuleLeftConfigShow);
    },
    beforeDestroy: function () {
        Bus.$off('imsgModuleLeftConfigShow', this.imsgModuleLeftConfigShow);
    },
    methods:{
      imsgModuleLeftConfigShow: function(){
        //0.isHide
        this.isShow = !this.isShow;

        if(this.isShow){
          //1.get arrMetrics from service
          var arrMetrics = [{
            id:1,
            label: "指标1",
            show: true
          }, {
            id:2,
            label: "指标2",
            show: true
          }, {
            id:3,
            label: "指标3",
            show: false
          }];

          //2.modify mem
          this.metrics = arrMetrics;
        }
      },
      clickSave: function(){
        //1.post to service

        //2.
        Bus.$emit("imsgModuleLeftDataUpdate");

        //3.
        alert("保存成功");
      },
      clickClose: function(){
        //1.mem
        this.isShow = false;

        //2.
        Bus.$emit("imsgModuleLeftDataUpdate");
      }
    }
  }
</script>

<style>
  .moduleLeftConfig {
    position: fixed;
    left: 400px;
    top: 200px;
    background-color: blue;
  }
</style>
