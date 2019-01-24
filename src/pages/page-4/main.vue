<template>
  <div id="page1">
    <img src="../../assets/logo.png">
    <h1>我是页面4</h1>
    <a href="./page1.html">第一个页面</a>
    <a href="./page2.html">第二个页面</a>
    <a href="./page3.html">第三个页面</a>
    <a href="./page4.html">第四个页面</a>
    <a href="./page5.html">第五个页面</a>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Page-4'
  }
</script>

<style>
  #page1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
