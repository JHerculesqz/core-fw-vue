<template>
  <div class="chart" v-bind:id="id"
       v-bind:style="{width: width + 'px', height: height + 'px'}"></div>
</template>

<script>
  export default {
    name: 'MarvelChartBar',
    props: ["id", "theme", "width", "height"],
    data: function () {
      return {
        chartObj: undefined,
        chartData: undefined
      }
    },
    mounted: function () {
      var self = this;

      this.chartObj = echarts.init(document.getElementById(this.id), this.theme);
      this.chartObj.on("click", function (params) {
        if (params.componentType == "series" &&
          params.componentSubType == "bar") {
          self.$emit("onBarItemClick", params);
        }
      });
    },
    methods: {
      setData: function (oData) {
        this.chartData = oData;
        var option = {
          title: {
            text: oData.title
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c}"
          },
          dataZoom: [{
            type: 'slider',
            start: 0,
            end: 100
          }],
          xAxis: {
            type: 'category',
            data: oData.xData,
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: oData.yData,
            type: 'bar'
          }]
        };
        this.chartObj.setOption(option, true);
      }
    }
  }
</script>

<style scoped>
  .chart {
    width: 100%;
    height: 100%;
  }
</style>
