<template>
  <div class="home">
    <NuevoPaciente/>
    <ListaPacientes/>
  </div>
</template>

<script>
import Firebase from 'firebase';
import NuevoPaciente from '../components/NuevoPaciente.vue';
import ListaPacientes from '../components/ListaPacientes.vue';

export default {
  name: 'Home',
  components: {
    NuevoPaciente,
    ListaPacientes
  },
  data: ()=> ({
    pacientes: []
  }),
  /* mounted () {
    Firebase
      .firestore()
      .collection("pacientes")
      .get()
      .then(collection => {
        collection.forEach(document => {
          this.pacientes.push({id: document.id, ...document.data() })
      })
    });
    Firebase
      .firestore()
      .collection("pacientes")
      .onSnapshot((querySnapchot) => {
        this.pacientes = [];
        querySnapchot.forEach(document => {
          this.pacientes.push({id: document.id, ...document.data() })
        })
      });
  } */
}
</script>
