<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import './assets/js/dom'
export default {
  name: 'App'
}
</script>

<style>
  body{margin: 0;padding: 0;}
  #app {
    font-family: 'Avenir,微软雅黑', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 h1,h2,h3,h4,h5,h6,ul,li,dl,dt,dd,ol,p,span{list-style: none;margin: 0;padding: 0;}
  a:hover{text-decoration: none}
  a:active{text-decoration: none}
  a:link{text-decoration: none}
</style>
