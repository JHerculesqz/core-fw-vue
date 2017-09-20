<template>
  <div v-show="showSummaryPanel" class="solutionSummaryWrapper">
    <div class="topArea">
      <div class="session mini-24 middle-12">
        <div class="sessionName">方案名称: </div>
        <div class="sessionCont"> {{solutionName}} </div>
      </div>
      <div class="session mini-24 middle-12">
        <div class="sessionName">方案责任人: </div>
        <div class="sessionCont"> {{solutionUserName}} </div>
      </div>
      <div class="session mini-24 middle-12">
        <div class="sessionName">方案类型: </div>
        <div class="sessionCont"> {{solutionType}} </div>
      </div>
      <div class="session mini-24 middle-12">
        <div class="sessionName">描述: </div>
        <div class="sessionCont">{{solutionDescription}}</div>
      </div>
      <div class="session mini-24">
        <div class="sessionName">方案范围:</div>
        <div class="gridArea">
          <marvel-grid :titles="titles4SelectNodes"
                       :rows="rows4SelectNodes"
                       :limit="limit4SelectNodes"
                       theme="dark"></marvel-grid>
        </div>
      </div>
    </div>
    <div class="downArea">
      <div class="btnArea">
        <marvel-primary-button classCustom="classCustom1" label="查看"
                               v-on:onClick="onClickView"></marvel-primary-button>
        <marvel-primary-button classCustom="classCustom1" label="提交"
                               v-on:onClick="onClickSubmit"></marvel-primary-button>
        <marvel-primary-button classCustom="classCustom1" label="撤销"
                               v-on:onClick="onClickRevoke"></marvel-primary-button>
        <marvel-primary-button classCustom="classCustom1" label="删除"
                               v-on:onClick="onClickDel"></marvel-primary-button>
      </div>

    </div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid.vue";
  import MarvelFrame from '@/walle/widget/frame/MarvelFrame';

  export default {
    components: {
      MarvelGrid,
      MarvelPrimaryButton,
      MarvelFrame,
      MarvelRouter
    },
    name: "SolutionSummary",
    props: ["showSummaryPanel"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region solutionSummary
        solutionName: '',
        solutionUserName: '',
        solutionType: '',
        solutionDescription: '',
        //#endregion
        //#region selectNodes
        titles4SelectNodes: [{
          label: "",
          width: "5%"
        }, {
          label: "网元名称",
          width: "13%"
        }],
        skip4SelectNodes: 0,
        limit4SelectNodes: 20,
        rows4SelectNodes: [],
        //#endregion
      };
    },
    mounted: function () {

    },
    methods: {
      setData: function(oSummary){
        this.solutionName = oSummary.solutionName;
        this.solutionUserName = oSummary.solutionUserName;
        this.solutionType = oSummary.solutionType;
        this.solutionDescription = oSummary.solutionDescription;
        this.rows4SelectNodes = [];
        this.rows4SelectNodes = this.rows4SelectNodes.concat(oSummary.rows4SelectNodes);
      },
      onClickView: function(){
        //TODO:应该还需要传递solutionName
        MarvelRouter.to(this.$router, "SolutionDetails");
      },
      onClickSubmit: function(){
        alert("onClickSubmit");
      },
      onClickRevoke: function(){
        alert("onClickSubmit");
      },
      onClickDel: function(){
        alert("onClickDel");
        this.$emit("onClickDel", this.solutionName);
      }
    }

  }

</script>

<style scoped>
  .solutionSummaryWrapper{
    width:100%;
    height:100%;
  }

  .topArea{
    height:calc(100% - 62px);
    padding-top: 20px;
    box-sizing: border-box;
  }
  .session{
    margin-bottom: 20px;
    overflow: hidden;
  }
  .sessionName{
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    width:100px;
    color: #bdc1dd;
    float: left;
  }
  .sessionCont{
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    white-space: nowrap;
    float: left;
    color: #bdc1dd;
  }
  .gridArea{
    width: 100%;
    height:240px;
    padding-top: 24px;
    box-sizing: border-box;
  }

  .downArea{
    height: 62px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .btnArea{
    float: right;
  }
  .classCustom1{
    margin-left: 20px;
  }
</style>
