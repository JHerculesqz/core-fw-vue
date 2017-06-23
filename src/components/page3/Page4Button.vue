<template>
  <div>
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
    <div>
      <marvel-primary-button isLarge="true" classCustom="classCustom1" label="Large"
                     v-on:onClick="onClick"></marvel-primary-button>
      <marvel-primary-button isLarge="false" classCustom="classCustom1" label="Small"
                     v-on:onClick="onClick"></marvel-primary-button>
      <marvel-primary-button ref="ref4" isLarge="false" classCustom="classCustom1" label="MouseDown"
                     v-on:onClick="onClick"></marvel-primary-button>
      <marvel-primary-button ref="ref5" isLarge="false" classCustom="classCustom1" label="Focus"
                     v-on:onClick="onClick"></marvel-primary-button>
      <marvel-primary-button ref="ref6" isLarge="false" classCustom="classCustom1" label="Disable"
                     v-on:onClick="onClick"></marvel-primary-button>
    </div>
    <div>
      <marvel-icon-txt-button isLarge="true" classCustom="classCustom1" label="Large"
                          icon="icon-home3"
                          v-on:onClick="onClick"></marvel-icon-txt-button>
      <marvel-icon-txt-button isLarge="false" classCustom="classCustom1" label="Small"
                          icon="icon-home3"
                          v-on:onClick="onClick"></marvel-icon-txt-button>
      <marvel-icon-txt-button ref="ref7" isLarge="false" classCustom="classCustom1" label="MouseDown"
                          icon="icon-home3"
                          v-on:onClick="onClick"></marvel-icon-txt-button>
      <marvel-icon-txt-button ref="ref8" isLarge="false" classCustom="classCustom1" label="Focus"
                          icon="icon-home3"
                          v-on:onClick="onClick"></marvel-icon-txt-button>
      <marvel-icon-txt-button ref="ref9" isLarge="false" classCustom="classCustom1" label="Disable"
                          icon="icon-home3"
                          v-on:onClick="onClick"></marvel-icon-txt-button>
    </div>
    <div>
      <marvel-icon-button classCustom="classCustom1" label="normal"
                          icon="icon-home3"
                     v-on:onClick="onClick"></marvel-icon-button>
      <marvel-icon-button ref="ref10" classCustom="classCustom1" label="mouseDown"
                          icon="icon-home3"
                     v-on:onClick="onClick"></marvel-icon-button>
      <marvel-icon-button ref="ref11" classCustom="classCustom1" label="disable"
                          icon="icon-home3"
                     v-on:onClick="onClick"></marvel-icon-button>
    </div>
    <div>
      <marvel-txt-button classCustom="classCustom1" label="normal"
                          v-on:onClick="onClick"></marvel-txt-button>
      <marvel-txt-button ref="ref12" classCustom="classCustom1" label="mouseDown"
                          v-on:onClick="onClick"></marvel-txt-button>
      <marvel-txt-button ref="ref13" classCustom="classCustom1" label="disable"
                          v-on:onClick="onClick"></marvel-txt-button>
    </div>
    <div>
      <marvel-drop-down-button ref="ref14" classCustom="classCustom1"
                         v-on:onClick="onClick"></marvel-drop-down-button>
    </div>
  </div>

</template>

<script>
  import MarvelButton from "@/walle/widget/button/MarvelButton";
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelIconButton from "@/walle/widget/button/MarvelIconButton";
  import MarvelTxtButton from "@/walle/widget/button/MarvelTxtButton";
  import MarvelDropDownButton from "@/walle/widget/button/MarvelDropDownButton";

  export default {
    name: 'page4Button',
    components: {
      MarvelDropDownButton,
      MarvelIconTxtButton,
      MarvelButton, MarvelPrimaryButton,MarvelIconButton,
      MarvelTxtButton},
    data: function() {
      return {
        items: [{
          label: "Item1",
          icon: "icon-pencil"
        }, {
          label: "Item2",
          icon: "icon-pen"
        }, {
          label: "Item3",
          icon: "icon-droplet"
        }]
      }
    },
    mounted: function(){
      this.$refs.ref1.setBtnMouseDown(true);
      this.$refs.ref2.setBtnFocus(true);
      this.$refs.ref3.setBtnDisable(true);
      this.$refs.ref4.setBtnMouseDown(true);
      this.$refs.ref5.setBtnFocus(true);
      this.$refs.ref6.setBtnDisable(true);
      this.$refs.ref7.setBtnMouseDown(true);
      this.$refs.ref8.setBtnFocus(true);
      this.$refs.ref9.setBtnDisable(true);
      this.$refs.ref10.setBtnMouseDown(true);
      this.$refs.ref11.setBtnDisable(true);
      this.$refs.ref12.setBtnMouseDown(true);
      this.$refs.ref13.setBtnDisable(true);
      this.$refs.ref14.init(this.items, "Item3");
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
