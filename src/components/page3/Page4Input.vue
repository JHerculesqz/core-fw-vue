<template>
  <div>
    <div style="width:200px;">
      <button v-on:click="onClick4Input1">获取</button>
      <marvel-input ref="ref0" :status="status1" placeHolder="please..." errMsg="输入错误..."
                    :inputMsg = "inputMsg"></marvel-input>
    </div>
    <div style="width:200px;">
      <button v-on:click="onClick4Input2">触发错误</button>
      <marvel-input :status="status2" placeHolder="please..." errMsg="输入错误..."></marvel-input>
    </div>
    <div style="width:200px;">
      <button v-on:click="onClick4Input3">disable</button>
      <marvel-input :status="status3" placeHolder="please..." errMsg="输入错误..."></marvel-input>
    </div>
  </div>
</template>

<script>
  import MarvelInput from "@/walle/widget/input/MarvelInput";

  export default {
    name: 'page4Input',
    components: {
      MarvelInput},
    data: function() {
      return {
        inputMsg: "",
        status1: "",
        status2: "",
        status3: ""
      }
    },
    methods: {
      onClick4Input1: function(){
        console.log(this.$refs.ref0.getInputMsg());
      },
      onClick4Input2: function(){
        this.status2 = "error";
      },
      onClick4Input3: function(){
        this.status3 = "disable";
      }
    }
  }
</script>

<style>

</style>
