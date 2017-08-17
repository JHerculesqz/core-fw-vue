<template>
  <marvel-list1 :items="listItems" :bargeCount="listBargeCount"
                v-on:onListItemClick="onListItemClick"></marvel-list1>
</template>

<script>
  import MarvelList1 from "@/walle/widget/list/MarvelList1";

  export default {
    name: 'page4List1',
    components: { MarvelList1 },
    data: function() {
      return {
        listItems: [{
          icon: "/static/walle/deviceIcon-04.png",
          devId: "110",
          devName: "11111111111111111111"
        }],
        listBargeCount: 0
      }
    },
    mounted: function(){
      for(var i=0;i<100;i++){
        this.items.push({
          icon: "/static/walle/deviceIcon-04.png",
          devId: i,
          devName: i
        });
      }
      this.bargeCount = this.items.length;
    },
    methods:{
      onListItemClick: function(oItem){
        this.items.splice(0,1);
        this.bargeCount = this.items.length;
      }
    }
  }
</script>

<style>

</style>
