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
    <div>
      <marvel-switch ref="ref4" id="id5" classCustom="classCustom1"></marvel-switch>
      <marvel-switch ref="ref5" id="id6" classCustom="classCustom1"></marvel-switch>
      <marvel-switch ref="ref6" id="id7" classCustom="classCustom1"></marvel-switch>
      <marvel-switch ref="ref7" id="id8" classCustom="classCustom1"></marvel-switch>
    </div>
  </div>

</template>

<script>
  import MarvelRadioBox from "@/walle/widget/select/MarvelRadioBox";
  import MarvelSwitch from "@/walle/widget/select/MarvelSwitch";

  export default {
    name: 'page4RadioBox',
    components: {MarvelRadioBox, MarvelSwitch},
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
      console.log(this.$refs.ref1.getCheckItem());
      this.$refs.ref4.setStatus(true, false);
      this.$refs.ref5.setStatus(false, false);
      this.$refs.ref6.setStatus(true, true);
      this.$refs.ref7.setStatus(false, true);
      console.log(this.$refs.ref4.getCheckItem());
    }
  }
</script>

<style>
  .classCustom1{
    height:30px;
    width: 400px;
  }
</style>
