<template>
  <div class="page2">
    <p>page2</p>
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
    name: 'page2',
    data: function() {
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
      }
    },
    watch:{
      'vWatch': function (strVal, strOldVal) {
        console.log("[Module1.Watch.vWatch]" + strVal + "," + strOldVal);
      }
    }
  }
</script>

<style>
  .page2{

  }
</style>
