<template>
    <div>
        <div class="row mt-3 d-flex justify-content-center">
            
            <div class="col-4 border rounded">
                <h3>Cadastre suas Tarefa</h3>
                <form enctype="multipart/form-data">
                    <div class="mb-3">
                        <label 
                            for="name" 
                            class="form-label">Nome da Tarefa</label>
                        <input 
                            type="text" 
                            class="form-control i" 
                            id="name"
                            v-model="task.name">
                    </div>

                    <div class="mb-3">
                        <label 
                            for="description" 
                            class="form-label">Descrição</label>
                        <input 
                            type="text" 
                            class="form-control i" 
                            id="description"
                            v-model="task.description">
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                        <button 
                            class="btn btn-success"
                            @click.prevent="saveTask(task)">Confirmar</button>
                        <button 
                            class="btn btn-danger"
                            @click.prevent="cancelRegister()">Cancelar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '../event-bus';
import axios from 'axios';

export default {
    data() {
        return {
            task: {
                name: '',
                description: '',
                status: false
            }
        }
    },

    methods: {
        saveTask(task) {
            axios.post('http://127.0.0.1:8000/tasks/create', task)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        cancelRegister() {
            EventBus.$emit('cancelRegister');
        }
    }
}
</script>

