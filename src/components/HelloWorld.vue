<template>
<div >
  <gif class="milon"></gif>
  <div :class="getFondo(sex)" id="mariquitas" style="display:none">

  <div class="container-fluid">

    <div class="row clothes">
      <div class="col-sm-1 mt-5" style="z-index: 1">
        <button
          type="button"
          class="btn btn-secondary"
          :class="{disabled : dressNumber == 1}"
          v-on:click="dressNumber>1 ? dressNumber-- : dressNumber=1">
          <i class="fa fa-arrow-left" aria-hidden="true"></i></button>
      </div>
      <transition name="fade">
        <div class="col-sm-10" v-if="sex=='female'">
          <img src="../assets/ROPA_chica.png"
               :class="getDressClass(dressNumber)" class="clothes-3">
        </div>
      </transition>
      <transition name="fade">
        <div class="col-sm-10"  v-if="sex=='male'">
          <img src="../assets/ROPA_chico.png"
               :class="getDressClass(dressNumber)" class="clothes-2">
        </div>
      </transition>
      <div class="col-sm-1 mt-5">
        <button
          type="button"
          class="btn btn-secondary"
          :class="{disabled : dressNumber == maxDressNumber}"
          v-on:click="dressNumber < maxDressNumber ? dressNumber++ : dressNumber= maxDressNumber">
          <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
      </div>
    </div>
    <div class="row stick-top">
      <div class="col-sm-12">
          <button type="button"
                  class="btn btn-lg btn-secondary btn-round"
                  :class="{active : sex == 'male'}"
                  v-on:click="sex='male'"
                  style="margin-right: 500px">
            <i class="fa fa-3x fa-male" aria-hidden="true"></i>
          </button>
          <button type="button"
                  class="btn btn-lg btn-secondary btn-round"
                  :class="{active : sex == 'female'}"
                  v-on:click="sex='female'"
                  style="margin-left: 200px">
            <i class="fa fa-3x fa-female" aria-hidden="true"></i>
          </button>
      </div>
    </div>
    <div class="row shoes">
      <div class="col-sm-1" style="z-index: 1">
        <button
          type="button"
          class="btn btn-secondary"
          :class="{disabled : shoesNumber == 1}"
          v-on:click="shoesNumber>1 ? shoesNumber-- : shoesNumber=1">
          <i class="fa fa-arrow-left" aria-hidden="true"></i></button>
      </div>
      <div class="col-sm-10 "  v-if="sex=='female'">
        <img src="../assets/ZAPATOS_chica.png"
             :class="getShoesClass(shoesNumber)">
      </div>
      <div class="col-sm-10"  v-if="sex=='male'">
        <img src="../assets/ZAPATOS_chico.png"
             :class="getShoesClass(shoesNumber)">
      </div>
      <div class="col-sm-1">

        <button
          type="button"
          class="btn btn-secondary"
          :class="{disabled : shoesNumber == maxDressNumber}"
          v-on:click="shoesNumber < maxDressNumber ? shoesNumber++ : shoesNumber= maxDressNumber">
          <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
      </div>
      <div id="buttonNext" class="col-sm-12">
    <router-link class="button button-puzzle" id="linkPuzzle"  style="display:inherit"  to="/PaginaFinal">Siguiente</router-link>
</div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import gif from '../components/gif.vue';
  export default {
    name: 'HelloWorld',
    components:{ gif },
    data() {
      return {
        dressNumber: 1,
        hatNumber: 1,
        shoesNumber: 1,
        maxDressNumber: 3,
        sex: 'female',
      };
    },
    mounted(){
  setTimeout(this.gifhidden, 5000);
 var el=document.getElementById("groupItems");


},
    methods: {
       gifhidden:function(){
      var gif=document.getElementById("gif");
      gif.style.display="none";
      var puzzle=document.getElementById("mariquitas");
      puzzle.style.display="inherit";
    },
      getDressClass(number) {
        return `dress-${number}`;
      },
      getShoesClass(number) {
        return `shoes-${number}`;
      },
      getFondo(sex) {
        return `fondo-${sex}`;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.milon{
     margin-left: 40%;
     width: 100%;
  margin-top: 0%;
    

} 
.button-puzzle{
  margin: 5%;
    margin-top: 7%;
    margin-left: 46%;
    display: inherit;
    
   
    color: black;
    font-size: xx-large;
    font-weight: bolder;
   
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 17px;
    font-family: futura;

}
  h1, h2 {
    font-weight: normal;
  }

  html, body{
    
  }

  .shoes{
    height: 23px;
    overflow: none;
    margin-bottom: -20%;
    padding-bottom: 1%;
    width: 100%;
    bottom: -100px;
  }

  .fondo-male {
    position: relative;
    background-image: url(/src/assets/FONDO_chico.jpg);
    background-position: left top;
    background-size: cover;
    background-position-y: 67%;
    height: 100vh;
   
    
  }
  .fondo-female {
    position: relative;
    background-image: url(/src/assets/FONDO_chica.jpg);
    background-position: left top;
    background-size: cover;
    background-position-y: 67%;
    height: 100vh;
   
    
  }

  .stick-top{
    position: absolute;
    top:40px;
    left:33%;
  }

  .btn-round{
    width:80px;
    border-radius: 50%;
    transition: transform .8s ease-out;
  }

  .btn-round:hover{
    transform: rotate(360deg);
  }

  .background-mannequin{
    position:relative;
    top:-380px;
    left:0px;
    z-index:-15;
  }

  .hats{
    overflow: hidden;
    margin-top: 10%;
  }

  .shoes-1{
    transform: translateX(15.4%);
    transition: transform 1.2s ease-out;
    z-index: -9;
    margin-bottom: -17.2%;
    margin-left: -1.6%;
  }

  .shoes-2{
    transform: translateX(-18.5%);
    transition: transform 1.2s  ease-out;
    z-index: -9;
    margin-bottom: -17%;
    padding-left: 16%;
    margin-left: -4%;

  }

  .shoes-3{
    transform: translateX(-48.55%);
    transition: transform 1.2s  ease-out;
    z-index: -9;
    margin-bottom: -17%;
    padding-left: 25%;
    margin-left: -3.8%;

  }

  .clothes{
    height: 830px;
    overflow: none;
    margin-top:0%;
    padding-top: 9.2%;
    width: 105%;
    
  }
  .clothes-2{
    height:100%;
  }

  .clothes-3{
    height:100%;
  }

  .arrow-button{
    vertical-align: middle;
  }
  .dress-1{
    transform: translateX(20%);
    transform: translateY(0%);
    transition: transform 1.2s ease-out;
    z-index: -10;
    margin-top: 6.6%;
    margin-left: 33.9%;
  }

  .dress-2{
    transform: translateX(-16.45%);
    transition: transform 1.2s  ease-out;
    margin-top: 6.5%;
    margin-left: 1.5%;
    z-index: -10;
  }

  .dress-3{
    transform: translateX(-45.43%);
    transition: transform 1.2s  ease-out;
    margin-top: 6%;
    margin-left: 0.4%;
    z-index: -10;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
</style>