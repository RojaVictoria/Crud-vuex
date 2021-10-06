import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pacientes: [],
  },
  mutations: {
    BUSCAR_PACIENTES(state, nuevosPacientes) {
      state.pacientes = nuevosPacientes
    },
    BORRAR_PACIENTE(state, pacienteBorrado) {
      state.pacientes.splice(pacienteBorrado, 1)
    },
    AGREGAR_PACIENTE(state, nuevoPaciente) {
      state.pacientes.push(nuevoPaciente)
    },
  },
  actions: {
    buscarTodosLosPacientes(context) {
      Firebase.firestore()
        .collection('pacientes')
        .get()
        .then((collection) => {
          const pacientes = [];
          collection.forEach((document) => {
            pacientes.push({ id: document.id, ...document.data() })
          })
          context.commit('BUSCAR_PACIENTES', pacientes)
        })
    },
    borrarPaciente(context, pacienteBorrado) {
      Firebase.firestore()
        .collection('pacientes')
        .doc(pacienteBorrado)
        .delete()
        context.commit('BORRAR_PACIENTE', pacienteBorrado)
    },
    agregarPaciente(context, paciente) {
      Firebase.firestore()
        .collection('pacientes')
        .add({
          ...paciente
        })
      context.commit('AGREGAR_PACIENTE', paciente)
    },
  },
  modules: {}
})
