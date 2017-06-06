<template>
  <ul>
    <li v-for="oNode in treeNodes">
      <input type="checkbox" v-model="oNode.show"/>{{oNode.label}}
    </li>
  </ul>
</template>

<script>
  import Bus from '@/walle/core/bus.js';
  export default {
    name: 'MarvelCheckTree',
    data: function() {
        return {
          treeNodes: []
        }
    },
    created: function () {
      Bus.$on('imsgMarvelCheckTreeSetData', this.imsgMarvelCheckTreeSetData);
      Bus.$on('imsgMarvelCheckTreeGetData', this.imsgMarvelCheckTreeGetData);
    },
    beforeDestroy: function () {
      Bus.$off('imsgMarvelCheckTreeSetData', this.imsgMarvelCheckTreeSetData);
      Bus.$off('imsgMarvelCheckTreeGetData', this.imsgMarvelCheckTreeGetData);
    },
    methods:{
      imsgMarvelCheckTreeSetData: function(arrTreeNodes){
        this.treeNodes = arrTreeNodes;
      },
      imsgMarvelCheckTreeGetData: function(){
        this.$emit('onGetTreeData', this.treeNodes);
      }
    }
  }
</script>

<style>

</style>
