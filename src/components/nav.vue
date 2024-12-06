<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <h1 class="mb-0">
        <a class="navbar-brand me-auto" href="index.html">Logo</a>
      </h1>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link mx-lg-2" to="/">Sobre Nosotros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-lg-2" to="/tienda">Tienda</router-link> 
            </li>
            <li class="nav-item">
              <!-- Ruta para carrito -->
              <router-link class="nav-link mx-lg-2" to="/carrito">Carrito</router-link> 
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link mx-lg-2 dropdown-toggle" id="autoresDesplegable" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Autores
              </a>
              <ul class="dropdown-menu" aria-labelledby="autoresDesplegable">
                <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#dylanModal">Dylan Buyanovsky</a></li>
                <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#tobiasModal">Tobias Abas</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" aria-label="Menú principal">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <!-- Modal de Dylan Buyanovsky -->
  <div class="modal fade" id="dylanModal" tabindex="-1" aria-labelledby="dylanModaltitulo" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="dylanModaltitulo">Dylan Buyanovsky</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                <div class="carta">
                  <div>
                    <picture>
                      <img src="../public/img/Dylan-autor.png" class="card-img-top" alt="Dylan Buyanovsky">
                  </picture>
                  </div>
                    <div class="card-body">
                        <p class="card-text fw-bold">Dylan Buyanovsky</p>
                        <p class="card-text">Fecha de Nacimiento: 19/04/05</p>
                        <p class="card-text">Email: <a href="mailto:DylanBuya@gmail.com"  target="_blank">DylanBuya@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Modal de Tobias Abas -->
  <div class="modal fade" id="tobiasModal" tabindex="-1" aria-labelledby="tobiasModaltitulo" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="tobiasModaltitulo">Tobias Abas</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                <div class="carta">
                  <div>
                    <picture>
                      <img src="../public/img/Tobias-autor.png" class="card-img-top" alt="Tobias Abas">
                  </picture>
                  </div>
                    <div class="card-body">
                        <p class="card-text fw-bold">Tobias Abas</p>
                        <p class="card-text">Fecha de Nacimiento: 08/08/2004</p>
                        <p class="card-text">Email: <a href="mailto:Tobias.abas@davinci.edu.ar" target="_blank">Tobias.abas@davinci.edu.ar</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

