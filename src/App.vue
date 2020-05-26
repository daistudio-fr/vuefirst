<template>
  <div id="app">
    <GridContainer/>
  </div>
</template>

<script>
import GridContainer from './components/GridContainer'

export default {
  name: 'App',
  components: {
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
