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
        nodes: [],
        nodeGroups: [],
        links: []
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
        //Resource
        var self = this;
        oTopo.Resource.init(this.theme, IMG_MAP, THEME_DARK, function () {
          //Stage
          var displayVal = window.$("#" + self.id).css("display");
          var oWidth, oHeight;
          if (displayVal == "none") {
            window.$("#" + self.id).css("display", "block");
            oWidth = window.$("#" + self.id).width();
            oHeight = window.$("#" + self.id).height();
            window.$("#" + self.id).attr("display", "none");
          }
          else {
            oWidth = window.$("#" + self.id).width();
            oHeight = window.$("#" + self.id).height();
          }
          oTopo.ins.stage = oTopo.Stage.init(self.id,
            oWidth, oHeight, oTopo);
          oTopo.ins.layerLink = oTopo.Layer.init(oTopo);
          oTopo.ins.layerNode = oTopo.Layer.init(oTopo);
          oAfterCallBack();
        });
        //#endregion
      },
      draw: function (oTopoData) {
        this.nodes = oTopoData.nodes;
        this.nodeGroups = oTopoData.nodeGroups;
        this.links = oTopoData.links;
        //nodeGroups
        for (var i = 0; i < this.nodeGroups.length; i++) {
          this.oTopo.Sprite.NodeGroup.draw(this.nodeGroups[i], this.oTopo);
        }
        //nodes
        for (var i = 0; i < this.nodes.length; i++) {
          this.oTopo.Sprite.Node.draw(this.nodes[i], this.oTopo);
        }
        this.oTopo.Layer.reDraw(this.oTopo.ins.layerNode);

        //links
        this.oTopo.Sprite.LinkGroup.draw(this.links, this.oTopo);
        this.oTopo.Layer.reDraw(this.oTopo.ins.layerLink);
      },
      expandAllNodeGroup: function () {
        this.oTopo.Sprite.NodeGroup.expandAllNodeGroup(this.oTopo);
      },
      collapseAllNodeGroup: function () {
        this.oTopo.Sprite.NodeGroup.collapseAllNodeGroup(this.oTopo);
      },
      expandAllLinkGroup: function () {
        this.oTopo.Sprite.LinkGroup.expandAllLinkGroup(this.oTopo);
      },
      collapseAllLinkGroup: function () {
        this.oTopo.Sprite.LinkGroup.collapseAllLinkGroup(this.oTopo);
      },
      selectNodesById: function(arrNodeId){
        this.oTopo.Sprite.NodeGroup.selectNodesById(arrNodeId, this.oTopo);
      },
      selectLinksById: function(arrLinkId){
        this.oTopo.Sprite.LinkGroup.selectLinksById(arrLinkId, this.oTopo);
      },
      unSelectAll: function(){
        this.oTopo.Sprite.NodeGroup.unSelectNodeGroupAndNodes(this.oTopo);
        this.oTopo.Sprite.LinkGroup.unSelectLinks(this.oTopo);
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
