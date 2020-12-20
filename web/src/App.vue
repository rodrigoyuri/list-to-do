<template>
  <div id="app">
    <FormTask></FormTask>
  </div>
</template>

<script>
import FormTask from './components/FormTask'

export default {
  name: 'App',
  components: {
    FormTask
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
