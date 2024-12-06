<template>
  <section>
    <div class="row">
      <!-- Gabinete -->
      <div class="col">
        <div class="card">
          <img src="/img/g.png" class="img-fluid card-img-top" alt="Nissan Altima">
          <div class="card-body">
            <h3 class="card-title">Gabinete ATX</h3>
            <p class="card-text">Gabinete espacioso con diseño moderno y ventilación eficiente.
</p>
          </div>
          <div class="mb-5 d-flex justify-content-around">
            <p class="mb-0 fs-4 fw-bold text-primary">4000$</p>
            <!-- Botón que lleva a la tienda -->
            <router-link to="/tienda" class="btn btn-primary">Ir a la tienda</router-link>
          </div>
        </div>
      </div>

      <!-- Teclado -->
      <div class="col">
        <div class="card">
          <img src="/img/teclado.png" class="img-fluid card-img-top" alt="Teclado">
          <div class="card-body">
            <h3 class="card-title">Teclado</h3>
            <p class="card-text">Teclado mecánico con teclas programables y retroiluminación RGB.

</p>
          </div>
          <div class="mb-5 d-flex justify-content-around">
            <p class="mb-0 fs-4 fw-bold text-primary">4500$</p>
           
            <router-link to="/tienda" class="btn btn-primary">Ir a la tienda</router-link>
          </div>
        </div>
      </div>

    
      <div class="col">
        <div class="card">
          <img src="/img/audio.png" class="img-fluid card-img-top" alt="Hyundai Sonata">
          <div class="card-body">
            <h3 class="card-title">Auriculares Gaming</h3>
            <p class="card-text">Auriculares de alta calidad para juegos, con sonido envolvente y micrófono ajustable.

</p>
          </div>
          <div class="mb-5 d-flex justify-content-around">
            <p class="mb-0 fs-4 fw-bold text-primary">5500$</p>
            
            <router-link to="/tienda" class="btn btn-primary">Ir a la tienda</router-link>
          </div>
        </div>
      </div>
    </div>

    
    <div class="modal fade" id="modalCompraProcesada" tabindex="-1" aria-labelledby="modalCompraProcesadatitulo" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="modalCompraProcesadatitulo">Compra procesada</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            ¡Tu compra ha sido procesada con éxito!
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
