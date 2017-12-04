<template>
    <div id="coach" class="row">
      <div class="col-md-4">
</div>
<div class="col-md-8">
        <outputAura></outputAura>
        <inputUser></inputUser>
        <artyom v-on:says="says"> </artyom>   
    </div>
      <router-link to="/puzzle">Vamos a hacer tu CV</router-link>
 <router-link to="/gif">Dame un consejo</router-link>

    </div>
    
</template>

<script>
  // import Lottie from './lottie.vue';
  import artyom from './artyom.vue';
  import outputAura from './outputAura.vue';
  import inputUser from './inputUser.vue';
  export default {
    name: 'coach',
    components: {
      'artyom': artyom,
      'inputUser':inputUser,
      'outputAura':outputAura
    },
   methods:{
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
html, body {
  background: white;
  /* background-image: -webkit-gradient(
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
  font-family: Telefonica-Regular, Helvetica, Arial, sans-serif; } */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

 }

.lottie{
    margin: 0px;
      width: 400px;
  
    overflow: hidden;
   
    
}
#coach {
background: #07a39f;
    
}

</style>