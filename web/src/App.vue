<template>
  <div id="app">
    <nav-bar></nav-bar>
    <card-task v-if="isVisible"></card-task>
    <form-task v-if="!isVisible"></form-task>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import CardTask from './components/CardTask';
import FormTask from './components/FormTask';
import EventBus from './event-bus';

export default {
  name: 'App',
  components: {
    NavBar,
    CardTask,
    FormTask
  },

  data() {
    return {
      isVisible: true
    }
  },

  created: function() {
    const thisVue = this;
    
    EventBus.$on('showForm', function() {
      thisVue.isVisible = false;
    });

    EventBus.$on('cancelRegister', function() {
      thisVue.isVisible = true
    })

  }
}
</script>

<style>

</style>
