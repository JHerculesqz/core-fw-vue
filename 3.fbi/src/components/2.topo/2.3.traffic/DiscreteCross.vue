<template>
  <div class="discreteCressWrapper">
    <div class="titleArea">
      <div class="titleName">离散交叉</div>
      <div class="btnArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="导出"
                                icon="icon-download"
                                theme="dark"
                                v-on:onClick="onClick4ExportDiscreteCross"></marvel-icon-txt-button>
      </div>
    </div>
    <div class="firstGridArea">
      <marvel-grid :titles="titles4DiscreteCross"
                   :rows="rows4DiscreteCross"
                   :limit="limit4DiscreteCross"
                   theme="dark"
                   v-on:onClickRow="onClickRow4DiscreteCross"></marvel-grid>
    </div>
  </div>
</template>

<script>
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  export default {
    components: {
      MarvelGrid,
      MarvelIconTxtButton
    },
    name: "DiscreteCross",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region DiscreteCross
        titles4DiscreteCross: [{
          label: "",
          width: "5%"
        }, {
          label: "所属网元名称",
          width: "13%"
        }, {
          label: "级别",
          width: "12%"
        }, {
          label: "源槽位/单板/端口",
          width: "13%"
        }, {
          label: "源高阶时隙",
          width: "13%"
        }, {
          label: "源低阶时隙",
          width: "13%"
        }, {
          label: "宿槽位/单板/端口",
          width: "13%"
        }, {
          label: "宿高阶时隙",
          width: "13%"
        }, {
          label: "宿低阶时隙",
          width: "13%"
        }, {
          label: "工作类型",
          width: "13%"
        }, {
          label: "SNCP组Id",
          width: "13%"
        }],
        skip4DiscreteCross: 0,
        limit4DiscreteCross: 20,
        rows4DiscreteCross: [],
        //#endregion
      };
    },
    mounted: function () {
      if (this.debug) {
        this._getDiscreteCrossMock();
      }
      else {
        //TODO
      }
    },
    methods: {
      _getDiscreteCrossMock: function () {
        this.rows4DiscreteCross = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 11; j++) {
            var oCell = {
              value: "value" + i,//Math.random() * 100
              type: "text"
            };
            oRow.push(oCell);
          }
          this.rows4DiscreteCross.push(oRow);
        }
      },
      onClick4ExportDiscreteCross: function () {
        if (this.debug) {
          alert("ExportDiscreteCross");
        }
        else {
          //TODO:
        }
      },
      onClickRow4DiscreteCross:function(oRow){
          this.$emit("onClickRow4DiscreteCross",oRow);
      }
    }
  }

</script>

<style scoped>
  .discreteCressWrapper{
    height:100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .titleArea{
    width: 100%;
    height: 52px;
  }
  .titleName{
    float: left;
    height: 52px;
    font-size: 16px;
    color: #FFFFFF;
    /*font-weight: bold;*/
    line-height: 52px;
  }
  .btnArea{
    height: 52px;
    padding: 10px 0;
    box-sizing: border-box;
    float: right;
  }
  .firstGridArea{
    height: calc(100% - 52px);
  }
  .classCustom1{
    margin-left: 20px;
  }
</style>
