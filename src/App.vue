<template>
  <div id="app">
    <div class="header">
      <ul>
        <li>
          <router-link to="/" exact>设备监控</router-link>
        </li>
        <li>
          <router-link to="/page4/page43" exact>商业洞察</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
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
  height: 50px;
  background-color: #181b21;
}
.header .logo{
  width: 280px;
  height: 100%;
  float: left;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
}
.header ul{
  margin: 0;
  padding: 0
}
.header ul li{
  float: left;
  margin-right: 15px;
  margin-top: 0;
  list-style-type: none
}
.header ul li a{
  line-height: 50px;
  color: #ffffff;
  font-size: 16px;
  padding: 0 10px;
  text-decoration: none;
}
.header ul li .active{
  color:#00a0e9;
}
.content{
  height: calc(100% - 50px);
  position: relative;
}
.footer{
  height: 0px;
  background-color: #e8e8e8
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(-430px);
  opacity: 0;
}
</style>
