<template>
  <div id="app">
<!-- <div id="coach"> -->
  <!-- <coach></coach> -->
<!-- </div> -->
    <input type="button" value="Mostrar" v-on:click="cambiarPagina(1)">
    <div id="Preferencia" v-if="paginas==1">
              <preferencia></preferencia>
              <section class="container">
                <article class="centrado">
                  <a class="botonAura col-md-2 GenerosBottom" href="#" v-on:click="cambiarPagina(2)">Construyamos tu CV</a> 
                  <a class="botonAura col-md-2 GenerosBottom" href="#" v-on:click="cambiarPagina(3)">Vistámonos para la entrevista</a> 
                  <a class="botonAura col-md-4 GenerosBottom" href="#" v-on:click="cambiarPagina(7)">¿Quieres un consejo?</a>
                </article>
              </section>    
            </div>

     <div id="puzzle" v-if="paginas==2">
       <puzzle></puzzle></div>
  </div>

  
</template>

<script>

export default {
  name: 'app',

  data () {
    return {

    }
  }
}
</script>

<style>
html, body {
  background-image: -webkit-gradient(
	linear,
	right top,
	left bottom,
	color-stop(0, #18F2F2),
	color-stop(1, #33FF92)
);
background-image: -o-linear-gradient(left bottom, #18F2F2 0%, #33FF92 100%);
background-image: -moz-linear-gradient(left bottom, #18F2F2 0%, #33FF92 100%);
background-image: -webkit-linear-gradient(left bottom, #18F2F2 0%, #33FF92 100%);
background-image: -ms-linear-gradient(left bottom, #18F2F2 0%, #33FF92 100%);
background-image: linear-gradient(to left bottom, #18F2F2 0%, #33FF92 100%);
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

</style>
