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
                description: ''
            }          
        }
    },

    methods: {
        saveTask(task) {
            console.log(task);
        },

        resetForm() {
            this.task = {};
        }
    }
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
    data: {},

    methods: {
        getTasks: function () {
            axios.get('/tasks/index')
                .then(function(response) {
                    console.log(response.data.tasks)
                })
                .catch(function(error) {
                    console.log(error)
                })                                                
        }
    },


    delimiters: ['${', '}$'],
});

// start the Stimulus application
import './bootstrap';
