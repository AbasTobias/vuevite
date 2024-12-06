export function agregarAlCarrito(carrito, producto) {
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    persistirCarrito(carrito);
}

export function eliminarDelCarrito(carrito, item) {
    const index = carrito.indexOf(item);
    if (index > -1) {
        if (item.cantidad > 1) {
            item.cantidad -= 1;
        } else {
            carrito.splice(index, 1);
        }
    }
    persistirCarrito(carrito);
}

export function vaciarCarrito(carrito) {
    carrito.length = 0;  
    persistirCarrito(carrito);
}

export function persistirCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}
