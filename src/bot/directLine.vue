<template>
<div id="directLine"></div>

</template>
<script>

 import {mapActions} from 'vuex';
 import {mapGetters} from 'vuex';
import { DirectLine } from 'botframework-directlinejs';

export default {

name:'directLine',

data() {
     return {
         directLine:"",
      
    }},
    
    methods:{
...mapActions([
          'guardarUser'
      ]),

postButtonMessage:function (name) {
    this.directLine
        .postActivity({type: "event", value: "", from: {id: "me" }, name: name})
        .subscribe(console.log("Post hecho"));
        return this.tratarEvento(Activity);
    },
  response:function(activity){
     console.log("sssss", activity.text);
     console.log(activity.from.id);
     console.log(artyom);
     artyom.say(activity.text);
    //Aura responde al usuario
    document.getElementById("auraMessage").value=activity.text;
    console.log("Esto es lo que mete activity.tezt" + document.getElementById("auraMessage").value);
    //Input usuario vacío
   
    document.getElementById("userMsg").value="";
    // this.$emit('recBot',activity.text);
 },
tratarEvento:function(activity){
     var resultado = JSON.stringify(activity.value);
     console.log("Resultado" + JSON.parse(resultado).final);
      this.guardarUser(JSON.parse(resultado));
    // this.$emit('DatosCV',resultado);
   // document.getElementById("valorPantalla").value= (JSON.parse(activity.value)).Value;
  
 // this.cambiarPagina(pagina);

 },
 mandar_mensaje:function (mensaje){
     console.log("mandar mensaje");
    this.directLine.postActivity({
    from: { id: 'myUserHosnia', name: 'Hosnia' }, // required (from.name is optional)
    type: 'message',
    text: mensaje}).subscribe();
 }


    },

mounted(){
    
     //Conectamos con el bot.
this.directLine = new DirectLine({
    /*kikebot*/
  //  secret: 'gYj8SVurWjQ.cwA.VLI.DPr67gZr7YzC6vZNT2BRdpqQQkc4Y0TtLs0LcfLwDKU'/* put your Direct Line secret here */
 /*botarua*/
 //secret: 'rNNz5UxSoxA.cwA.wW0.uZ34_4ZKxL045PAouULD32ip1sAaQT9A0Ply8AgHQPU'/* put your Direct Line secret here */
 secret: 'f_VQkNkZk-k.cwA.Ru0.A5VqmVrmUHcxYt_g78uOzfvt0KOZszQkt_Mf7YZvMCU'
 });


this.directLine.postActivity({
    from: { id: 'myUserId', name: 'myUserName' }, // required (from.name is optional)
    type: 'conversationUpdate',
    text: 'a message for you, Rudy'
}).subscribe(
    id => console.log("Posted activity, assigned ID ", id),
    error => console.log("Error posting activity", error)
);


 this.directLine.activity$
 .filter(activity => activity.type==="message" && activity.from.id === "hackaBotu")
 .subscribe(
     
    activity => this.response(activity)
 );
  //Nos suscribimos a las actividades y las sacamos por el output.
 //Aqui deberemos distinguir que sea un mensaje de aura.
 
 this.directLine.activity$
    .filter(activity => activity.type === "event")
    .subscribe(activity => this.tratarEvento(activity)
 );

this.$parent.$on("pulsaBoton",this.postButtonMessage);
     
//Enviamos un mensaje al bot a traves de direct line.
this.$parent.$on("mandarMensaje",this.mandar_mensaje);
    }


}

</script>





 
 
     
 
 
 
 


 

 
 
 
