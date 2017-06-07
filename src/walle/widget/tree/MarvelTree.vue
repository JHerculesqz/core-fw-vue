<template>
  <ul class="marvelTree">
    <li v-for="oNode in treeNodes" v-if="oNode.show">
      <p class="marvelTreeNodeText" v-on:click="click" :id="oNode.id">{{oNode.label}}</p>
    </li>
  </ul>
</template>

<script>
  import Bus from '@/walle/core/bus.js';
  export default {
    name: 'MarvelTree',
    data: function() {
        return {
          treeNodes: []
        }
    },
    created: function () {
      Bus.$on('imsgMarvelTreeSetData', this.imsgMarvelTreeSetData);
      Bus.$on('imsgMarvelTreeGetData', this.imsgMarvelTreeGetData);
    },
    beforeDestroy: function () {
      Bus.$off('imsgMarvelTreeSetData', this.imsgMarvelTreeSetData);
      Bus.$off('imsgMarvelTreeGetData', this.imsgMarvelTreeGetData);
    },
    methods:{
      imsgMarvelTreeSetData: function(arrTreeNodes){
        this.treeNodes = arrTreeNodes;
      },
      imsgMarvelTreeGetData: function(){
        this.$emit('onGetTreeData', this.treeNodes);
      },
      click: function(event){
        //1.get oNode
        var oNode;
        for(var i=0;i<this.treeNodes.length;i++){
          oNode = this.treeNodes[i];
          if(oNode.id == event.target.id){
              break;
          }
        }

        //2.trigger
        this.$emit('clickNode', oNode, this.treeNodes);
      }
    }
  }
</script>

<style>
  .marvelTree{
    margin:0;
  }
  .marvelTree .marvelTreeNodeText{
    line-height:40px;
    font-size:14px;
    color:#fff;
    margin:0;
  }
</style>
