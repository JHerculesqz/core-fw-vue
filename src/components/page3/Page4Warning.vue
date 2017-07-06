<template>
  <div>
    <button v-on:click="onClick">update Data</button>
    <marvel-warning :items="items" :theme="theme"></marvel-warning>
  </div>
</template>

<script>
  import MarvelWarning from "@/walle/widget/warning/MarvelWarning";
  export default {
    name: 'page4Warning',
    components: {MarvelWarning},
    data: function() {
      return {
        items: [{
          label: "加工:1",
          level: "level1"
        }, {
          label: "待机:40",
          level: "level2"
        }, {
          label: "离线:20",
          level: "level3"
        }, {
          label: "告警:30",
          level: "level4"
        }],
        theme: ""
      }
    },
    methods: {
      onClick: function(){
        this.items[0].label = "加工:100";
        this.items[0].level = "level2";
      }
    }
  }
</script>

<style>

</style>
