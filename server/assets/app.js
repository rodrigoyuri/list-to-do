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
            }          
        }
    },

    methods: {
        saveTask(task) {
            const vueThis = this;
            axios.post('/tasks/create', { task })
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
            this.task = {};
        }
    },

    delimiters: ['${', '}$']
});

Vue.component('card-task', {
    data() {
        return {
            name: 'Tarefa 1',
            description: 'Tarefa 1 concluir até semana que vem.'
        }
    },
    template: '#cardTask',
    delimiters: ['${', '}$']
});


const app = new Vue({
    el: '#app',

    delimiters: ['${', '}$'],
});

// start the Stimulus application
import './bootstrap';
