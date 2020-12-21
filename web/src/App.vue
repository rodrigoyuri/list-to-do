<template>
  <div id="app">
    <nav-bar></nav-bar>
    <card-task></card-task>
    <form-task></form-task>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import CardTask from './components/CardTask';
import FormTask from './components/FormTask';

export default {
  name: 'App',
  components: {
    NavBar,
    CardTask,
    FormTask
  }
}
</script>

<style>

</style>
