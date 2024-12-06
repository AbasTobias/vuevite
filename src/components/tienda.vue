<template>
  <div id="app" class="container">

    <div class="row my-4">
      <div class="col-12 col-md-6">
        <input 
          type="text" 
          v-model="busqueda" 
          class="form-control" 
          placeholder="Buscar productos..." 
          @input="filtrarProductos"
        />
      </div>
      <div class="col-12 col-md-6">
        <select v-model="categoriaSeleccionada" class="form-select" @change="filtrarProductos">
          <option value="">Todas las categorías</option>
          <option value="componentes">Componentes</option>
          <option value="accesorios">Accesorios</option>
          <option value="pantallas">Pantallas</option>
        </select>
      </div>
    </div>

  

    <!-- Lista de productos -->
    <div class="row">

      <div>
        <Card v-for="producto in productosFiltrados"  
             v-bind:nombre="producto.nombre"
             v-bind:precio="producto.precio"

        ></Card>

      </div> 

      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="producto in productosFiltrados" :key="producto.id">
        <div class="card mb-4">
          <img :src="producto.imagen" :alt="producto.nombre" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p class="card-text">{{ producto.descripcion }}</p>
            <p class="fw-bold">${{ producto.precio }}</p>
            <button class="btn btn-primary" @click="agregarAlCarrito(producto)">Agregar al carrito</button>
            <!-- Botón para abrir el modal -->
            <button 
              class="btn btn-secondary mt-2" 
              data-bs-toggle="modal" 
              :data-bs-target="'#modal-' + producto.id"
            >
              Ver detalles
            </button>
            <!-- Botón para editar producto -->
            <button 
              class="btn btn-warning mt-2" 
              @click="editarProducto(producto.id)"
            >
              Editar
            </button>
            <!-- Botón para eliminar producto -->
            <button 
              class="btn btn-danger mt-2" 
              @click="eliminarProducto(producto.id)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modales producto -->
    <div 
      v-for="producto in productosFiltrados" 
      :key="'modal-' + producto.id" 
      class="modal fade" 
      :id="'modal-' + producto.id" 
      tabindex="-1" 
      aria-labelledby="'modalLabel-' + producto.id" 
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="'modalLabel-' + producto.id">{{ producto.nombre }}</h5>
            <button 
              type="button" 
              class="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img :src="producto.imagen" :alt="producto.nombre" class="img-fluid mb-3" />
            <p><strong>Descripción:</strong> {{ producto.descripcion }}</p>
            <p><strong>Precio:</strong> ${{ producto.precio }}</p>
            <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
          </div>
          <div class="modal-footer">
            <button 
              type="button" 
              class="btn btn-secondary" 
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button 
              class="btn btn-primary" 
              @click="agregarAlCarrito(producto)" 
              data-bs-dismiss="modal"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Carrito -->
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1050;">
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h5>Carrito</h5>
        </div>
        <div class="card-body">
          <div v-if="carrito.length === 0" class="text-center">El carrito está vacío.</div>
          <div v-else>
            <div v-for="(item, index) in carrito" :key="item.id" class="d-flex justify-content-between align-items-center mb-2">
              <span>{{ item.nombre }} x {{ item.cantidad }}</span>
              <span>${{ item.precio * item.cantidad }}</span>
              <button class="btn btn-danger btn-sm" @click="eliminarDelCarrito(item)">Eliminar</button>
            </div>
            <div class="d-flex justify-content-between">
              <p>Total:</p>
              <p>${{ total }}</p>
            </div>
            <button class="btn btn-warning w-100" @click="vaciarCarrito">Vaciar carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, cargarCarrito } from '../carrito.js';
import Card from './Card.vue';
export default {
  name: "Tienda",
  data() {
    return {
      productos: [], 
      carrito: [],   
      busqueda: '',  
      categoriaSeleccionada: '', 
      mostrarFormulario: false, 
      nuevoProducto: { nombre: '', descripcion: '', precio: '', categoria: '', imagen: '' }, 
    };
  },
  computed: {
    total() {
      return this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    },
    productosFiltrados() {
      return this.productos.filter(producto => {
        const cumpleBusqueda = producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
        const cumpleCategoria = this.categoriaSeleccionada ? producto.categoria === this.categoriaSeleccionada : true;
        return cumpleBusqueda && cumpleCategoria;
      });
    }
  },
  methods: {
    
    agregarAlCarrito(producto) {
      agregarAlCarrito(this.carrito, producto);
    },
    eliminarDelCarrito(item) {
      eliminarDelCarrito(this.carrito, item);
    },
    vaciarCarrito() {
      vaciarCarrito(this.carrito);
    },
    filtrarProductos() {
      
    },
    cargarCarrito() {
      this.carrito = cargarCarrito();
    },
    obtenerProductos() {
      fetch('http://localhost/aa/vitaecomerce/api/obtenerproductos.php')
        .then(response => response.json())
        .then(data => {
          this.productos = data;
        })
        .catch(error => {
          console.error('Error al cargar los productos:', error);
          alert('No se pudieron cargar los productos. Verifica la consola para más detalles.');
        });
    },
    navegarAAgregarProducto() {
      this.$router.push({ name: 'agregarProducto' }); 
    },
    editarProducto(id) {
     
      this.$router.push({ name: 'editar', params: { id } });
    },
    eliminarProducto(id) {
      if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        fetch(`http://localhost/aa/vitaecomerce/api/eliminarproducto.php?id=${id}`, {
          method: 'DELETE',
        })
        .then(response => response.json())
        .then(() => {
          this.obtenerProductos(); 
        })
        .catch(error => {
          console.error('Error al eliminar el producto:', error);
          alert('Error al eliminar producto.');
        });
      }
    }
  },
  created() {
    this.obtenerProductos();
    this.cargarCarrito();
  }
};
</script>


