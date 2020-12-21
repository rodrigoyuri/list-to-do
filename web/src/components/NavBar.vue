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
    </div>
</template>

<script>
export default {
    data() {
        return {
            titles: [
                {
                    name: 'Symfony', 
                    uriLogo: 'https://symfony.com/logos/symfony_black_03.png'
                },
                {
                    name: 'Visualizar Tarefas', 
                    uriLogo: 'https://icon2.cleanpng.com/20171220/kfw/eye-png-5a3ab98a7ef4f8.49353656151379802652.jpg'
                },
                {
                    name: 'Cadastro de Tarefas', 
                    uriLogo: 'https://cdn.onlinewebfonts.com/svg/img_349207.png'
                },
                {
                    name: 'Vuejs', 
                    uriLogo: 'https://vuejs.org/images/logo.png'
                },
            ]
        }
    },
}
</script>

<style>
    img {
        height: 35px;
        width: 35px;
    }
</style>