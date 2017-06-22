<template>
  <div>
    <marvel-button isLarge="true" classCustom="classCustom1" label="Large"
                   v-on:onClick="onClick"></marvel-button>
    <marvel-button isLarge="false" classCustom="classCustom1" label="Small"
                   v-on:onClick="onClick"></marvel-button>
    <marvel-button ref="ref1" isLarge="false" classCustom="classCustom1" label="MouseDown"
                   v-on:onClick="onClick"></marvel-button>
    <marvel-button ref="ref2" isLarge="false" classCustom="classCustom1" label="Focus"
                   v-on:onClick="onClick"></marvel-button>
    <marvel-button ref="ref3" isLarge="false" classCustom="classCustom1" label="Disable"
                   v-on:onClick="onClick"></marvel-button>
  </div>
</template>

<script>
  import MarvelButton from "@/walle/widget/button/MarvelButton";

  export default {
    name: 'page4Button',
    components: { MarvelButton},
    data: function() {
      return {

      }
    },
    mounted: function(){
      this.$refs.ref1.setBtnMouseDown(true);
      this.$refs.ref2.setBtnFocus(true);
      this.$refs.ref3.setBtnDisable(true);
    },
    methods: {
      onClick : function(){
        alert(1);
      }
    }
  }
</script>

<style>
  .classCustom1{
    margin-right: 20px;
  }
</style>
