<template>
  <div class="page4Frame">
    <p>Frame</p>
    <marvel-frame media="24,24,24,24" hasMargin="true" classCustom="classCustom1">
      <marvel-frame media="20,12,4,0" hasMargin="false" classCustom="classCustom2">1</marvel-frame>
      <marvel-frame media="4,12,20,24" hasMargin="false" classCustom="classCustom3">2</marvel-frame>
    </marvel-frame>
  </div>
</template>

<script>
  import MarvelFrame from '@/walle/widget/frame/MarvelFrame';

  export default {
    name: 'page4Frame',
    components: {MarvelFrame},
    data: function() {
      return {

      }
    }
  }
</script>

<style>
  .classCustom1{
    height:20px;
    background-color: #e8e8e8;
    margin-bottom: 10px;
  }
  .classCustom2{
     height:50px;
     background-color: #f7b57c;
     margin-bottom: 10px;
   }
  .classCustom3{
    height:20px;
    background-color: #5eff68;
    margin-bottom: 10px;
  }
</style>
