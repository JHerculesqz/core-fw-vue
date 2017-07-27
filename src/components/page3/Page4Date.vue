<template>
  <div style="width: 400px;">
    <marvel-date yearStart="2014" yearEnd="2030" yearSelect="2017"
                 monthSelect="2" daySelect="3"></marvel-date>
  </div>
</template>

<script>
  import MarvelDate from "@/walle/widget/date/MarvelDate";

  export default {
    name: 'page4Crumb',
    components: {
      MarvelDate},
    data: function() {
      return {

      }
    },
    methods:{

    }
  }
</script>

<style>

</style>
