<script setup>
import '../assets/style.css'
import Nav from '../components/nav.vue';
import Carrousel from '../components/Carrousel.vue';
import servicios from '../components/servicios.vue';
import Compus from '../components/compus.vue'
import pie from '../components/footer.vue';
</script>

<template>
  
  <Nav />
  <Carrousel />
  <servicios /> 
  <compus />
  <pie />
  <div>

  
  </div>
</template>

<script>
  export default {
    name: 'homeview'
  }
  </script>