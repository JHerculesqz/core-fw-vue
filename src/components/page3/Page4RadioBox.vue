<template>
  <div>
    <div>
      <marvel-radio-box ref="ref0" id="id1" group="group1"
                        label="x1" showLabel="false"></marvel-radio-box>
      <marvel-radio-box ref="ref1" id="id2" group="group1"
                        label="x2" showLabel="true"></marvel-radio-box>
      <marvel-radio-box ref="ref2" id="id3" group="group1"
                        label="x3" showLabel="true"></marvel-radio-box>
    </div>
    <div>
      <marvel-radio-box ref="ref3" id="id4" group="group2" label="x4"></marvel-radio-box>
    </div>
  </div>

</template>

<script>
  import MarvelRadioBox from "@/walle/widget/select/MarvelRadioBox";

  export default {
    name: 'page4RadioBox',
    components: {MarvelRadioBox},
    data: function() {
      return {
        check: 'a1'
      }
    },
    mounted: function(){
      this.$refs.ref0.setStatus(false, false);
      this.$refs.ref1.setStatus(true, false);
      this.$refs.ref2.setStatus(false, true);
      this.$refs.ref3.setStatus(true, true);
    }
  }
</script>

<style>

</style>
