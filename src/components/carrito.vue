<template>
    <div class="container mt-5">
      <h2>Productos en tu carrito</h2>
      <div v-if="productosCarrito.length === 0">
        <p>No tienes productos en tu carrito.</p>
      </div>
      <div v-else>
        <div v-for="(producto, index) in productosCarrito" :key="index" class="row border-bottom mb-3 pb-3">
          <div class="col-md-3">
            <img :src="producto.imagen" :alt="producto.nombre" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <p class="h5">{{ producto.nombre }}</p>
            <p>Precio: ${{ producto.precio }}</p>
            <p>Cantidad: {{ producto.cantidad }}</p>
          </div>
          <div class="col-md-3 d-flex align-items-center">
            <button class="btn btn-danger" @click="eliminarProducto(index)">Eliminar</button>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12 text-right">
            <h3>Total: ${{ total }}</h3>
          </div>
        </div>
  
        <!-- Botón para finalizar compra -->
        <div class="row mt-4">
          <div class="col-md-12 text-center">
            <button class="btn btn-success" @click="finalizarCompra">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Toast de éxito de compra -->
    <div v-if="mostrarToast" class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="5000">
      <div class="d-flex">
        <div class="toast-body">
          ¡Felicidades! Tu compra ha sido realizada con éxito.
        </div>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productosCarrito: [],  // Productos en el carrito
        mostrarToast: false  // Control para mostrar el toast de éxito
      };
    },
    computed: {
      total() {
        return this.productosCarrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
      },
    },
    methods: {
      eliminarProducto(index) {
        this.productosCarrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(this.productosCarrito));
      },
      finalizarCompra() {
        // Vaciar el carrito
        this.productosCarrito = [];
        localStorage.setItem('carrito', JSON.stringify(this.productosCarrito));
        
        // Mostrar el toast de éxito
        this.mostrarToast = true;
        
        // Mostrar el toast y luego cerrarlo después de 5 segundos
        this.$nextTick(() => {
          const toastElement = document.querySelector('.toast');
          const toast = new bootstrap.Toast(toastElement);
          toast.show();
          
          // Ocultar el toast después de 5 segundos
          setTimeout(() => {
            this.mostrarToast = false;
          }, 5000);
        });
      }
    },
    mounted() {
      this.productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    }
  };
  </script>
  
  <style scoped>
  /* Estilo para el toast */
  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1050;
  }
  </style>
  