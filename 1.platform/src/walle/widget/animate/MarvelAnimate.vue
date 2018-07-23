<template>
  <!-- accordion start-->
  <div class="marvelAnimateWrapper" :class="transitionName">
    <slot></slot>
  </div>
  <!-- accordion end-->
</template>

<script>
  export default {
    name: 'MarvelAnimate',
    props: [],
    data: function() {
      return {
        //#region const
        transitionName: "",
        //#endregion
      }
    },
    mounted: function(){

    },
    methods: {
      //#region inner
      //#endregion
      //#region callback
      //#endregion
      //#region 3rd
      doAnimate: function (strAnimateType) {
        var self = this;
        /*type: slideInLeft、slideInRight、fadeInAndFadeOut*/
        this.transitionName = strAnimateType;
        setTimeout(function () {
          self.transitionName = "";
        },2000);
      }
      //#endregion
    }
  }
</script>

<style scoped>
  .selfAnimate{
    height: 100%;
  }

  .slideInLeft{
    position: relative;
    animation: slideInLeft 0.4s ease-out;
  }

  @keyframes slideInLeft {
    0% {
      right: 160px;
    }
    77%{
      right: 0px;
    }
  }

  .slideInRight{
    position: relative;
    animation: slideInRight 0.4s ease-out;
  }

  @keyframes slideInRight {
    0% {
      left: 160px;
    }
    77%{
      left: 0px;
    }
  }

  .fadeInAndFadeOut{
    position: relative;
    animation: fadeInAndFadeOut 2s ease-out;
  }

  @keyframes fadeInAndFadeOut {
    0% {
      bottom: 0px;
      opacity: 0;
    }
    30%{
      bottom: 0px;
      opacity: 1;
    }
    100%{
      bottom: 80px;
      opacity: 0;
    }
  }
</style>
