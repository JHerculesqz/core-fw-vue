<template>
  <marvel-toolbar
    v-bind:items="items" theme="dark"
    v-on:onToolbarItemClick="onToolbarItemClick"></marvel-toolbar>
</template>

<script>
  import MarvelToolbar from '@/walle/widget/toolbar/MarvelToolbar';

  export default {
    components: {
      MarvelToolbar
    },
    name: "TopoToolbar",
    props: ["items"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
      }
    },
    methods: {
      onToolbarItemClick: function (oItem) {
        alert(oItem);
      }
    }
  }

</script>

<style>


</style>
