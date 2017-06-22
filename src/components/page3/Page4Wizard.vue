<template>
  <div>
    <button v-on:click="setProgress">setProgress</button>
    <marvel-wizard ref="ref0" :items="items"></marvel-wizard>
  </div>
</template>

<script>
  import MarvelWizard from "@/walle/widget/wizard/MarvelWizard"

  export default {
    name: 'page4Wizard',
    components: {MarvelWizard},
    data: function() {
      return {
        items: [{
          label: "Basic Information",
          index: 1
        }, {
          label: "Condition",
          index: 2
        }, {
          label: "Action",
          index: 3
        }]
      }
    },
    methods: {
      setProgress: function(){
        this.$refs.ref0.setProgress(1);
        this.$refs.ref0.setProgress(2);
      }
    }
  }
</script>

<style>

</style>
