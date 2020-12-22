<template>
    <div class="row d-flex justify-content-center">
        <div class="col-6">
            <div class="alert alert-success" v-if="response.status">{{response.message}}</div>
            <div class="card mb-3"  v-for="(task, index) in tasks" :key="index">
                <div class="card-header d-flex justify-content-end">
                    <div>
                        Marcar como concluida 
                        <button class="btn btn-outline-success">
                            <font-awesome-icon icon="check" />
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{task.name}}</h5>
                    <p class="card-text">{{task.description}}</p>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary mr-3">Editar <font-awesome-icon icon="edit" /></button>
                        <button 
                            class="btn btn-danger"
                            @click.prevent="removeTask(task.id)">Excluir <font-awesome-icon icon="trash" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tasks: [
                {
                    id: Number,
                    name: String,
                    description: String,
                    status: Boolean,
                }
            ],
            response: {
                message: String,
                status: false
            }
        }
    },

    created: function() {
        this.getTasks();
    },

    methods: {
        getTasks() {
            axios.get('http://localhost:8000/tasks/index')
            .then((response) => {
                this.tasks = response.data.tasks;        
            })
            .catch((error) => {
                console.log(error)
            })
        },

        removeTask(taskId) {
            const thisVue = this;

            axios.delete(`http://localhost:8000/tasks/delete/${taskId}`)
                .then((response) => {
                    thisVue.response.message = response.data.message;
                    thisVue.response.status = true;

                    thisVue.getTasks();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}
</script>