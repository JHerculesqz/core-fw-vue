<template>
  <div>
    <div style="width:500px;height: 300px; background-color: #f0f0f0;">
      <marvel-legend :legendItems="items"
                     v-on:onLegendItemClick="onLegendItemClick"></marvel-legend>
    </div>
  </div>
</template>

<script>
  import MarvelLegend from "@/walle/widget/legend/MarvelLegend";

  export default {
    name: 'page4Legend',
    components: {
      MarvelLegend},
    data: function() {
      return {
        items: [{
          label: "在线",
          level: "level5",
          isHide:false
        }, {
          label: "待机",
          level: "level3",
          isHide:false
        }, {
          label: "离线",
          level: "level6",
          isHide:false
        }]
      }
    },
    methods: {
      onLegendItemClick: function(){
        console.log(this.items);
      }
    }
  }
</script>

<style>

</style>
