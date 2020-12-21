<template>
    <div>
        <div class="row mt-3 d-flex justify-content-center">
            
            <div class="col-4 border rounded">
                <h3>Cadastre suas Tarefa</h3>
                <div class="mb-3">
                    <label 
                        for="name" 
                        class="form-label">Nome da Tarefa</label>
                    <input 
                        type="text" 
                        class="form-control i" 
                        id="name">
                </div>

                <div class="mb-3">
                    <label 
                        for="description" 
                        class="form-label">Descrição</label>
                    <input 
                        type="text" 
                        class="form-control i" 
                        id="description">
                </div>

                <div class="d-flex justify-content-between mb-3">
                    <button class="btn btn-success">Confirmar</button>
                    <button 
                        class="btn btn-danger"
                        @click.prevent="cancelRegister()">Cancelar</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '../event-bus';

export default {
    methods: {
        cancelRegister() {
            EventBus.$emit('cancelRegister');
        }
    }
}
</script>

