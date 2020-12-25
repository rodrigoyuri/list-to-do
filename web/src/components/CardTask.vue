<template>
    <div class="row d-flex justify-content-center" style="width: 100%">
        <div class="col-6">
            <h2 class="d-flex justify-content-start mb-4">{{title}}</h2>

            <div 
                class="alert alert-success" 
                v-if="response.status">{{response.message}}</div>
            <div 
                class="alert alert-warning" 
                v-if="!tasks.length">Nenhum Tarefa Encontrada.</div>
            
            <div v-if="statusRequision">
                <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
            </div>

            <div v-if="!statusRequision">
                <div class="card mb-3" v-for="(task, index) in tasks" :key="index">
                    <div class="card-header d-flex justify-content-end">
                        <div class="row">
                            <div class="d-flex align-items-center mr-3">{{headerCard.headerText}}</div> 
                            <button 
                                :class="'btn btn-outline-'+ headerCard.styleButton"
                                @click.prevent="checkTask(tasks, task)">
                                <font-awesome-icon v-bind:icon="icon" />
                            </button>
                        </div>
                    </div>
                    <div class="card-body text-justify">
                        <h5 class="card-title">{{task.name}}</h5>
                        <p class="card-text">{{task.description}}</p>

                        <div v-if="showButtos" class="d-flex justify-content-end">
                            
                            <router-link :to="{name: 'EditTask', query:{task: task, showButton: true}}">
                                <button 
                                    class="btn btn-primary mr-3"
                                >
                                    Editar 
                                    <font-awesome-icon icon="edit" />
                                </button>
                            </router-link>

                            <button 
                                class="btn btn-danger"
                                @click.prevent="removeTask(tasks, task.id)"
                                >Excluir <font-awesome-icon icon="trash" /></button>
                        </div>

                    </div>
                </div>
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
        icon: {
            type: String,
            default: ''
        },
        check: {
            type: String,
            default: ''
        },
        headerCard:{
            headerText: {
                type: String,
                default: ''
            },
            styleButton: {
                type: String,
                default: ''
            }
        },
        showCards: {
            type: Boolean,
            default: true
        },
        showButtos: {
            type: Boolean,
            default: true
        }
        
    },

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
            },
            statusRequision: false,
        }
    },

    created: function() {
        this.getTasks();
    },

    methods: {
        getTasks() {
            const thisVue = this;

            thisVue.statusRequision = true;

            axios.get('http://localhost:8000/tasks/index')
            .then((response) => {
                if(response.data) {
                    this.tasks = response.data.tasks.filter(function(el) {
                        return el.status != thisVue.showCards;
                    });

                    this.statusRequision = false;
                }
                
                this.statusRequision = false;
            })
            .catch((error) => {
                console.log(error)
            })
        },

        removeTask(tasks, taskId) { 
            this.filterTasks(tasks, taskId);

            axios.delete(`http://localhost:8000/tasks/delete/${taskId}`)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        checkTask(tasks,task) {
            this.filterTasks(tasks, task.id);

            task.status = true;
            
            axios.put(`http://localhost:8000/tasks/update/${task.id}`, task)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        filterTasks(tasks, conditional) {
            if(typeof conditional === 'number') {
                this.tasks = tasks.filter(function(el) {
                    return el.id != conditional;
                })
            } else if(typeof conditional === 'boolean') {
                this.tasks = tasks.filter(function(el) {
                    return el.id != conditional;
                })
            }

            return;
        }
    }
}
</script>