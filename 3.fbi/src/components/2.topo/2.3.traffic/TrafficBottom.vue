<template>
  <div class="trafficBottomWrapper">
    <div class="leftPart">
      <marvel-accordion2 theme="dark"
                         v-bind:items="items"
                         v-on:onClickItem="onClickItem"
                         v-on:onClickSubItem="onClickSubItem"></marvel-accordion2>
    </div>
    <div class="rightPart">
      <keep-alive>
        <component v-bind:is="moduleName"
                   v-on:onClickFullPathRow="onClickFullPathRow"
                   v-on:onClickRow4Business="onClickRow4Business"
                   v-on:onClickPartPathRow="onClickPartPathRow"
                   v-on:onClickRow4DiscreteCross="onClickRow4DiscreteCross"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import FullPath from "@/components/2.topo/2.3.traffic/FullPath";
  import Business from "@/components/2.topo/2.3.traffic/Business";
  import PartPath from "@/components/2.topo/2.3.traffic/PartPath";
  import DiscreteCross from "@/components/2.topo/2.3.traffic/DiscreteCross";
  import MarvelAccordion2 from "@/walle/widget/accordion/MarvelAccordion2";

  export default {
    components: {
      MarvelAccordion2,
      DiscreteCross,
      PartPath,
      FullPath,
      Business,
      MarvelTab,
      MarvelTabItem
    },
    name: "TrafficBottom",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region moduleName
        moduleName: "FullPath",
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
        //#region accordion
        items: [{
          label: "item1",
          icon: "icon-office",
          expand: false,
          subItems: [{
            label: "subItem1"
          }, {
            label: "subItem2"
          }]
        }, {
          label: "item2",
          icon: "icon-office"
        }],
        items: [{
          label: "完整路径",
          icon: "icon-podcast",
          fold: false,
          children: [{
            label: "业务详情",
            active: true
          }, {
            label: "业务局向"
          }]
        }, {
          label: "不完整路径",
          icon: "icon-feed"
        }, {
          label: "离散交叉",
          icon: "icon-mic"
        }]
        //#endregion
      };
    },
    methods: {
      onClickFullPathRow: function (arrRouters) {
        this.$emit("onClickFullPathRow", arrRouters);
      },
      onClickRow4Business: function (oRow) {
        this.$emit("onClickRow4Business", oRow);
      },
      onClickPartPathRow: function (arrRouters) {
        this.$emit("onClickPartPathRow", arrRouters);
      },
      onClickRow4DiscreteCross: function (oRow) {
        this.$emit("onClickRow4DiscreteCross", oRow);
      },
      onClickItem: function (oItem) {
        if (oItem.label == "不完整路径") {
          this.moduleName = "PartPath";
        }
        else if (oItem.label == "离散交叉") {
          this.moduleName = "DiscreteCross";
        }
      },
      onClickSubItem: function (oItem, oSubItem) {
        if (oSubItem.label == "业务详情") {
          this.moduleName = "FullPath";
        }
        else if (oSubItem.label == "业务局向") {
          this.moduleName = "Business";
        }
      }
    }
  }
</script>

<style scoped>
  .trafficBottomWrapper {
    height: 100%;
    width: 100%;
  }

  .leftPart {
    height: calc(100% - 10px);
    float: left;
    width: 120px;
    margin-right: 10px;
    margin-top: 10px;
    padding-right: 10px;
    border-right: 1px solid #a7abbe;
    box-sizing: border-box;
  }

  .rightPart {
    float: left;
    width: calc(100% - 130px);
    height: 100%;
  }
</style>
