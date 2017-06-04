<template>
  <div id="module1" style="float:left">
    <p>Module1</p>
    <div>{{ divHtml }}</div>
    <div v-text="vText"></div>
    <div v-html="vHtml"></div>
    <div v-if="vIf">v-if</div>
    <ul>
      <li v-for="item in vFor">
        <p v-text="item.text" v-on:click="doSth"></p>
      </li>
    </ul>
    <input type="text" v-model="vWatch"/>
  </div>
</template>

<script>
  import Bus from './../../bus.js';
  export default {
    name: 'module1',
    data () {
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
