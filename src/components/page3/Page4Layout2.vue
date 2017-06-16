<template>
  <marvel-layout2 hasMargin="false"
                  media1="4,4,4,0" media2="16,16,16,24" media3="4,4,4,0"
                  classCustom1="classCustom1" classCustom2="classCustom2" classCustom3="classCustom3">
    <div slot="head">head</div>
    <div slot="left">left</div>
    <div slot="content">content</div>
    <div slot="right">right</div>
  </marvel-layout2>
</template>

<script>
  import MarvelLayout2 from "@/walle/widget/layout/MarvelLayout2";

  export default {
    name: 'page4Layout2',
    components: {MarvelLayout2},
    data: function() {
      return {

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
