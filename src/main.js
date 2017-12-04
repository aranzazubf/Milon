import Vue from 'vue'
import App from './App.vue'
import coach from './bot/coach.vue'
import puzzle from './puzzle/puzzle.vue'
import BootstrapVue from 'bootstrap-vue'
import HelloWorld from './components/HelloWorld.vue'
import PaginaFinal from './components/PaginaFinal.vue'
import VueRouter from 'vue-router';
import consejos from './consejos/consejos.vue';
import gif from './components/gif.vue'
import paginaPrincipal from './bot/paginaPrincipal.vue';
import hangout from './components/hangout.vue'
import { store } from './store/store';


const routes = [
  { path: '/', component: paginaPrincipal },
  { path: '/puzzle', component: puzzle },
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/PaginaFinal', component: PaginaFinal },
  { path: '/consejos', component: consejos },
  { path: '/gif', component: gif},
  { path: '/paginaPrincipal', component: paginaPrincipal },
  { path: '/hangout', component: hangout },
];

Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link

const router = new VueRouter({
  routes,
});

Vue.use(BootstrapVue);

new Vue({
  store:store,
  el: '#app',
  router,
  components: { coach, puzzle }

});

/**Como no es lo mismo contarlo que vivirlo.... ¡¡¡Esto son 21 segundos con los KIKEBOTS!!! @Talentum @fund_adecco @ericsson #equipo3 #Talentum #kikebots */