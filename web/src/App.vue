<template>
  <div id="app">
    <nav-bar></nav-bar>
    <card-task></card-task>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import CardTask from './components/CardTask'

export default {
  name: 'App',
  components: {
    NavBar,
    CardTask
  }
}
</script>

<style>

</style>
