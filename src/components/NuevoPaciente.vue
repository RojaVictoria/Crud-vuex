<template>
    <div>
        <form @submit.prevent="agregarNuevoPaciente" class="form-inline my-3 justify-content-center">
            <div class="form-group mx-1">
                <label for="nombre" class="mr-1 sr-only">Nombre</label>
                <input v-model="paciente.nombre" type="text" class="form-control" id="nombre" placeholder="Nombre">
            </div>
            <div class="form-group mx-1">
                <label for="apellido" class="mr-1 sr-only">Apellido</label>
                <input v-model="paciente.apellido" type="text" class="form-control" id="apellido" placeholder="Apellido">
            </div>
            <div class="form-group mx-1">
                <label for="prevision" class="mr-1 sr-only">Previsión</label>
                <input v-model="paciente.prevision" type="text" class="form-control" id="prevision" placeholder="Previsión">
            </div>
            <div class="form-group mx-1">
                <label for="edad" class="mr-1 sr-only">Edad</label>
                <input v-model="paciente.edad" type="text" class="form-control" id="edad" placeholder="Edad">
            </div>
            <button type="submit" class="btn btn-primary mx-1">Agregar</button>
            <button type="submit" class="btn btn-primary mx-1">Editar</button>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        paciente: {
            nombre: null,
            apellido: null,
            prevision: null,
            edad: null,
        }
    }),
    methods: {
        agregarNuevoPaciente() {
            this.$store.dispatch('agregarPaciente', this.paciente)
        },
    },
}
</script>

<style>

</style>