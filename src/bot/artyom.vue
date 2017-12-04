<template>

<div id="artyom" style: display="none">
  <div id="lottie"></div>

</div>
</template>

<script>

export default {
    name: 'artyom',
  
    data() {
     return{
    }
    },

   

    methods: {

            /***********FUNCIONALIDADES ARTYOM************** */
       speak: function(){
        if((document.getElementById("lottie")).classList.contains('active')){
          (document.getElementById("lottie")).classList.remove('active');
          this.stopArtyom();
        }else{
          (document.getElementById("lottie")).classList.add('active');
            this.startArtyom();
        }
      },



      stopArtyom: function(){
      
        artyom.fatality();
        var vue=this;
        console.log("reactivamos artyom");
        // setTimeout(vue.startArtyom,10000);
      },

      startArtyom: function(){
        console.log("startArtyom");
        artyom.initialize({
          lang: "es-ES",
          
          continuous:false,// Reconoce 1 solo comando y para de escuchar
                listen:true, // Iniciar !
                debug:true, // Muestra un informe en la consola
                speed:1 // Habla normalmente
        }).then(() => {
    console.log("Artyom has been succesfully initialized");
}).catch(() => {
    console.error("Something went wrong");
});
        this.$emit("says")
      
      },

    
        },
      mounted(){

          this.$parent.$on('speak', ()=>{
            this.speak();

          });
     


          
      }
      }
      
      </script>