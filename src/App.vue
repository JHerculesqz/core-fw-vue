<template>
  <div id="app">
    <div class="header">
      <ul>
        <li>
          <router-link to="/">Page1</router-link>
        </li>
        <li>
          <router-link to="/page2">Page2</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body {

  }
  .header{

  }
  .content{

  }
  .footer{

  }
</style>
