<template>
  <div id="app">
    <NavBar></NavBar>
    <FormTask></FormTask>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import FormTask from './components/FormTask';

export default {
  name: 'App',
  components: {
    NavBar,
    FormTask
  }
}
</script>

<style>

</style>
