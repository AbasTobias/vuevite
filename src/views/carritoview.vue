<template>
  <div>
    
    <Nav />

    <h1>Bienvenido a tu Carrito de Compras</h1>
    <p>Aquí podrás ver los productos que has agregado a tu carrito.</p>
        
    
    <Carrito />
    <pie />
</div>

</template>

<script>
import Nav from '../components/nav.vue'; 
import Carrito from '../components/carrito.vue'; 
import pie from '../components/footer.vue'
import '../assets/style.css'; 

export default {
  name: 'CarritoView', 
  components: {
    Nav, 
    Carrito,
    pie,
  },
};
</script>
