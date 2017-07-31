<template>
  <marvel-frame hasMargin="false" media="24,24,24,24" classCustom="classCustom1">
    <button v-on:click="showGlobal">showGlobal</button>
    <button v-on:click="showLeft">showLeft</button>
    <button v-on:click="hideLeft">hideLeft</button>
    <button v-on:click="showRight">showRight</button>
    <button v-on:click="hideRight">hideRight</button>
    <marvel-loading ref="ref0" :isGlobal="true"></marvel-loading>
    <marvel-frame hasMargin="false" media="12,12,12,12" classCustom="classCustom2">
      <marvel-loading ref="ref1" :isGlobal="false"></marvel-loading>
    </marvel-frame>
    <marvel-frame hasMargin="false" media="12,12,12,12" classCustom="classCustom3">
      <marvel-loading ref="ref2" :isGlobal="false"></marvel-loading>
    </marvel-frame>
  </marvel-frame>


</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelLoading from "@/walle/widget/loading/MarvelLoading";

  export default {
    name: 'page4Loading',
    components: {MarvelFrame, MarvelLoading},
    data: function() {
      return {

      }
    },
    methods: {
      showGlobal: function(){
        this.$refs.ref0.imsgMarvelLoadingShow("global loading...");
      },
      showLeft: function(){
        this.$refs.ref1.imsgMarvelLoadingShow("loading");
      },
      hideLeft: function(){
        this.$refs.ref1.imsgMarvelLoadingHide();
      },
      showRight: function(){
        this.$refs.ref2.imsgMarvelLoadingShow("加载中");
      },
      hideRight: function(){
        this.$refs.ref2.imsgMarvelLoadingHide();
      }
    }
  }
</script>

<style>
  .classCustom1{
    height: 300px;margin-bottom: 10px;
  }
  .classCustom2{
    height: 300px;margin-bottom: 10px;background-color: #fff;border: dashed;
  }
  .classCustom3{
    height: 300px;margin-bottom: 10px;background-color: #fff;border: dashed;
  }
</style>
