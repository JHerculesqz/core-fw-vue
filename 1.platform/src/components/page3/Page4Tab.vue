<template>
  <div style="width: 500px;height: 400px;">
    <marvel-tab :tabItems="tabItems">
      <marvel-tab-item :isActive="tabItems[0].isActive">
        1
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[1].isActive">
        2
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[2].isActive">
        3
      </marvel-tab-item>
      <marvel-tab-item :isActive="tabItems[3].isActive">
        4
      </marvel-tab-item>
    </marvel-tab>
  </div>

</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";

  export default {
    name: 'page4Tab',
    components: {
      MarvelTabItem,
      MarvelTab},
    data: function() {
      return {
        tabItems: [{
          label: "Home",
          isActive: false
        }, {
          label: "Profile",
          isActive: true
        }, {
          label: "Messages",
          isActive: false
        }, {
          label: "Settings",
          isActive: false
        }]
      }
    },
    methods:{

    }
  }
</script>

<style>

</style>
