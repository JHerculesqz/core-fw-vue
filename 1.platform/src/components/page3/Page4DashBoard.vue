<template>
  <div style="height: 400px;width:500px;background-color: #fafafa;padding: 20px;">
    <marvel-dashboard title="Shit">
      <div slot="customArea">customArea...</div>
      <div slot="contArea">cont...</div>
    </marvel-dashboard>
  </div>
</template>

<script>
  import MarvelDashboard from "@/walle/widget/dashboard/MarvelDashboard";
  import MarvelWarning from "../../walle/widget/warning/MarvelWarning";

  export default {
    name: 'page4DashBoard',
    components: {
      MarvelWarning,
      MarvelDashboard},
    data: function() {
      return {
        items: [{
          label: "system",
          click: function(){
            console.log("system...");
          }
        }, {
          label: "notify",
          click: function(){
            console.log("notify...");
          }
        }, {
          label: "settings",
          click: function(){
            console.log("settings...");
          }
        }]
      }
    }
  }
</script>

<style>

</style>
