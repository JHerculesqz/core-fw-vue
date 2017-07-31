<template>
  <marvel-frame hasMargin="false" media="24,24,24,24" classCustom="classCustom1">
    <button v-on:click="showEx">show</button>
    <button v-on:click="setProgress">setProgress</button>
    <button v-on:click="hideEx">hide</button>
    <marvel-loading-mini ref="ref0"></marvel-loading-mini>
  </marvel-frame>


</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelLoadingMini from "@/walle/widget/loading/MarvelLoadingMini";

  export default {
    name: 'page4Loading',
    components: {MarvelFrame, MarvelLoadingMini},
    data: function() {
      return {

      }
    },
    methods: {
      showEx: function(){
        this.$refs.ref0.showEx("取消");
      },
      setProgress: function(){
        var self = this;
        self.$refs.ref0.setProgress(10, "step1...");
        setTimeout(function(){
          self.$refs.ref0.setProgress(30, "step2...");
          setTimeout(function(){
            self.$refs.ref0.setProgress(60, "step3...");
            setTimeout(function(){
              self.$refs.ref0.setProgress(100, "step4...");
            },1000);
          },1000);
        },1000);
      },
      hideEx: function(){
        this.$refs.ref0.hideEx();
      }
    }
  }
</script>

<style>
  .classCustom1{
    height: 100%;margin-bottom: 10px;background-color: yellow;
  }
</style>
