<template>
    <div class="complete">
        <card-task 
            title="Tarefas Concluidas" 
            :headerCard="{
                headerText: 'Removar tarefa',
                styleButton: 'danger'
            }"
            :showButtos=false
            icon="times"></card-task>
    </div>
</template>

<script>
import CardTask from '../components/CardTask.vue'

export default {
    name: 'Complete',
    components: {
        CardTask
    }    
}
</script>