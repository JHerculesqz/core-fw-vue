<template>
  <div class="page2">
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
    name: 'page2',
    components: { ModuleLeft, ModuleLeftConfig, ModuleUp, ModuleCenter, ModuleRight }
  }
</script>

<style>
  .page2{
    height: 100%;
    background-color: #fff;
  }
</style>
