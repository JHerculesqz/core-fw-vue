<template>
  <marvel-layout1 hasMargin="true" classCustom="classCustom1">
    <div slot="head">head</div>
    <div slot="content">content</div>
  </marvel-layout1>
</template>

<script>
  import MarvelLayout1 from "@/walle/widget/layout/MarvelLayout1";

  export default {
    name: 'page4Frame',
    components: {MarvelLayout1},
    data: function() {
      return {

      }
    }
  }
</script>

<style>
  .classCustom1{
    height: 100%;background-color: #fff;
  }
</style>
