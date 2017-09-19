<template>
  <marvel-topo ref="ref4Topo" v-bind:id="id" v-bind:theme="theme"></marvel-topo>
</template>

<script>
  import MarvelTopo from '@/walle/widget/topo/MarvelTopo';

  export default {
    components: {
      MarvelTopo
    },
    name: "TopoCenterArea",
    props: ["theme", "id"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
      }
    },
    mounted: function () {

    },
    methods: {
      init: function (oAfterCallBack) {
        this.$refs.ref4Topo.init(oAfterCallBack);
      },
      draw: function (oTopoData) {
        this.$refs.ref4Topo.draw(oTopoData);
      },
      unSelectAll: function(){
        this.$refs.ref4Topo.unSelectAll();
      },
      selectNodesById: function(arrNodeId){
        this.$refs.ref4Topo.selectNodesById(arrNodeId);
      },
      selectLinksById: function(arrLinkId){
        this.$refs.ref4Topo.selectLinksById(arrNodeId);
      }
    }
  }

</script>

<style>


</style>
