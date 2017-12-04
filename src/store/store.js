import Vue from 'vue';
import Vuex from 'vuex';
//import Direct from '/Applications/MAMP/htdocs/vueprincipal/src/js/direct/direct.js'

Vue.use(Vuex)

export const store = new Vuex.Store({


    strict: true,
    state:{
        user: [],
    },
    getters: {
        getUser: state => {
            return state.user;
        },
    },
    mutations:{
        guardarUser: (state, datos) =>{
            state.user=datos;
        },
    },
    actions:{
        guardarUser: (context,datos) =>{
              context.commit('guardarUser', datos)
        
      }, 
    }
})