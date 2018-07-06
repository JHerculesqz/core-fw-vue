<template>
  <canvas v-bind:id="id" class="marvelTopoArbor"></canvas>
</template>

<script>
  export default {
    name: 'MarvelTopoArbor',
    props: ["theme", "id"],
    data: function () {
      return {
        api:undefined,
      };
    },
    methods: {
      //region inner

      //endregion

      //region callback

      //endregion

      //region 3rd

      init: function () {
        this.api = new window.$.MarvelArborAPI();
        this.api.canvas.init(this.id);
        this.api.arborEx.init();
      },

      setData: function (arrNodes, arrLinks) {
        this.api.arborEx.setData(arrNodes, arrLinks);
      },

      //endregion
    }
  }
</script>

<style scoped>
  .marvelTopoArbor {
    width: 100%;
    height: 100%;
  }
</style>
