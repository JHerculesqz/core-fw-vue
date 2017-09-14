<template>
  <div class="trafficBottomWrapper">
    <marvel-tab :tabItems="tabItems1" theme="dark">
      <marvel-tab-item :isActive="tabItems1[0].isActive">
        <full-path v-on:onClickFullPathRow="onClickFullPathRow"
                   v-on:onClickRow4Business="onClickRow4Business"></full-path>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems1[1].isActive">
        <part-path v-on:onClickPartPathRow="onClickPartPathRow"></part-path>
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems1[2].isActive">
        <discrete-cross v-on:onClickRow4DiscreteCross="onClickRow4DiscreteCross"></discrete-cross>
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
    },
    methods: {
      onClickFullPathRow: function (arrRouters) {
        this.$emit("onClickFullPathRow", arrRouters);
      },
      onClickRow4Business:function(oRow){
        this.$emit("onClickRow4Business", oRow);
      },
      onClickPartPathRow: function(arrRouters){
        this.$emit("onClickPartPathRow", arrRouters);
      },
      onClickRow4DiscreteCross:function(oRow){
        this.$emit("onClickRow4DiscreteCross", oRow);
      }
    }
  }
</script>

<style scoped>
  .trafficBottomWrapper{
    height:100%;
  }
</style>
