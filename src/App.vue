<template>
  <div id="app">
    <img src="./assets/DS_icon.svg" style="width: 100px">
    <HelloWorld/>
    <GridContainer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GridContainer from './components/GridContainer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GridContainer
  }
}
</script>

<style>
body{
  overflow: hidden;
  background-color: black;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000;
  font-size: 20px;
  margin-top: 60px;
}
</style>
