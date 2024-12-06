import { agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, cargarCarrito } from './carrito.js';

const app = Vue.createApp({
    data() {
        return {
            productos: [],
            carrito: [],
            busqueda: '',
            categoriaSeleccionada: ''
        };
    },
    computed: {
        total() {
            return this.carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        },
        totalItems() {
            return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
        },
        productosFiltrados() {
            return this.productos.filter(producto => {
                const cumpleBusqueda = producto.name.toLowerCase().includes(this.busqueda.toLowerCase());
                const cumpleCategoria = this.categoriaSeleccionada ? producto.category === this.categoriaSeleccionada : true;
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
        cargarCarrito() {
            this.carrito = cargarCarrito();  
        },
        filtrarPorCategoria() {
           
        }
    },
    mounted() {
        fetch('productos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la carga de productos');
                }
                return response.json();
            })
            .then(data => {
                this.productos = data.lista;
                this.cargarCarrito();
            })
            .catch(error => {
                console.error('Error al cargar los productos:', error);
                alert('No se pudieron cargar los productos. Verifica la consola para más detalles.');
            });
    }
});

app.mount('#app');
