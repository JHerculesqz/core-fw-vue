<template>
  <div class="page1">
    <module-up></module-up>
    <module-center></module-center>
  </div>
</template>

<script>
  import ModuleUp from "./ModuleUp";
  import ModuleCenter from "./ModuleCenter";
  export default {
    name: 'page1',
    components: { ModuleCenter, ModuleUp }
  }
</script>

<style>
  .page1{

  }
</style>
