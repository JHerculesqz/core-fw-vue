<template>
  <div id="app">
    <div class="header">
      header
      <!--<ul>-->
        <!--<li>-->
          <!--<router-link to="/">Page1</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/page2">Page2</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
    <div class="content">
      content
      <!--<router-view></router-view>-->
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body {
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #app {
    height:100%;
  }
  .header{
    height: 40px;
    background-color: #212121;
  }
  .content{
    height: calc(100% - 100px);
  }
  .footer{
    height: 60px;
    background-color: #e8e8e8
  }
</style>
