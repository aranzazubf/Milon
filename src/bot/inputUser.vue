<template>
	<div class="col campos-aura" id="inputuser">
		<input id="userMsg" ref="userMessage" 
			v-on:keyup.enter="submit" class="comentario-user col-12 texto-usuario"
		 autofocus="autofocus">
		<directLine></directLine>
	</div>

</template>

<script type="text/javascript">

import directLine from './directLine.vue';
	export default {
		name: 'inputuser',
		components:{ "directLine":directLine},
	    methods: {
	        submit: function(){
				this.$emit("mandarMensaje",this.$refs.userMessage.value);
				//mandar_mensaje(this.$refs.userMessage.value);
			},
			// recBot:function(mensaje){
			// 	if(mensaje=="Ya estás listo, ¡Vamos a configurar tu CV!"){
					
			// 		console.log("***************final BOT");
			// 		this.$emit("final")};
			// },
			says: function(){
        
      var vue=this;
        artyom.redirectRecognizedTextOutput(function(text,isFinal){
          console.log("REDIRECT");
          var texto = document.getElementById("userMsg");
          if(texto==null){
            console.log("aqui no mandamos nada");
            return;
		  }
		  console.log("lalalalalalalal")
          console.log(texto);
          if(isFinal){
            texto.value=text;
            console.log("AVER", text);
          //  mandar_mensaje(text);
            vue.$emit("mandarMensaje",text); ///////////////////////No sabía cómo llamar a la función mandar mensaje del directLine. Alguno de vosotros sí que había hecho esto...

          }else{

          }
        });
      },
			
		},
		mounted(){
		//	this.$parent.$on("recBot",this.recBot);
	this.$parent.$on("conectaDirect", this.says);



	

		}
	}



</script>


