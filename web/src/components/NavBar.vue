<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">

                <router-link to="/">
                    <button class="btn btn-lg">
                        <font-awesome-icon icon="list" /> MyTasks
                    </button>
                </router-link>

                <div class="btn-group dropleft">
                    <button 
                        type="button" 
                        class="btn mr-3"
                        id="menuDropDown"
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        <font-awesome-icon icon="user-circle" size="2x"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="menuDropDown">
                        <router-link to="/complete-task" class="dropdown-item">Tarefas Concluidas</router-link>
                    </div>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>

export default {
}
</script>

<style>
    .btn:focus {
        box-shadow: none !important;
    }   
</style>
