<template>
  <div>
    <div>
      <marvel-grid :titles="titles" :rows="rows" :limit="limit"></marvel-grid>
    </div>
    <div>
      <import-ex-result></import-ex-result>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import ImportExResult from "@/components/1.importex/ImportExResult";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  export default {
    components: {
      MarvelGrid,
      ImportExResult,
      MarvelFrame
    },
    name: 'ImportExParseInput',
    data: function () {
      return {
        //#region grid
        titles: [{
          label: "CheckBox",
          width: "5%"
        }, {
          label: "文件名",
          width: "13%"
        }, {
          label: "文件类型",
          width: "12%"
        }, {
          label: "时隙模式",
          width: "8%"
        }],
        skip: 0,
        limit: 20,
        rows: []
        //#endregion
      }
    },
    mounted: function () {
      var self = this;


    },
    destroyed: function () {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
