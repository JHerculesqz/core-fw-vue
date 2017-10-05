<template>
  <div class="widgetShowSession">
    <!--1级 start-->
    <div class="title level1">GIS</div>
    <div class="describe">
      基于Leaflet实现的WebGIS
    </div>
    <!--1级 end-->
    <!--2级 start-->
    <div class="title level2">Leaflet</div>
    <div class="describe">
      Leaflet
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems1">
        <marvel-tab-item :isActive="tabItems1[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width: 100%;height: 300px;">
              <marvel-leaflet ref="ref0" id="gisMapId1" v-on:onClick="onClick"></marvel-leaflet>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems1[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre v-highlight>
                <code class="html">
&lt;marvel-leaflet ref="ref0" id="gisMapId1" v-on:onClick="onClick"&gt;&lt;/marvel-leaflet&gt;
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
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet"

  export default {
    name: 'page4Leaflet',
    components: {MarvelTabItem,
      MarvelTab,MarvelLeaflet},
    data: function() {
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
    mounted: function(){
      //#region custom
      this.$refs.ref0.init(51.505, -0.09, 13, 18, "/static/leaflet/images/shit.png");
      this.$refs.ref0.setCenter(51.505, -0.09, 18);
      this.$refs.ref0.addMarker(51.5, -0.09, "<b>Hello world!</b><br>Hello world!");
      this.$refs.ref0.addCircle(51.508, -0.11, 500, "red", "#f03", 0.5, "1");
      this.$refs.ref0.addPolygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]], "2");
      this.$refs.ref0.addIcon("id1", 51.5, -0.11, "/static/leaflet/images/shit.png", "1", {name: 1},
        this.onDBClick, this.onDrag);
      this.$refs.ref0.addIcon("id2", 51.5, -0.13, "/static/leaflet/images/shit.png", "2", {name: 2},
        this.onDBClick);
      this.$refs.ref0.updateIcon("id2", 51.5, -0.18, "/static/leaflet/images/shit.png", "22", {name: 22});
      this.$refs.ref0.addWater();
      this.$refs.ref0.addHeatMap([
        [51.5, -0.11, "1"],
        [51.5, -0.13, "2"],
        [51.5, -0.11, "3"],
        [51.5, -0.13, "4"],
        [51.5, -0.11, "5"]
      ]);
      //#endregion
    },
    methods: {
      //#region inner
      onClick: function(oPoint){
        console.log(oPoint);
      },
      onDBClick: function(strId){
        console.log(strId);
      },
      onDrag: function(oItem){
        console.log(oItem);
      }
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
  .widgetShowSession{
    padding: 20px 100px;
    width:100%;
    box-sizing: border-box;
  }
  .title{
    color: #4d4d4d;
  }
  .level1{
    font-size: 32px;
    line-height: 54px;
  }
  .level2{
    margin-top: 40px;
    font-size: 22px;
    line-height: 48px;
  }
  .describe{
    font-size: 14px;
    color: #666;
    line-height: 36px;
  }
  .showArea{
    width:100%;
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
  .showAreaInner{
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
  /*document fix  style end*/
  /*document custom style start*/
  .showArea{
    height:400px;
  }
  /*document custom style end*/
  /*custom style start*/

  /*custom style end*/
</style>
