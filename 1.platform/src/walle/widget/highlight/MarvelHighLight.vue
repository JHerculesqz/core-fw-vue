<template>
  <div>
    <pre>
      <code v-bind:class="langType">
        {{sourceCode}}
      </code>
    </pre>
  </div>
</template>

<script>
  import * as hljs from 'highlight.js'
  import "highlight.js/styles/atom-one-dark.css"

  const hightlightCode = () => {
    let blocks = document.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  };

  export default {
    name: 'MarvelHighLight',
    props: ["langType", "sourceCode"],
    data: function () {
      return {

      }
    },
    mounted: function(){
      //#region Custom

      this._initEx();

      //#endregion
    },
    updated: function(){
      hightlightCode();
    },
    methods: {
      //#region inner

      _initEx: function(){
        hightlightCode();
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

</style>
