<template>
  <div id="page1">
    Page1
    <module1></module1>
    <module2></module2>
  </div>
</template>

<script>
  import Module1 from './Module1.vue'
  import Module2 from './Module2.vue'
  export default {
    name: 'page1',
    components: {Module1, Module2}
  }
</script>

<style>

</style>
