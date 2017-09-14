<template>
  <div>
    <marvel-tab :tabItems="tabItems1" theme="dark">
      <marvel-tab-item :isActive="tabItems1[0].isActive">
        <full-path></full-path>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems1[1].isActive">
        <part-path></part-path>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems1[2].isActive">
        <discrete-cross></discrete-cross>
      </marvel-tab-item>
    </marvel-tab>
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import FullPath from "@/components/2.topo/2.3.traffic/FullPath";
  import PartPath from "@/components/2.topo/2.3.traffic/PartPath";
  import DiscreteCross from "@/components/2.topo/2.3.traffic/DiscreteCross";

  export default {
    components: {
      DiscreteCross,
      PartPath,
      FullPath,
      MarvelTab,
      MarvelTabItem
    },
    name: "TrafficBottom",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region tbl data
        tabItems1: [{
          label: "完整路径",
          isActive: true
        }, {
          label: "不完整路径",
          isActive: false
        }, {
          label: "离散交叉",
          isActive: false
        }],
        //#endregion
      };
    }
  }

</script>

<style>

</style>
