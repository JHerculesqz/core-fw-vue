<template>
  <div class="moduleLeft">
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
        metrics: [{
          id:1,
          label: "指标1"
        }, {
          id:2,
          label: "指标2"
        }]
      }
    },
    methods:{
      doSth: function(){
        console.log("[Module1.doSth]" + this.divHtml);
        this.vIf = true;
        Bus.$emit('imsg1', {a:1, b:2});
      }
    },
    watch:{
      'vWatch':function (strVal, strOldVal) {
        console.log("[Module1.Watch.vWatch]" + strVal + "," + strOldVal);
      },
      'vIf': function (bVal, bOldVal) {
        console.log("[Module1.Watch.vIf]" + bVal + "," + bOldVal);
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
    background-color: #e8e8e8
  }
</style>
