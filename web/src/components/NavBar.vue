<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" v-for="title in titles" :key="title.name">
                <img :src="title.uriLogo" alt="" width="30" height="24" class="d-inline-block align-top">
                {{title.name}}
                </a>
            </div>
        </nav>
        <div class="d-flex justify-content-end mr-3 mt-3">
            <button 
                class="btn btn-outline-success btn-lg"
                v-if="showButtonAdd"
                @click.prevent="showForm()"><font-awesome-icon icon="plus" /></button>
        </div>
    </div>
</template>

<script>

import EventBus from '../event-bus';

export default {
    data() {
        return {
            titles: [
                {
                    name: 'Symfony', 
                    uriLogo: 'https://symfony.com/logos/symfony_black_03.png'
                },
                {
                    name: 'Vuejs', 
                    uriLogo: 'https://vuejs.org/images/logo.png'
                },
            ],
            showButtonAdd: true
        }
    },

    created: function() {
        const thisVue = this;

        EventBus.$on('cancelRegister', function() {
            thisVue.showButtonAdd = true;
        })
    },

    methods: {
        showForm() {
            this.showButtonAdd = false;
            EventBus.$emit('showForm');
        }
    }
}
</script>

<style>
    img {
        height: 35px;
        width: 35px;
    }
</style>