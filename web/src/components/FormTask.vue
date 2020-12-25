<template>
    <div>
        <div class="row mt-3 d-flex justify-content-center">
            <div class="col-4 border rounded">
                <h2>{{title}}</h2>
                <div 
                    class="alert alert-success mt-3"
                    v-if="response.status">{{response.message}}</div>
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
import axios from 'axios';

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        taskEdit: {
            type: Object,
        },
    },

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
        if(this.$route.query.task) {
            this.task = this.$route.query.task
        }
        
    },

    methods: {
        saveTask(task) {
            const thisVue = this;

            axios.post('http://127.0.0.1:8000/tasks/create', task)
                .then((response) => {
                    thisVue.alertMessage(response);

                    thisVue.resetForm();
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        updateTask(task) {
            const thisVue = this;

            axios.put(`http://localhost:8000/tasks/update/${task.id}`, task)
                .then(() => {
                    thisVue.cancelRegister();
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        alertMessage(response) {
            this.response.message = response.data.message;
            this.response.status = true;
        },

        cancelRegister() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        },

        resetForm() {
            this.showButton = false;
            this.task.name = '';
            this.task.description = '';
            this.task.status = false;
        }
    }
}
</script>

