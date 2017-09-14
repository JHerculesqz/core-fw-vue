<template>

  <div style="width: 100%; height: 500px;">
    <div>
      <main-topo></main-topo>
    </div>
    <div>
      <traffic-bottom></traffic-bottom>
    </div>
  </div>

</template>

<script>
  import MainTopo from "@/components/0.common/0.2.topo/MainTopo";
  import TrafficBottom from "@/components/2.topo/2.3.traffic/TrafficBottom";

  export default {
    components: {
      TrafficBottom,
      MainTopo},
    name: "Traffic",
    data: function(){
      return {

      };
    }
  }

</script>

<style>

</style>
