<template>
  <div>
    <button v-on:click.stop="onClick">show</button>
    <marvel-menu-context ref="ref0"
                         :items="items"
                         v-on:onMenuItemClick="onMenuItemClick"></marvel-menu-context>
  </div>
</template>

<script>
  import MarvelMenuContext from "@/walle/widget/menu/MarvelMenuContext"

  export default {
    name: 'page4Menu',
    components: {MarvelMenuContext},
    data: function() {
      return {
        items: [{
          icon: "icon-cancel-circle",
          color: "#ff4c4c",
          label: "删除"
        }, {
          icon: "icon-pencil",
          color: "",
          label: "编辑"
        }]
      }
    },
    methods: {
      onClick: function(){
        this.$refs.ref0.showSubMenu(100,200);
      },
      onMenuItemClick: function(strMenuItemLabel){
        alert(strMenuItemLabel);
      }
    }
  }
</script>

<style>

</style>
