<template>
  <marvel-frame hasMargin="false" media="24,24,24,24" classCustom="classCustom1">
    <marvel-frame hasMargin="false" media="12,12,12,12" classCustom="classCustom2">
      <button v-on:click="showLeft">show</button>
      <button v-on:click="hideLeft">hide</button>
      <marvel-loading></marvel-loading>
    </marvel-frame>
    <marvel-frame hasMargin="false" media="12,12,12,12" classCustom="classCustom3">
      <!--<button v-on:click="showRight">show</button>-->
      <!--<button v-on:click="hideRight">hide</button>-->
      <!--<marvel-loading></marvel-loading>-->
    </marvel-frame>
  </marvel-frame>


</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelLoading from "@/walle/widget/loading/MarvelLoading";
  import BusUtils from '@/walle/core/bus';

  export default {
    name: 'page4Loading',
    components: {MarvelFrame, MarvelLoading},
    data: function() {
      return {

      }
    },
    methods: {
      showLeft: function(){
        BusUtils.$emit("imsgMarvelLoadingShow", "loading");
      },
      hideLeft: function(){
        BusUtils.$emit("imsgMarvelLoadingHide", "loading");
      }
    }
  }
</script>

<style>
  .classCustom1{
    height: 100%;margin-bottom: 10px;background-color: yellow;
  }
  .classCustom2{
    height: 100%;margin-bottom: 10px;background-color: red;
  }
  .classCustom3{
    height: 100%;margin-bottom: 10px;background-color: blue;
  }
</style>
