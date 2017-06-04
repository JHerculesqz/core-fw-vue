<template>
  <div class="moduleLeft">

  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'moduleLeft',
    data: function(){
      return {
        divHtml: 'divHtml',
        vText: 'vText',
        vHtml: 'vHtml',
        vIf: false,
        vFor: [{
          text:1
        }, {
          text:2
        }],
        vWatch: "vWatch"
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
  #module1 {
    width:300px;
    height:300px;
    background: red;
    float: left;
  }
</style>
