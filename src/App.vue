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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.side-fade-enter-acvite{
  transition: all .3s ease;
}
.side-fade-enter, .side-fade-leave-acvite{
  transform: translateX(-430px);
  opacity: 0;
}
</style>
