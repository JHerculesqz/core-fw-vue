<template>
  <div>
    <div>
      <button v-on:click="onClick4Radio">getStatus</button>
      <br>
      <marvel-radio-box ref="ref0" id="id1" group="group1"
                        label="x1" showLabel="false" v-on:onChange="onChange4Radio"></marvel-radio-box>
      <marvel-radio-box ref="ref1" id="id2" group="group1"
                        label="x212" showLabel="true" v-on:onChange="onChange4Radio"></marvel-radio-box>
      <br>
      <marvel-radio-box ref="ref2" id="id3" group="group2"
                        label="x3" showLabel="true"></marvel-radio-box>
      <marvel-radio-box ref="ref3" id="id4" group="group2"
                        label="x4" showLabel="true"></marvel-radio-box>
    </div>
    <div>
      <button v-on:click="onClick4Switch">getStatus</button>
      <br>
      <marvel-switch ref="ref4" id="id5"></marvel-switch>
      <marvel-switch ref="ref5" id="id6"
                     v-on:onChange="onChange4Switch"></marvel-switch>
      <br>
      <marvel-switch ref="ref6" id="id7"></marvel-switch>
      <marvel-switch ref="ref7" id="id8"></marvel-switch>
    </div>
    <div>
      <button v-on:click="onClick4Check">getStatus</button>
      <br>
      <marvel-check-box ref="ref8" id="id9"
                        label="x1" showLabel="false"></marvel-check-box>
      <marvel-check-box ref="ref9" id="id10"
                        label="x2" showLabel="true"
                        v-on:onChange="onChange4Check"></marvel-check-box>
      <br>
      <marvel-check-box ref="ref10" id="id11"
                        label="x3" showLabel="true"></marvel-check-box>
      <marvel-check-box ref="ref11" id="id12"
                        label="x4" showLabel="true"></marvel-check-box>
    </div>
  </div>

</template>

<script>
  import MarvelRadioBox from "@/walle/widget/select/MarvelRadioBox";
  import MarvelSwitch from "@/walle/widget/select/MarvelSwitch";
  import MarvelCheckBox from "@/walle/widget/select/MarvelCheckBox";

  export default {
    name: 'page4RadioBox',
    components: {
      MarvelCheckBox,
      MarvelRadioBox, MarvelSwitch},
    data: function() {
      return {

      }
    },
    mounted: function(){
      //1.
      this.$refs.ref0.setStatus(false, false);
      this.$refs.ref1.setStatus(true, false);
      this.$refs.ref2.setStatus(false, true);
      this.$refs.ref3.setStatus(true, true);
      //2.
      this.$refs.ref4.setStatus(false, false);
      this.$refs.ref5.setStatus(true, false);
      this.$refs.ref6.setStatus(false, true);
      this.$refs.ref7.setStatus(true, true);
      //3.
      this.$refs.ref8.setStatus(false, false);
      this.$refs.ref9.setStatus(true, false);
      this.$refs.ref10.setStatus(false, true);
      this.$refs.ref11.setStatus(true, true);
    },
    methods: {
      onChange4Radio: function(strVal){
        //this.checkItem = strVal;
      },
      onClick4Radio: function(){
        console.log(this.$refs.ref0.getCheckItem() + "," + this.$refs.ref1.getCheckItem());
      },
      onClick4Switch: function () {
        console.log("[Switch]getStatus..." +
          this.$refs.ref4.getCheckItem() + "," +
          this.$refs.ref5.getCheckItem());
      },
      onChange4Switch: function(strOldVal, strNewVal){
        console.log("[Switch]change..." + strNewVal);
      },
      onClick4Check: function(){
        console.log("[CheckBox]getStatus..." +
          this.$refs.ref8.getCheckItem() + "," +
          this.$refs.ref9.getCheckItem());
      },
      onChange4Check: function(strOldVal, strNewVal){
        console.log("[CheckBox]change..." + strNewVal);
      }
    }
  }
</script>

<style>

</style>
