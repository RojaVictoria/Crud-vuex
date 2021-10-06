<template>
    <div>
        <table class="table">
            <thead>
                <th>Nombre</th>
                <th>Previsión</th>
                <th>Edad</th>
                <th>Operación</th>
            </thead>
            <tr v-for="paciente in $store.state.pacientes" :key="paciente.id">
                <td>{{ paciente.nombre }} {{ paciente.apellido }}</td>
                <td>{{ paciente.prevision }}</td>
                <td>{{ paciente.edad }}</td>
                <td>
                    <button class="btn btn-primary mr-1">Editar</button>
                    <button @click="$store.dispatch('borrarPaciente', paciente.id)" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
  },
  mounted() {
    this.$store.dispatch('buscarTodosLosPacientes');
  }
}
</script>

<style>

</style>