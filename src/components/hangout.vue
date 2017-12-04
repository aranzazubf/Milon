<template>
    <div id="fondo" class="col-md-12 fondo-principal">
    
        <h1>
        {{this.getUser.final}}
        </h1>
        <div class="col-md-5 conv-principal">
        <!-- <outputAura class="out-principal"></outputAura> -->
        <!-- <router-link class="button btn-round button-puzzle" id="linkPuzzle"  style="display:inherit"  to="/puzzle">EMPEZAR</router-link> -->
 <div class="g-hangout" 
 style="MARGIN-TOP: 52%; margin-left: 57%; background:white;"
  data-render="createhangout" data-widget_size="200" data-invites="[{id:'isabelsimonguerrero@gmail.com',invite_type:'EMAIL'}]"></div>
        <artyom v-on:says="says"> </artyom>   
        </div>

    </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
  import artyom from '../bot/artyom.vue';
  import outputAura from '../bot/outputAura.vue';
  import inputUser from '../bot/inputUser.vue';
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
.g-hangout{
   
}
.conv-principal{
    margin-left: 66%;
    padding-top: 38%;
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
   
    background: url("/src/assets/hangout.jpg");
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