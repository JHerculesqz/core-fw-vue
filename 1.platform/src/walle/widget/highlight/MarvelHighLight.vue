<template>
  <div class="marvelHighLightWrapper">
    <pre class="marvelHighLightPre">
      <code class="marvelHighLightCode" v-bind:class="langType" v-if="show">{{sourceCode}}</code>
    </pre>
  </div>
</template>

<script>
  import * as hljs from 'highlight.js'
  import "highlight.js/styles/atom-one-light.css"

  const hightlightCode = () => {
    let blocks = document.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  };

  export default {
    name: 'MarvelHighLight',
    data: function () {
      return {
        langType:"",
        sourceCode:"",
        show:true,
      }
    },
    mounted: function(){
      //#region Custom

      //#endregion
    },
    methods: {
      //#region inner
      //#endregion
      //#region callback

      //#endregion
      //#region 3rd
      setData: function (strLangType, strSourceCode) {
        this.show = false;
        this.langType = strLangType;
        this.sourceCode = strSourceCode;
        this.$nextTick(function(){
          this.show = true;
          this.$nextTick(function(){
            hightlightCode();
          });
        });
      }
      //#endregion
    }
  }
</script>

<style scoped>

  .marvelHighLightWrapper{
    padding: 0;
    margin: 0;
  }
  .marvelHighLightPre{
    padding: 0;
    margin: 0;
  }
  .marvelHighLightCode{
    padding: 0;
    margin: 0;
  }
</style>
