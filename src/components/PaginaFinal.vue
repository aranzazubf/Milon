<template>
<div id="consejos">
  <div>
<section class="kitty">
<div class="container-fluid">
  <h1 id="omg">
        <span class="quote">{{this.getQuote()}}</span>  
  </h1>
  <span></span>
  
</div>
</section>

</div>

<div class="text-container">
  <section id="left" class="half left">
    <h1>Me gustaría darte un último consejo...</h1>
  </section>
  <section id="right" class="half right">
    <h1>Me gustaría darte un último consejo...</h1>
  </section>
  <button class="btn" id="btn">+</button>
</div>
<div class="row" id="buttonsFinal">
      <!-- <div class="col-12">
         <div class="g-hangout" id="hangout" data-render="createhangout" style="display:none" data-widget_size="200" data-invites="[{id:'isabelsimonguerrero@gmail.com',invite_type:'EMAIL'}]"></div>

      </div> -->
      <div class="col-12">
        <router-link class="button btn-round button-puzzle" id="linkPuzzle"  style="display:none"  to="/hangout">Siguiente</router-link>

      </div>

  </div>
</div>
</template>
<script>

export default {
name:"consejos",
data(){


},
methods:{

split:function() {
  var btnFinal=document.getElementById("linkPuzzle");
  btnFinal.style.display="inherit";
   //var btnhang=document.getElementsByClassName("g-hangout");
  //btnhang.style.display="inherit";
var left = document.getElementById('left');
var right = document.getElementById('right');
var btn = document.getElementById('btn');
var scream = document.getElementById('omg');

  left.classList.add('split-left');
  right.classList.add('split-right');
  btn.classList.add('scale-down');
  scream.classList.add('scream');
},
getQuote() {
        const quotes = ['No te olvides de Sonreir',
         'Sé puntual', 'Mira a la cara a tu entrevistador', 
         'No te compares con los demás'];
        const index = Math.floor(Math.random() * quotes.length);
        console.log('index: ', index);
        this.quote = quotes[index];
        return quotes[index];
      },


},
mounted(){

var btn=document.getElementById("btn");
btn.addEventListener('click', this.split, false);

}

}
</script>
<style>
* {
  box-sizing: border-box;
}
button:hover{
  color: white;
    background: #21374b;

}
.button-puzzle{
    display: inherit;
    background: white;
    width: 10%;
    color: black;
    font-size: xx-large;
    font-weight: bolder;
    margin: inherit;
    margin-left: 45%;
    margin-top:5%;
    padding-left: 15px;
    border-radius: 17px;
    font-family: futura;

}

html {
  height: 100%;
}

body {
  height: 100%;
  min-height: 100vh;
  background: url('https://45.media.tumblr.com/1b1247477874ab4a8004382211a4991f/tumblr_nvsbbjvyMN1qkyq50o1_500.gif');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  color: #E7DACA;
  background-color: #BF4248;
}

.kitty {
  color: slate;
  text-align: center;
  display: flex;
  align-items: center;
  color: hsl(157, 65%, 80%);
  height: 100%;
}

.kitty h1 {
  text-shadow: 1px 1px 0 hsl(12, 81%, 59%), 2px 2px 0 hsl(12, 81%, 59%), 3px 3px 0 hsl(12, 81%, 59%), 4px 4px 0 hsl(12, 81%, 59%), 5px 5px 0 hsl(12, 81%, 59%), 6px 6px 0 hsl(12, 81%, 59%), 7px 7px 0 hsl(12, 81%, 59%);
  text-transform: uppercase;
  margin-top: 17%;
}

.g-hangout {
  align-items: center;
}

.text-container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
}

.half {
  width: 50%;
  height: 100%;
  background: hsl(44, 49%, 79%);
  float: left;
  overflow: hidden;
  background-color: #ADA197;
  transition: transform 1.5s ease;
  display: flex;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 14vmin;
  width: 100%;
  font-weight: 600;
  color: #E7DACA;
}

.left h1 {
  transform: translateX(50%);
}

.right h1 {
  transform: translateX(-50%);
  position: relative;
}


.split-left {

  transform: translateX(-50vw);
}

.split-right {

  transform: translateX(50vw);
}

.btn {
  position: absolute;
  display: block;
  bottom: 8vh;
  left: 50%;
  z-index: 2;
  height: 3rem;
  width: 3rem;
  background: transparent;
  border: 4px solid;
  color: #BF4248;
  font-size: 2rem;
  line-height: 1.75rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  outline: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
}

.btn:focus,
.btn:hover {
  background: #BF4248;
  color: #E7DACA;
  cursor: pointer;
}

.scale-down {
  opacity: 0;
}

@keyframes scale-up-down {
  60% {
    transform: scale(1.3)
  }
}

.scream {
  animation: scale-up-down 1s 3 alternate;
  animation-delay: 1.5s;
}

@media only screen and (max-device-width: 800px) and (orientation: landscape) {
  .btn {
    bottom: 4vh;
    height: 2.5rem;
    width: 2.5rem;
    font-weight: bold;
  }
}
</style>