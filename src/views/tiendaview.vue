<template>
    <div>
      <Nav />
      
      <h1>Bienvenido a la tienda</h1>
      <p>Aquí podrás ver todos nuestros productos.</p>
      
      <Tienda />
    </div>
<pie />
</template>


  
  <script>
  
  import Nav from '../components/nav.vue';
  import Tienda from '../components/Tienda.vue'; 
  import '../assets/style.css'; 
  import pie from  '../components/footer.vue';
  export default {
    name: 'Tiendaview',
    components: {
      Nav,
      Tienda,
      pie,
    },
  };
  </script>
  