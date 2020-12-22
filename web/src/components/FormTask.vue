<template>
    <div>
        <div class="row mt-3 d-flex justify-content-center">
            <div class="col-4 border rounded">
                <div 
                    class="alert alert-success mt-3"
                    v-if="response.status">{{response.message}}</div>
                <h3 class="mt-3">Cadastre suas Tarefa</h3>
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
                            @click.prevent="saveTask(task)"
                            v-if="!showButton">Confirmar</button>
                        
                        <button 
                            class="btn btn-primary"
                            @click.prevent="updateTask(task)"
                            v-if="showButton">Atualizar</button>

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
            },
            response: {
                message: String,
                status: false
            },
            showButton: false
        }
    },

    created: function() {
        const thisVue = this;

        thisVue.showButton = false;

        EventBus.$on('editTask', function(task) {
            thisVue.task = task;
            thisVue.showButton = true;
        })
    },

    methods: {
        saveTask(task) {
            const thisVue = this;

            axios.post('http://127.0.0.1:8000/tasks/create', task)
                .then((response) => {
                    thisVue.response.message = response.data.message;
                    thisVue.response.status = true;
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        updateTask(task) {
            const thisVue = this;
            
            axios.put(`http://localhost:8000/tasks/update/${task.id}`, task)
                .then((response) => {
                    thisVue.response.message = response.data.message;
                    thisVue.response.status = true;
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        cancelRegister() {
            EventBus.$emit('cancelRegister');
            
            this.showButton = false;
            this.task = {};
        }
    }
}
</script>

