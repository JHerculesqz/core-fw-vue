<template>
  <marvel-crumb :items="items" v-on:onItemClick="onItemClick"></marvel-crumb>
</template>

<script>
  import MarvelCrumb from "@/walle/widget/crumb/MarvelCrumb"

  export default {
    name: 'page4Crumb',
    components: {MarvelCrumb},
    data: function() {
      return {
        items: [{
          label: "system"
        }, {
          label: "notify"
        }, {
          label: "settings"
        }]
      }
    },
    methods:{
      onItemClick: function(strItemLabel){
        console.log(strItemLabel);
      }
    }
  }
</script>

<style>

</style>
