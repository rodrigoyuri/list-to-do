<template>
  <div class="home">
    <card-task
      title="Tarefas Restantes"
      icon="check"
      :headerCard="{
        headerText: 'Marcar com concluida',
        styleButton: 'success',
      }"
      v-if="isVisible"
    />
    <form-task v-if="!isVisible" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardTask from '@/components/CardTask'
import FormTask from '@/components/FormTask';
import EventBus from '@/event-bus';



export default {
  name: 'Home',
  components: {
    CardTask,
    FormTask
  },

  data()
    {
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
      thisVue.isVisible = true;
    })

    EventBus.$on('editTask', function() {
      thisVue.isVisible = false;
    })
  }
}
</script>
