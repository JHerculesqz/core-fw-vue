<template>
  <div>
    <div>导出待人工修复数据</div>
    <div>
      <import-ex-result></import-ex-result>
    </div>

  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import ImportExResult from "@/components/1.importex/ImportExResult";
  export default {
    components: {
      ImportExResult,
      MarvelFrame},
    name: 'ImportExParseFixInput',
    data: function() {
      return {

      }
    },
    mounted: function(){
      var self = this;


    },
    destroyed: function(){

    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
