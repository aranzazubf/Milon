<template>
    <div id="coachSay" class="row">
  
<div class="col-md-12">
        <outputAura></outputAura>

        <!-- <artyom></artyom>    -->
    </div>
      </div>
    
</template>
<script>

  import artyom from '../bot/artyom.vue';
  import outputAura from '../bot/outputAura.vue';

  export default {
    name: 'coachSay',
    components: {

      'artyom': artyom,
   
      'outputAura':outputAura
    }}

</script>
<style>
.campos-aura{
	margin-top: -8%;
    
}
.comentario-aura{
display: none;
      display: none;
    background: white;
    margin-top: -18%;
    margin-left: -8%;
    font-family: Roboto;
    font-size: larger;
    text-align: -webkit-auto;
    padding-left: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
    line-height: 100%;
}

</style>