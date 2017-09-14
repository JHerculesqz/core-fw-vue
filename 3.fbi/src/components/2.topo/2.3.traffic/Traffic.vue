<template>
  <div style="width: 100%; height: 500px;">
    <div>
      <topo-panel></topo-panel>
    </div>
    <div>
      <traffic-bottom></traffic-bottom>
    </div>
  </div>

</template>

<script>
  import TrafficBottom from "@/components/2.topo/2.3.traffic/TrafficBottom";
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";

  export default {
    components: {
      TopoPanel,
      TrafficBottom
    },
    name: "Traffic",
    data: function(){
      return {

      };
    }
  }
</script>

<style>

</style>
