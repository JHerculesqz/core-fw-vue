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
    name: 'MarvelHightLight',
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
      setInputMsg: function (strInputMsg) {
        this.inputMsg = strInputMsg;
      },
      getInputMsg: function () {
        return this.inputMsg;
      },
      onInput: _.debounce(function (event) {
        this.$emit("onInput", this.inputMsg);
      }, 1000)
    }
  }
</script>

<style scoped>
  .inputWrapper {
    width: 100%;
    position: relative;
  }

  .placeHolder {
    color: #999;
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    padding: 0 12px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
  }

  .inputWrapper .inputDefault {
    padding: 0 10px;
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    outline: none;
  }

  .inputWrapper .inputDefault:hover, .inputWrapper .inputDefault:focus {
    border: 1px solid #3399ff;
  }

  .inputWrapper .errorTip {
    color: #ff4c4c;
    line-height: 36px;
    font-size: 14px;
    display: none;
  }

  .inputWrapper .errorTip:before {
    margin-right: 10px;
  }

  .error .inputDefault {
    border: 1px solid #ff4c4c !important;
  }

  .error .errorTip {
    display: block;
  }

  .disable .inputDefault {
    background-color: #f0f0f0;
    pointer-events: none;
  }

  .mini .inputDefault {
    height: 22px;
    line-height: 22px;
    font-size: 12px;
  }

  .mini .placeHolder {
    height: 22px;
    line-height: 22px;
  }

  /*region dark theme*/
  .dark .inputWrapper {
    background-color: transparent;
  }

  .dark .inputWrapper .placeHolder {
    color: #666;
  }

  .dark .inputDefault {
    border: 1px solid #8b90b3;
    font-size: 14px;
    color: #ffffff;
    background-color: transparent;
  }

  .dark .inputWrapper .inputDefault:hover, .inputWrapper .inputDefault:focus {
    border: 1px solid #3dcca6;
  }

  .dark .disable .inputDefault {
    background-color: rgba(0, 0, 0, 0.4);
    color: #8d8d8d;
    pointer-events: none;
  }

  /*endregion*/


</style>
