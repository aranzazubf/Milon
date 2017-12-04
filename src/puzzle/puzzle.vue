<template>
<div>
  <gif></gif>
 <div id="puzzle" class="col-md-12" style="display:none">
 
     <div class="row">
       <div class="col-md-4 coachSay">

     
    

       <coachSay></coachSay>

    

     
     
</div>
     <div class="col-md-5 cv-orden">
    <div class="container">
      <transition-group name="fade" class="container-items"tag="div"  id="groupItems"v-dragula="items" drake="items">
   
        <div class="item" v-for="(item, index) in items" :key="item" :style="item.style"><b>{{item.text}}</b> </br> {{item.titulo}}</div> 
      </transition-group>

    <div>
     
    </div>
    </div>
    </div>
    <div class="col-md-3 cv-desorden">
    <div class="container">
        
    
     <button class="btn-round button-puzzle" id="btnPuzzle" @click="next" style="display:inherit" v-bind="value">{{value}}</button>
    <router-link class="button btn-round button-puzzle" id="linkPuzzle" v-bind="value" style="display:none"  to="/HelloWorld">{{value}}</router-link>

    </div>
    </div>
   </div>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </div>
 </div>
</template>
<script>
import gif from '../components/gif.vue';
import Vue from 'vue'
import { Vue2Dragula } from 'vue2-dragula';
import coachSay from '../puzzle/coachSay.vue';
import _ from 'lodash';
 import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
Vue.use( Vue2Dragula );

export default {
 computed: {
        user(){
            
            return this.$store.state.user;
        },

        ...mapGetters([
            'getUser'
        ])
    },
name: 'puzzle',
components:{coachSay, gif},
data(){
return {
  nombre:"Nombre",
  edad:"Edad",
  lugar:"",
  profesion:"",
  estudios:"",
  experiencia:"",
  datosCV:"",
   value:"REVISA MI CV",
  image1:'../assets/puzzle_fondo1.png',
ordenados:['Nombre', 'Sobre mi', 'Experiencia', 'Estudios', 'Aptitudes'],
     items: [
       {
         titulo: "Edad",
         text:"Nombre",
       style:"background: url(src/assets/foto.png); background-repeat: no-repeat;height: 175px;    font-size: 35px; font-weight: bold;padding-left: 24%; "},
         { titulo:'',
           text:'Sobre mi',
       style:"background:white"},
         {
            titulo:'',
           text:'Experiencia',
       style:"background:white"},
         {
            titulo:'',
           text:'Estudios',
       style:"background:white"},
         {
            titulo:'',
           text:'Aptitudes',
       style:"background:white"},
     ],
     
elements:"",
respuestas:[
"Tu foto y tu nombre deberían ser lo primero que conozcan de ti",
"Tu información personal es algo muy importante, debería ser el segundo elemento",
"La información sobre tu experiencia debería ir en tercer lugar",
 "¿No crees que tus estudios deberían ir antes que tus aptitudes?",
 "Y por último tus aptitudes pueden marcar la diferencia. ¡Buen trabajo!",
 
],
}

},
mounted(){
  this.recogeDatos();
  setTimeout(this.gifhidden, 5000);
 var el=document.getElementById("groupItems");


},
  
  created() {
  
    const $service = this.$dragula.$service
    $service.options('left', {direction: 'horizontal'})
    $service.eventBus.$on('drag', (args) => this.drag(args))
    $service.eventBus.$on('drop', (args) => this.drop(args))
    this.shuffle();
  },
  methods: {
recogeDatos:function(){
console.log(this.user);
console.log(this.user.name);
if(this.user.name!==null)this.nombre=this.user.name;
if(this.user.edad!==null)this.edad=this.user.edad;
if(this.user.lugarHabita!==null)this.lugar=this.user.lugarHabita;
if(this.user.profesion!==null)this.profesion=this.user.profesion;
if(this.user.estudios!==null)this.estudios=this.user.estudios;
if(this.user.experiencia!==null)this.experiencia=this.user.experiencia;


},
    gifhidden:function(){
      var gif=document.getElementById("gif");
      gif.style.display="none";
      var puzzle=document.getElementById("puzzle");
      puzzle.style.display="inherit";
    },
    
    shuffle: function() {
      console.log("SHUFFLE"); 
      this.items = _.shuffle(this.items)
     this.elements=this.items;
      console.log(this.items);
    },
    drag:function(args){

    },
    drop:function(args){
      
    this.elements=this._data.items; 
    console.log(this.elements);
       },
    next:function(){
      
      var out=document.getElementById("auraMessage");
      out.style.display="inherit";
      if(this.elements==undefined)this.elements=this.items;
      console.log(this.elements);
      console.log(this.items);
    console.log(out);
      if((this.elements[0].text)!=this.ordenados[0]){
        artyom.say(this.respuestas[0]);
        out.value=this.respuestas[0];
     
        return;
      }
      if((this.elements[1].text)!=this.ordenados[1]){
         artyom.say(this.respuestas[1]);
        out.value=this.respuestas[1];

      
        return;
      }
      if((this.elements[2].text)!=this.ordenados[2]){
        artyom.say(this.respuestas[2]);
        out.value=this.respuestas[2];

        return;
      }
      if((this.elements[3].text)!=this.ordenados[3]){
        
        artyom.say(this.respuestas[3]);
        out.value=this.respuestas[3];

       
        return;
      }
       if((this.elements[4].text)!=this.ordenados[4]){
       
        return;
      }
       artyom.say(this.respuestas[4]);
        out.value=this.respuestas[4];

     document.getElementById("btnPuzzle").style.display="none";
     document.getElementById("linkPuzzle").style.display="inherit";
    this.value="SIGUIENTE";
    }
  }


}

</script>
<style>
html, body {
   color: black;
    font-size: 20px;
    font-family: monospace;
    font-weight: 400;
  
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#007486', endColorstr='#00c6da',GradientType=1 );
  background-attachment: fixed;
  font-family: Telefonica-Regular, Helvetica, Arial, sans-serif; }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

 }
 #groupItems{

   font-family: futura;
 }
#puzzle{
  background: url("../assets/fondo3.jpg");}
.gu-mirror {
  position: absolute;
  pointer-events: none;
  transition: all 0s !important;
}
.coachSay{
      margin-top: 50%;
    margin-left: 0%;
}
#coachSay{

      margin-left: 30%;
}
.container-items{

}
a:hover{
      color: white;
    background: #21374b;
}
.item {
 font-size: larger;
    /* border: blanchedalmond; */
 border-style: dashed;
  
        border-width: 2px;
border-width: 2px;
   
  margin:80px;
  display:auto;
  min-width: 30px;
  height: 100px;
  padding: 5px;
  cursor: move;
  background: white;
  transition: all 1s;
  text-align: initial;
}
.left {
border:none;
  width: 250px;
    margin: 50px;
    margin-left: auto;
}
.cv-orden {
    padding: 10px;

}
button:hover{
  color: white;
    background: #21374b;

}
.button-puzzle{
      width: 67%;
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
.cv-desorden{
margin-top: 50%;

}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-active {
  position: absolute;
}
.fondo-puzzle {


}

</style>