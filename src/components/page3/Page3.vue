<template>
  <div class="page3">
    <p>Page3</p>
    <p>Frame</p>
    <marvel-frame media="12,12,8,4" hasMargin="true" classCustom="classCustom">
      <marvel-frame media="4,12,8,4" hasMargin="true" classCustom="classCustom"></marvel-frame>
    </marvel-frame>
  </div>
</template>

<script>
  import MarvelFrame from '@/walle/widget/frame/MarvelFrame';

  export default {
    name: 'page3',
    components: {MarvelFrame},
    data: function() {
      return {

      }
    },
    methods:{
      doSth: function(){

      }
    }
  }
</script>

<style>
  .classCustom{
    height:20px;
    background-color: #e8e8e8;
    margin-bottom: 10px;
  }
</style>
