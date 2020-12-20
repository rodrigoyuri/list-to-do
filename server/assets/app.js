/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import Vue from 'vue';
import axios from 'axios'

Vue.component('nav-bar', {
    template: '#navBar'
})

Vue.component('form-task', {
    template: '#formTask',

    data() {
        return {
            task: {
                name: '',
                description: '',
                status: false
            },
            success: {
                status: false,
                message: ''
            },
            isEdit: false
        }
    },

    created() {
        const thisVue = this;

        eventBus.$on('editTask', function(task) {
            thisVue.task = task;
            thisVue.isEdit = true;
        });

        eventBus.$on('removeTask', function(response) {
            thisVue.success.status = true;
            thisVue.success.message = response.data.message;
        });
    },

    methods: {
        saveTask(task) {
            const vueThis = this;
            axios.post('/tasks/create', { task })
                .then(function(response) {
                    vueThis.success.status = true;
                    vueThis.success.message = response.data.message;

                    vueThis.resetForm();

                    eventBus.$emit('saveTask');
                })
                .catch(function(error) {
                    console.log(error);
                })
        },

        updateTask(task) {
            const vueThis = this;
            axios.put(`/tasks/update/${task.id}`, {task})
                .then(function(response) {
                    vueThis.success.status = true;
                    vueThis.success.message = response.data.message;

                    vueThis.resetForm();
                })
                .catch(function(error) {
                    console.log(error);
                })
        },

        resetForm() {
            this.isEdit = false;
            this.task = {};
        }
    },

    delimiters: ['${', '}$']
});

Vue.component('card-task', {
    template: '#cardTask',

    data() {
        return {
           tasks: [
               {name: ''},
               {description: ''}
           ]
        }
    },

    created: function() {
        const thisVue = this;
        
        thisVue.getTasks();

        eventBus.$on('saveTask', function() {
            thisVue.getTasks();
        });
    },

    methods: {
        editTask(task) {
            eventBus.$emit('editTask', task);
        },

        removeTask(taskId) {
            const thisVue = this;

            axios.delete(`/tasks/delete/${taskId}`)
                .then(function(response) {
                    eventBus.$emit('removeTask', response);
                    
                    thisVue.getTasks();
                })
                .catch(function(error) {
                    console.log(error);
                })
        },

        getTasks() {
            const thisVue = this;

            axios.get('/tasks/index')
                .then(function(response) {
                    thisVue.tasks = response.data.tasks;
                })
                .catch(function(error) {
                    console.log(`Erro ${error}`);
                })
        }
    },

    delimiters: ['${', '}$']
});

const eventBus = new Vue();

const app = new Vue({
    el: '#app',

    delimiters: ['${', '}$'],
});

// start the Stimulus application
import './bootstrap';
