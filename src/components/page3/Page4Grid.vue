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
      //1.
      for(var i=0;i<2;i++){
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
      //2.
      for(var i=0;i<2;i++){
        var oRow = [];
        for(var j=0;j<4;j++){
          var oCell = {
            value: [{
              value: "icon-location2",
              onClick: function(){
                alert(Math.random());
              }
            }, {
              value: "icon-location2",
              onClick: function(){
                alert(Math.random());
              }
            }],
            type: "icon"
          };
          oRow.push(oCell);
        }
        this.rows.push(oRow);
      }
      //3.
      for(var i=0;i<2;i++){
        var oRow = [];
        for(var j=0;j<4;j++){
          var oCell = {
            value: "icon-podcast",
            color: "#28aad3",
            label: "shit",
            type: "textIcon"
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
