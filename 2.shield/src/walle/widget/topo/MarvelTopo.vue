<template>
  <div v-bind:id="id" class="marvelTopo"></div>
</template>

<script>

  export default {
    name: 'MarvelTopo',
    props: ["theme", "id"],
    data: function () {
      return {
        oTopo: undefined,
      };
    },
    methods: {
      init: function (oAfterCallBack) {
        //#region resources
        var IMG_MAP = {
          nodeGroup: "static/topo/image/" + this.theme + "/nodeGroup1.svg",
          nodeGroupExpand: "static/topo/image/" + this.theme + "/nodeGroupExpand.svg",
          node: "static/topo/image/" + this.theme + "/node1.svg"
        };
        var THEME_DARK = {
          dark: {
            node: {
              labelColor: "#fff",
              selectColor: "rgba(255,255,255,0.25)"
            },
            link: {
              labelColor: "#fff",
              selectColor: 'rgba(255,255,255,0.75)',
              linkColor: {
                linkType1: "#ababb5",
                linkType2: "#FF4c4c",
                linkType3: "#ff8833"
              }
            }
          }
        };
        //#endregion
        //#region Topo
        var oTopo = new window.$.MarvelTopo();
        this.oTopo = oTopo;
        //init
        oTopo.Api.init(oTopo, {
          id: this.id,
          themeKey: this.theme,
          imgMap: IMG_MAP,
          themeSetting: THEME_DARK
        }, function () {
          oAfterCallBack();
        });

//        //Resource
//        var self = this;
//        oTopo.Resource.init(this.theme, IMG_MAP, THEME_DARK, function () {
//          //Stage
//          var displayVal = window.$("#" + self.id).css("display");
//          var oWidth, oHeight;
//          if (displayVal == "none") {
//            window.$("#" + self.id).css("display", "block");
//            oWidth = window.$("#" + self.id).width();
//            oHeight = window.$("#" + self.id).height();
//            window.$("#" + self.id).attr("display", "none");
//          }
//          else {
//            oWidth = window.$("#" + self.id).width();
//            oHeight = window.$("#" + self.id).height();
//          }
//          oTopo.ins.stage = oTopo.Stage.init(self.id,
//            oWidth, oHeight, oTopo);
//          oTopo.ins.layerLink = oTopo.Layer.init(oTopo);
//          oTopo.ins.layerNode = oTopo.Layer.init(oTopo);
//          oAfterCallBack();
//        });
        //#endregion
      },
      draw: function (oTopoData) {
        this.oTopo.Api.draw(this.oTopo, oTopoData);
      },
      expandAllNodeGroup: function () {
        this.oTopo.Api.expandAllNodeGroup(this.oTopo);
      },
      collapseAllNodeGroup: function () {
        this.oTopo.Api.collapseAllNodeGroup(this.oTopo);
      },
      expandAllLinkGroup: function () {
        this.oTopo.Api.expandAllLinkGroup(this.oTopo);
      },
      collapseAllLinkGroup: function () {
        this.oTopo.Api.collapseAllLinkGroup(this.oTopo);
      },
      selectNodesById: function (arrNodeId) {
        this.oTopo.Api.selectNodesById(this.oTopo, arrNodeId);
      },
      selectLinksById: function (arrLinkId) {
        this.oTopo.Api.selectLinksById(this.oTopo, arrLinkId);
      },
      unSelectAll: function () {
        this.oTopo.Api.unSelectAll(this.oTopo);
      },
      getTopoData: function () {
        return this.oTopo.Api.getTopoData(this.oTopo);
      },
      updateTopo: function (oTopoData) {
        this.oTopo.Api.updateTopo(this.oTopo, oTopoData);
      }

    }
  }

</script>

<style scoped>
  .marvelTopo {
    width: 100%;
    height: 100%;
  }
</style>
