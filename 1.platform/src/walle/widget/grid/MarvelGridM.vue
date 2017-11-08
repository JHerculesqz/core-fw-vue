<template>
  <div class="gridWrapper">
    <div v-for="row in rows">
      <div>{{row.item0}}</div>
      <div>{{row.item1}}</div>
      <div>{{row.item2}}</div>
      <div>{{titles[0]}}:{{row.item3}}</div>
      <div>{{titles[1]}}:{{row.item4}}</div>
      <div>{{row.item5}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    name: 'MarvelGridM',
    props: ["titles", "rows"],
    data: function() {
      return {

      }
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback

      //#endregion
      //#region 3rd

      //#endregion
    },
  }
</script>

<style scoped>

</style>
