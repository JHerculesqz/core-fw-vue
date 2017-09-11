<template>
  <div>
    <div>
      <marvel-wizard ref="refWizard" :items="items"
                     v-on:onWizardClick="onWizardClick"></marvel-wizard>
    </div>
    <div>
      <component v-bind:is="downModuleName"></component>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelWizard from "@/walle/widget/wizard/MarvelWizard";
  import ImportExFileMgr from "@/components/1.importex/ImportExFileMgr";
  import ImportExParseFixInput from "@/components/1.importex/ImportExParseFixInput";
  import ImportExParseInput from "@/components/1.importex/ImportExParseInput";
  export default {
    components: {
      MarvelWizard,
      MarvelFrame, ImportExFileMgr, ImportExParseFixInput, ImportExParseInput
    },
    name: 'ImportEx',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region wizard
        items: [{
          id: "ImportExFileMgr",
          label: "数据上传",
          index: 1
        }, {
          id: "ImportExParseInput",
          label: "脚本解析",
          index: 2
        }, {
          id: "ImportExParseFixInput",
          label: "解析修正",
          index: 3
        }],
        downModuleName: "ImportExFileMgr"
        //#endregion
      }
    },
    mounted: function () {
      //1.初始化向导
      this.$refs.refWizard.setProgress(1);
    },
    destroyed: function () {

    },
    methods: {
      onWizardClick: function (oWizardItem) {
        this.downModuleName = oWizardItem.id;
      }
    }
  }
</script>

<style scoped>

</style>
