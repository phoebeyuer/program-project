<template>
  <!-- <EasyScrollbar> -->
  <div id="app">
    <router-view/>
  </div>
  <!-- </EasyScrollbar> -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  /*background: #efefef;*/
  background: #fff;
}
</style>
