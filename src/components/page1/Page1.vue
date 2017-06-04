<template>
  <div class="page1">
    <module-left></module-left>
    <module-left-config></module-left-config>
    <module-up></module-up>
    <module-center></module-center>
    <module-right></module-right>
  </div>
</template>

<script>
  import ModuleLeft from "./ModuleLeft";
  import ModuleLeftConfig from "./ModuleLeftConfig";
  import ModuleUp from "./ModuleUp";
  import ModuleCenter from "./ModuleCenter";
  import ModuleRight from "./ModuleRight";
  export default {
    name: 'page1',
    components: { ModuleLeft, ModuleLeftConfig, ModuleUp, ModuleCenter, ModuleRight }
  }
</script>

<style>
  .page1{
    height: 100%;
    background-color: #f7b57c;
  }
</style>
