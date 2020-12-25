<template>
    <div class="edit">
        <form-task title="Editar Tarefa"></form-task>
    </div>
</template>

<script>
import FormTask from '../components/FormTask.vue';

export default {
    name: 'Edit',
    components: {
        FormTask
    },
}
</script>