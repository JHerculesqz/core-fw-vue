<template>
  <marvel-toolbar
    v-bind:items="items" theme="dark"
    v-on:onToolbarItemClick="onToolbarItemClick"></marvel-toolbar>
</template>

<script>
  import MarvelToolbar from '@/walle/widget/toolbar/MarvelToolbar';

  export default {
    components: {
      MarvelToolbar
    },
    name: "TopoToolbar",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region toolbar
        items: [{
          id: 1,
          label: '拓扑还原',
          icon: 'icon-target'
        },{
          id: 2,
          label: '保存',
          icon: 'icon-floppy-disk'
        },{
          id: 3,
          label: '重置',
          icon: 'icon-target'
        },{
          id: 4,
          label: '导出',
          icon: 'icon-download'
        },{
          id: 5,
          label: '布局对齐',
          icon: 'icon-target'
        },{
          id: 6,
          label: '显示设置',
          icon: 'icon-target'
        },{
          id: 7,
          label: '平移模式',
          icon: 'icon-target'
        },{
          id: 8,
          label: '最佳视图',
          icon: 'icon-target'
        },{
          id: 9,
          label: '过滤',
          icon: 'icon-target'
        },{
          id: 10,
          label: '全屏',
          icon: 'icon-target'
        },{
          id: 11,
          label: '显示流量',
          icon: 'icon-target'
        },{
          id: 12,
          label: '创建光纤',
          icon: 'icon-target'
        },{
          id: 13,
          label: '返回上层',
          icon: 'icon-cloud-upload'
        }]
        //#endregion
      }
    },
    methods:{
      onToolbarItemClick: function(oItem){
        alert(oItem);
      }
    }
  }

</script>

<style>


</style>
