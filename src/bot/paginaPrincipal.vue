<template>
    <div id="fondo" class="col-md-12 fondo-principal">
    
        <h1>
        {{this.getUser.final}}
        </h1>
        <div class="col-md-5 conv-principal">
        <outputAura class="out-principal" ></outputAura>
        <inputUser  class="input-principal"hidden=true></inputUser>
        <router-link class="button btn-round button-puzzle" id="linkPuzzle"  style="display:inherit"  to="/puzzle">CV</router-link>

        <artyom v-on:says="says"> </artyom>   
        </div>

    </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
  import artyom from './artyom.vue';
  import outputAura from './outputAura.vue';
  import inputUser from './inputUser.vue';
  export default {

    computed: {
        user(){
            
            return this.$store.state.user;
        },

        ...mapGetters([
            'getUser'
        ])
    },


    name: 'coach',
    components: {
      'artyom': artyom,
      'inputUser':inputUser,
      'outputAura':outputAura
    },
      methods:{
        //   muestraBoton:function(){
     
        //     var el=document.getElementById("inputUser");
        //     el.style.display="none";
        //     console.log(el);
        //     var cv=document.getElementById("linkPuzzle");
        //     cv.style.display="inherit";
        //     console.log(cv);

        //   },
says:function(){
   
  

    
  this.$emit("conectaDirect");
}
   

   },
    mounted( ) {
      this.$emit("speak");
      }
    
  }


  
</script>
<style>
.conv-principal{
     margin-left: 43%;
    padding-top: 17%;
    font-size: larger;
    font-family: futura;
}
.out-principal{

       font-size: xx-large;
       background: white;
}
.input-principal{
margin-top: 10%;
    font-size: larger;
    font-family: 'futura', medium;
}
.fondo-principal{
   
    background: url("/src/assets/pantallaPrincipal.jpg");
  height: 100vh;
}
button:hover{
  color: white;
    background: #21374b;

}
.button-puzzle{
        width: 10%;
       display: inherit;
    background: white;
    color: black;
    font-size: xx-large;
    font-weight: bolder;
    margin: inherit;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 17px;
    font-family: futura;

}
</style>