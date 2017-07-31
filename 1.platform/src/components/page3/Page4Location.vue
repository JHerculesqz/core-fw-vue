<template>
  <div>
    <button v-on:click="onClick">获取</button>
  </div>
</template>

<script>
  import MarvelLocation from "@/walle/component/location"

  export default {
    name: 'page4Location',
    components: {MarvelLocation},
    data: function() {
      return {

      }
    },
    methods:{
      onClick: function(){
        MarvelLocation.getLocation(function(oPos){
          console.log(oPos);
        });
      }
    }
  }
</script>

<style>

</style>
