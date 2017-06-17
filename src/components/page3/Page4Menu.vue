<template>
  <marvel-menu :items="items"></marvel-menu>
</template>

<script>
  import MarvelMenu from "@/walle/widget/menu/MarvelMenu"

  export default {
    name: 'page4Menu',
    components: {MarvelMenu},
    data: function() {
      return {
        items: [{
          label: "menu1",
          groups:[{
            name: "group1",
            sessions: [{
              label: "拓扑",
              items: [{
                label: "拓扑管理",
                onClick: function(){
                  alert("拓扑管理");
                }
              }, {
                label: "IP拓扑管理",
                onClick: function(){
                  alert("IP拓扑管理");
                }
              }]
            }, {
              label: "性能管理",
              items: [{
                label: "模板管理",
                onClick: function(){
                  alert("模板管理");
                }
              }, {
                label: "任务管理",
                onClick: function(){
                  alert("任务管理");
                }
              }]
            }]
          }, {
            name: "group2",
            sessions: [{
              label: "监视",
              items: [{
                label : "KPI监视",
                onClick: function(){
                  alert("IP拓扑管理");
                }
              }, {
                label : "GDP监视",
                onClick: function(){
                  alert("GDP监视");
                }
              }]
            }, {
              label: "设置",
              items: [{
                label: "用户设置",
                onClick: function(){
                  alert("用户设置");
                }
              }, {
                label: "系统设置",
                onClick: function(){
                  alert("系统设置");
                }
              }]
            }]
          }]
        }, {
          label: "menu2",
          groups:[{
            name: "group1",
            sessions: [{
              label: "拓扑",
              items: [{
                label: "拓扑管理",
                onClick: function(){
                  alert("拓扑管理");
                }
              }, {
                label: "IP拓扑管理",
                onClick: function(){
                  alert("IP拓扑管理");
                }
              }]
            }, {
              label: "性能管理",
              items: [{
                label: "模板管理",
                onClick: function(){
                  alert("模板管理");
                }
              }, {
                label: "任务管理",
                onClick: function(){
                  alert("任务管理");
                }
              }]
            }]
          }, {
            name: "group2",
            sessions: [{
              label: "监视",
              items: [{
                label : "KPI监视",
                onClick: function(){
                  alert("IP拓扑管理");
                }
              }, {
                label : "GDP监视",
                onClick: function(){
                  alert("GDP监视");
                }
              }]
            }, {
              label: "设置",
              items: [{
                label: "用户设置",
                onClick: function(){
                  alert("用户设置");
                }
              }, {
                label: "系统设置",
                onClick: function(){
                  alert("系统设置");
                }
              }]
            }]
          }]
        }]
      }
    }
  }
</script>

<style>

</style>
