<template>
    <div class="complete">
        <card-task 
            title="Tarefas Concluidas" 
            :headerCard="{
                headerText: ['Desmarcar como concluida', 'Remover Tarefa'],
                showRemove: true
            }"
            :showCards="false"
            :showButtos="false"
            :statusTask="false"></card-task>
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