<template>
  <div class="page1">
    <p>Page1</p>
    <div id="jquery">{{ divHtml }}</div>
    <div v-text="vText"></div>
    <div v-html="vHtml"></div>
    <div v-bind:class="{ testClass: isTestClass}"></div>
    <div v-if="vIf">v-if</div>
    <ul>
      <li v-for="(item,index) in vFor">
        <label v-on:click="doSth">{{index + 1}}.{{item.text}} </label>
        <time>{{item.time | date}}</time>
      </li>
    </ul>
    <input type="text" v-model="vWatch"/>
  </div>
</template>

<script>
  import DateUtils from '@/walle/component/date';
  import LogUtils from '@/walle/component/log';

  export default {
    name: 'page4VueBasic',
    data: function() {
      return {
        divHtml: 'divHtml',
        vText: 'vText',
        vHtml: '<h1>vHtml</h1>',
        isTestClass: true,
        vIf: false,
        vFor: [{
          text:"a1",
          time: Date.now()
        }, {
          text:"a2",
          time: Date.now()
        }],
        vWatch: "vWatch"
      }
    },
    methods:{
      doSth: function(){
        //v-html
        LogUtils.debug("Page1", "doSth", this.divHtml);
        //v-if
        this.vIf = true;
        //http
        this.$http.get('/').then(res=>{
          LogUtils.debug("Page1", "doSth", res.body);
        });
        //vuex
        LogUtils.debug("Page1", "doSth", this.$store.getters.a);
        this.$store.dispatch("action1");
        LogUtils.debug("Page1", "doSth", this.$store.getters.a);
        //jquery
        $("#jquery").html("jquery test...");
      }
    },
    watch:{
      'vWatch': function (strVal, strOldVal) {
        //watch
        LogUtils.debug("Page1", "vWatch", strVal + "," + strOldVal);
      }
    },
    filters:{
      date: function(strDate){
        //filters
        return DateUtils.calendar(strDate);
      }
    }
  }
</script>

<style>
  .page1{

  }
</style>
