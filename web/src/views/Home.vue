<template>
  <div class="home">
    <div class="d-flex justify-content-end mr-3 mt-3">
      <router-link to="/register-task">
        <button 
            class="btn btn-outline-success btn-lg"><font-awesome-icon icon="plus" />
        </button>
      </router-link>
      </div>
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
