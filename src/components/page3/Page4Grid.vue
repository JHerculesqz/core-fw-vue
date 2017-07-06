<template>
  <div style="width:500px;height:300px;">
    <marvel-grid :titles="titles" :rows="rows"></marvel-grid>
  </div>
</template>

<script>
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";

  export default {
    name: 'page4Grid',
    components: {
      MarvelGrid },
    data: function() {
      return {
        titles: [{
          label: "列1",
          width: "25%"
        }, {
          label: "列2",
          width: "25%"
        }, {
          label: "列3",
          width: "25%"
        }, {
          label: "列4",
          width: "25%"
        }],
        skip: 0,
        limit: 10,
        rows: []
      }
    },
    mounted: function(){
      this.rows = [];
      for(var i=0;i<10;i++){
        var oRow = [];
        for(var j=0;j<4;j++){
          var oCell = {
            value: "value" + i,
            type: "text"
          };
          oRow.push(oCell);
        }
        this.rows.push(oRow);
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
