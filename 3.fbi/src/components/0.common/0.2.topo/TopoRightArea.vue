<template>
  <marvel-right-ext-panel
    theme="dark"
    width="250"
    show="true"
    canDrag="false">
    <div slot="content" style="color: #fff">hello world</div>
  </marvel-right-ext-panel>
</template>

<script>
  import MarvelRightExtPanel from "@/walle/widget/extPanel/MarvelRightExtPanel";
  export default {
    components: {MarvelRightExtPanel},
    name: "TopoRightArea",
    data: function(){
      return {

      }
    }
  }

</script>

<style>

</style>
