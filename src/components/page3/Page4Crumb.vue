<template>
  <marvel-crumb :items="items"></marvel-crumb>
</template>

<script>
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb"

  export default {
    name: 'page4Crumb',
    components: {MarvelCrumb},
    data: function() {
      return {
        items: [{
          label: "system",
          click: function(){
            console.log("system...");
          }
        }, {
          label: "notify",
          click: function(){
            console.log("notify...");
          }
        }, {
          label: "settings",
          click: function(){
            console.log("settings...");
          }
        }]
      }
    }
  }
</script>

<style>

</style>
