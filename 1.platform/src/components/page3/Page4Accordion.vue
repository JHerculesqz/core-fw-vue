<template>
  <div style="width: 180px;height:100%">
    <marvel-accordion isFolder="false" hasShadow="true"
                      title="abc" titleIcon="icon-calculator"
                      defaultSelectLabel="item1"
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
            label: "subItem1"
          }, {
            label: "subItem2"
          }]
        }, {
          label: "item2",
          icon: "icon-office"
        }]
      }
    }
  }
</script>

<style>

</style>
