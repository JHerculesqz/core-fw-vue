<template>
  <div style="width:100%;height:300px;">
    <marvel-grid :titles="titles" :rows="rows" :limit="limit"></marvel-grid>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  export default {
    components: {
      MarvelGrid,
      MarvelFrame
    },
    name: 'ImportExFileMgr',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region grid
        titles: [{
          label: "序号",
          width: "5%"
        }, {
          label: "文件名",
          width: "13%"
        }, {
          label: "文件类型",
          width: "12%"
        }, {
          label: "上传人",
          width: "8%"
        }, {
          label: "上传时间",
          width: "13%"
        }, {
          label: "解析状态",
          width: "10%"
        }, {
          label: "解析时间",
          width: "13%"
        }, {
          label: "备注",
          width: "13%"
        }, {
          label: "操作",
          width: "13%"
        }],
        skip: 0,
        limit: 20,
        rows: []
        //#endregion
      }
    },
    mounted: function () {
      var self = this;

      if (this.debug) {
        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 9; j++) {
            if(j != 8){
              var oCell = {
                value: "value" + i,
                type: "text"
              };
              oRow.push(oCell);
            }
            else{
              var oCell = {
                value: [{
                  value: "icon-location2",
                  onClick: function () {
                    alert(Math.random());
                  }
                }, {
                  value: "icon-location2",
                  onClick: function () {
                    alert(Math.random());
                  }
                }],
                type: "icon"
              };
              oRow.push(oCell);
            }
          }
          this.rows.push(oRow);
        }
      }
      else{

      }
    },
    destroyed: function () {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
