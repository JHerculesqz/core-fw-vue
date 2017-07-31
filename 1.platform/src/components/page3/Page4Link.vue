<template>
  <div>
    <marvel-link label="导航链接" classCustom="classCustom1"
                 v-on:onClick="onClick"></marvel-link>
    <marvel-link ref="ref0" label="导航链接不可用" classCustom="classCustom1"
                 v-on:onClick="onClick"></marvel-link>
  </div>
</template>

<script>
  import MarvelLink from "@/walle/widget/link/MarvelLink"

  export default {
    name: 'page4Link',
    components: {MarvelLink},
    data: function() {
      return {

      }
    },
    mounted: function(){
      this.$refs.ref0.setDisable(false);
    },
    methods: {
      onClick: function(e){
        console.log(e);
      }
    }
  }
</script>

<style>
  .classCustom1{
    font-size: 14px;
  }
</style>
