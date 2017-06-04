<template>
  <div class="page1">
    <!--<module-left></module-left>-->
    <module-up></module-up>
    <module-center></module-center>
    <module-right></module-right>
  </div>
</template>

<script>
  import ModuleLeft from "./ModuleLeft";
  import ModuleUp from "./ModuleUp";
  import ModuleCenter from "./ModuleCenter";
  import ModuleRight from "./ModuleRight";
  export default {
    name: 'page1',
    components: { ModuleLeft, ModuleUp, ModuleCenter, ModuleRight }
  }
</script>

<style>
  .page1{
    height: 100%;
    background-color: #f7b57c;
  }
</style>
