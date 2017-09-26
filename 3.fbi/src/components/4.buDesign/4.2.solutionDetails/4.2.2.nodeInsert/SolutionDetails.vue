<template>
  <div class="main">
    <div class="customTabWrapper">
      <marvel-wizard-tab theme="dark"
                         :wizardTabs="wizardTabs" v-on:onClick="onClickWizardTab"></marvel-wizard-tab>
    </div>
    <div class="topoArea">
      <div class="topoAreaCont">
        <keep-alive>
          <component v-bind:is="moduleName"
                     solutionName="solutionName"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelTxtButton from "@/walle/widget/button/MarvelTxtButton";
  import MarvelWizardTab from "@/walle/widget/wizard/MarvelWizardTab";
  import NodeInsertS1 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS1";
  import NodeInsertS2 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS2";
  import NodeInsertS3 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS3";
  import NodeInsertS4 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS4";
  import NodeInsertS5 from "@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/NodeInsertS5";

  export default {
    components: {
      MarvelWizardTab,
      MarvelRouter,
      MarvelTxtButton,
      MarvelTabItem,
      MarvelTab,
      NodeInsertS1,
      NodeInsertS2,
      NodeInsertS3,
      NodeInsertS4,
      NodeInsertS5
    },
    name: 'SolutionDetails',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region wizardTab
        wizardTabs: [{
          index: 1,
          label: "新建华为网络",
          isActive: true
        }, {
          index: 2,
          label: "环插设备",
          isActive: false
        }, {
          index: 3,
          label: "确认不可割接业务",
          isActive: false
        }, {
          index: 4,
          label: "割接穿通业务",
          isActive: false
        }, {
          index: 5,
          label: "割接落地业务",
          isActive: false
        }],
        //#endregion
        //#region params
        solutionName: "",
        //#endregion
        //#region moduleName
        moduleName: "NodeInsertS1"
        //#endregion
      }
    },
    mounted: function () {
      //1.get solutionName
      this.solutionName = MarvelRouter.getParam(this.$route, "name");
    },
    methods: {
      //#region inner
      onClickWizardTab: function (oItem) {
        if(oItem.index == 1){
          this.moduleName = "NodeInsertS1";
        }
        else if(oItem.index == 2){
          this.moduleName = "NodeInsertS2";
        }
        else if(oItem.index == 3){
          this.moduleName = "NodeInsertS3";
        }
        else if(oItem.index == 4){
          this.moduleName = "NodeInsertS4";
        }
        else {
          this.moduleName = "NodeInsertS5";
        }
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
  .main{
    height: 100%;
  }
  .customTabWrapper {
    height: 32px;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
  }
  .topoArea {
    height: calc(100% - 32px);
    padding: 10px;
    box-sizing: border-box;
  }
  .topoAreaCont{
    height: 100%;
    box-shadow: 1px 2px 6px rgba(0,0,0,0.25);
  }
</style>
