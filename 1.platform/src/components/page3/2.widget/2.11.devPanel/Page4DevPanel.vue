<template>
  <div class="widgetShowSession">
    <!--1级 start-->
    <div class="title level1">DevPanel</div>
    <div class="describe">
      自定义设备板位图
    </div>
    <!--1级 end-->
    <!--2级 start-->
    <div class="title level2">DevPanel</div>
    <div class="describe">
      自定义设备板位图
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems1">
        <marvel-tab-item :isActive="tabItems1[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width: 100%;height: 500px;">
              <marvel-dev-panel ref="refDevPanel" id="idDevPanel"
                                v-on:afterInitPlugin="afterInitPlugin"
                                v-on:onClickBD="onClickBD"
                                v-on:onContextMenuClickBD="onContextMenuClickBD"></marvel-dev-panel>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems1[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre v-highlight>
                <code class="html">

                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelHight from "@/walle/component/highlight";
  import MarvelDevPanel from "@/walle/widget/devPanel/MarvelDevPanel";
  import MarvelTimer from "@/walle/component/timer";

  export default {
    name: 'page4DevPanel',
    components: {
      MarvelDevPanel,
      MarvelTabItem,
      MarvelTab
    },
    data: function () {
      return {
        //#region document data
        tabItems1: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        //#endregion
        //#region custom data

        //#endregion
      }
    },
    mounted: function () {
      //#region custom
      var self = this;

      this.$refs.refDevPanel.init();
      this.$refs.refDevPanel.initPlugin("GK_1000");

      MarvelTimer.startTimer(function () {
        var oPlugin = self.$refs.refDevPanel.getPlugin("GK_1000");
        if (oPlugin) {
          var i = Math.random();
          if (i < 0.3) {
            oPlugin.setLightColor("l0Status", "#008c01");
          }
          else if (i > 0.3 && i < 0.5) {
            oPlugin.setLightColor("l0Status", "#f5df28");
          }
          else {
            oPlugin.setLightColor("l0Status", "#808080");
          }
        }
      }, 1000);

      //#endregion
    },
    destroy: function () {
      //#region custom

      MarvelTimer.endTimer();

      //#endregion
    },
    methods: {
      //#region inner
      afterInitPlugin: function () {
        console.log("afterInitPlugin...");
      },
      onClickBD: function (oBD) {
        console.log(oBD);
      },
      onContextMenuClickBD: function (oBD, iX, iY) {
        console.log(oBD, iX, iY);
      },
      //#endregion
      //#region callback

      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>
  /*document fix style start*/
  .widgetShowSession {
    padding: 20px 100px;
    width: 100%;
    box-sizing: border-box;
  }

  .title {
    color: #4d4d4d;
  }

  .level1 {
    font-size: 32px;
    line-height: 54px;
  }

  .level2 {
    margin-top: 40px;
    font-size: 22px;
    line-height: 48px;
  }

  .describe {
    font-size: 14px;
    color: #666;
    line-height: 36px;
  }

  .showArea {
    width: 100%;
  }

  .codeArea {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    overflow: auto;
  }

  .codeArea pre, .codeArea code {
    padding: 0;
    margin: 0;
    min-width: 100%;
    float: left;
  }

  .showAreaInner {
    padding-top: 36px;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  /*document fix  style end*/
  /*document custom style start*/
  .showArea {
    height: 640px;
  }

  /*document custom style end*/
  /*custom style start*/

  /*custom style end*/
</style>
