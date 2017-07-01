<template>
  <div class="chart" v-bind:id="id"></div>
</template>

<script>
  export default {
    name: 'MarvelChartScatter',
    props: ["id", "theme"],
    data: function() {
        return {
          chartObj: undefined,
          chartData: undefined
        }
    },
    methods: {
      init: function(){
        this.chartObj = echarts.init(document.getElementById(this.id), this.theme);
      },
      setData: function(oData){
        this.chartData = oData;
        var option = {
          backgroundColor: '#404a59',
          title: {
            text: this.chartData.title,
            subtext: this.chartData.subtxt,
            sublink: this.chartData.sublink,
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip : {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:[this.chartData.name],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series : [
            {
              name: this.chartData.name,
              type: 'scatter',
              coordinateSystem: 'geo',
              data: this.chartData.data,
              symbolSize: function (val) {
                return val[2] / 10;
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#ddb926'
                }
              }
            },
            {
              name: "Top " + this.chartData.topN,
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.chartData.data.sort(function (a, b) {
                return b.value[2] - a.value[2];
              }).slice(0, this.chartData.topN),
              symbolSize: function (val) {
                return val[2] / 10;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        };
        this.chartObj.setOption(option, true);
      }
    }
  }
</script>

<style scoped>
  .chart {
    width: 100%; height: 100%;
  }
</style>
