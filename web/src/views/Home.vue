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
      :headerCard="{
        headerText: ['Marcar com concluida'],
        showRemove: false
      }"
    />

  </div>
</template>

<script>
// @ is an alias to /src
import CardTask from '@/components/CardTask'

export default {
  name: 'Home',
  components: {
    CardTask,
  },
}
</script>
