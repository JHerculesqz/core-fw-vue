<template>

  <div class="widgetShowSession">
    <div class="title level1">DashBoard</div>
    <div class="describe">
      DashBoard页面xxx
    </div>

    <div class="showArea">
      <marvel-tab :tabItems="tabItems1">
        <marvel-tab-item :isActive="tabItems1[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="height: 400px;width:500px;background-color: #fafafa;padding: 20px;">
              <marvel-dashboard title="Shit">
                <div slot="customArea">customArea...</div>
                <div slot="contArea">cont...</div>
              </marvel-dashboard>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems1[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
              <pre v-highlight>
                <code class="html">
  &lt;marvel-dashboard title="Shit"&gt;
  &lt;div slot="customArea"&gt;customArea...&lt;/div&gt;
  &lt;div slot="contArea"&gt;cont...&lt;/div&gt;
  &lt;/marvel-dashboard&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
  </div>

</template>

<script>
  import MarvelDashboard from "@/walle/widget/dashboard/MarvelDashboard";
  import MarvelWarning from "../../walle/widget/warning/MarvelWarning";
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";

  export default {
    name: 'page4DashBoard',
    components: {
      MarvelWarning,
      MarvelDashboard,
      MarvelTab,
      MarvelTabItem
  },
    data: function() {
      return {
        tabItems1: [
          {
            label: "Demo View",
            isActive: true
          },
          {
            label: "Code View",
            isActive: false
          }
        ],
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

<style scoped>

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

  .describe{
    font-size: 14px;
    color: #666;
    line-height: 36px;
  }

  .showArea {
    width: 100%;
    height: 550px;
  }

  .codeArea{
    width: 100%;
    height:100%;
    background-color: #f0f0f0;
    overflow: auto;
  }

  .codeArea pre,.codeArea code{
    padding: 0;
    margin: 0;
    min-width: 100%;
    float: left;
  }

  .showAreaInner {
    padding-top: 36px;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    width:8px;
    height:8px;
    background-color: rgba(0,0,0,0);
  }
  ::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: rgba(0,0,0,0);
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: rgba(0,0,0,0.4);
  }

</style>
