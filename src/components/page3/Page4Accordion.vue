<template>
  <div style="width: 180px;height:100%">
    <marvel-accordion isFolder="false" hasShadow="false"
                      title="abc" titleIcon="icon-calculator"
                      :items="items"></marvel-accordion>
  </div>
</template>

<script>
  import MarvelAccordion from "@/walle/widget/accordion/MarvelAccordion"

  export default {
    name: 'page4Accordion',
    components: {MarvelAccordion},
    data: function() {
      return {
        items: [{
          label: "item1",
          icon: "icon-office",
          expand: false,
          subItems: [{
            label: "subItem1",
            click: function(){
              console.log("subItem1");
            }
          }, {
            label: "subItem2",
            click: function(){
              console.log("subItem2");
            }
          }]
        }, {
          label: "item2",
          icon: "icon-office",
          click: function(){
            console.log("item2");
          }
        }]
      }
    }
  }
</script>

<style>

</style>
