<template>
    <div class="create">
        <form-task title="Cadastrar Tarefa"></form-task>
    </div>
</template>

<script>
import FormTask from '../components/FormTask.vue'

export default {
    name: 'create',
    components: {
        FormTask 
    }    
}
</script>