<template>
  <div>
    <!--危哥，这个按钮只是给你示意一下点击查看按钮以后如何跳转到SolustionDetails模块-->
    <button v-on:click="onClick">查看割接方案</button>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";

  export default {
    components: {
      MarvelRouter
    },
    name: 'SolutionMgr',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
      }
    },
    mounted: function () {

    },
    methods: {
      onClick: function(){
        MarvelRouter.to(this.$router, "SolutionDetails");
      }
    }
  }
</script>

<style scoped>

</style>
