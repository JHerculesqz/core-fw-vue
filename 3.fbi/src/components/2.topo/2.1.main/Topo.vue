<template>
  <div style="height: 100%;">
    <marvel-tab :tabItems="tabItems" theme="dark">
      <marvel-tab-item :isActive="tabItems[0].isActive">
        <phy></phy>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[1].isActive">
        <traffic></traffic>
      </marvel-tab-item>
    </marvel-tab>
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import Phy from "@/components/2.topo/2.2.phy/Phy";
  import Traffic from "@/components/2.topo/2.3.traffic/Traffic";

  export default {
    components: {
      Traffic,
      MarvelTabItem,
      MarvelTab,
      Phy
    },
    name: 'Topo',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region tbl data
        tabItems: [{
          label: "拓扑还原",
          isActive: true
        }, {
          label: "业务还原",
          isActive: false
        }],
        //#endregion
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
