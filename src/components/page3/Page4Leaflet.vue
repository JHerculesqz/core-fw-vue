<template>
  <marvel-leaflet ref="ref0" id="gisMapId1" v-on:onClick="onClick"></marvel-leaflet>
</template>

<script>
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet"

  export default {
    name: 'page4Leaflet',
    components: {MarvelLeaflet},
    data: function() {
      return {

      }
    },
    mounted: function(){
      this.$refs.ref0.init(51.505, -0.09, 13, 18, "/static/leaflet/images/shit.png");
      this.$refs.ref0.setCenter(51.505, -0.09, 18);
      this.$refs.ref0.addMarker(51.5, -0.09, "<b>Hello world!</b><br>Hello world!");
      this.$refs.ref0.addCircle(51.508, -0.11, 500, "red", "#f03", 0.5, "1");
      this.$refs.ref0.addPolygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]], "2");
      this.$refs.ref0.addIcon(51.5, -0.11, "/static/leaflet/images/shit.png", "1");
      this.$refs.ref0.addIcon(51.5, -0.13, "/static/leaflet/images/shit.png", "2");
      this.$refs.ref0.addWater();
      this.$refs.ref0.addHeatMap([
        [51.5, -0.11, "1"],
        [51.5, -0.13, "2"],
        [51.5, -0.11, "3"],
        [51.5, -0.13, "4"],
        [51.5, -0.11, "5"]
      ]);
    },
    methods: {
      onClick: function(oPoint){
        console.log(oPoint);
      }
    }
  }
</script>

<style>

</style>
