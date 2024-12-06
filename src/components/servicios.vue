<template>
    <main>
      <div class="container" id="Sobre-Nosotros">
        <div class="row align-items-center gx-3 gy-5 py-5 mt-5">
          <div class="col-12 col-md-12 col-lg-5">
            <picture>
              <img
                src="/img/reparador.jpeg"
                class="img-fluid mx-auto d-block"
                alt="Chofer manejando el auto del servicio de turismo"
              />
            </picture>
          </div>
          <div class="col-12 col-md-12 text-center text-lg-start col-lg-7">
            <h2 class="fs-1 fw-bold pb-3 text-primary">Sobre Nosotros</h2>
            <p class="about-text">
                En BuyaTecno, nos dedicamos a ofrecer la mejor experiencia en tecnología para aquellos que buscan equipos de alta calidad. Desde computadoras de última generación hasta accesorios innovadores, tenemos lo que necesitas para tu hogar, oficina o entretenimiento.
            </p>
            <p class="about-text">
              Nos enfocamos en ofrecer productos de alta calidad, un servicio eficiente y una experiencia de compra cómoda y segura.
            </p>
            <input type="checkbox" id="toggle-objetivo" class="d-none" />
            <label class="btn btn-primary px-5 py-3 mt-3 fs-5 fw-medium" id="objetivo-btn" for="toggle-objetivo">
              Nuestro objetivo
            </label>
            <div id="ver_objetivo" class="card bg-light p-3 mt-3">
              <p>
                <strong>Nuestra misión</strong> es ofrecer productos tecnológicos de alta calidad y un servicio excepcional que satisfaga las necesidades de cada cliente. Nos comprometemos a brindar una experiencia de compra <em>personalizada</em>, ofreciendo <em>comodidad</em>, <em>seguridad</em> y <em>flexibilidad</em> mientras nuestros clientes exploran lo último en innovación tecnológica. Nuestro objetivo es asegurarnos de que cada compra sea una experiencia inolvidable, brindando la confianza de adquirir productos con el respaldo de un servicio especializado.

              </p>
              <label for="toggle-objetivo" class="btn btn-link">Cerrar</label>
            </div>
          </div>
        </div>
      </div>
  
      <section>
        <div class="features-section py-5" id="Servicios">
          <div class="container">
            <h2 class="fs-1 fw-bold text-center pt-5 pb-5 text-primary">Nuestros Servicios</h2>
            <div class="row gy-5 pb-5">
              <div class="col-md-6 col-lg-4">
                <div class="card px-3 py-4 shadow-sm">
                  <ion-icon class="ionicons" name="bulb-outline"></ion-icon>
                  <h3 class="f5">Técnicos Profesionales</h3>
                  <p class="card-text">
                    Nuestros técnicos son expertos en el área y están altamente capacitados para ofrecerte el mejor servicio con las últimas tecnologías.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card px-3 py-4 shadow-sm blue-bg">
                  <ion-icon class="ionicons" name="shield-checkmark-outline"></ion-icon>
                  <h3 class="f5">Compra Segura</h3>
                  <p class="card-text">
                    Tu seguridad es nuestra prioridad. Contamos con métodos de pago seguros para que tu compra sea confiable y sin preocupaciones.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 offset-md-3 offset-0 offset-lg-0">
                <div class="card px-3 py-4 shadow-sm">
                  <ion-icon class="ionicons" name="hourglass-outline"></ion-icon>
                  <h3 class="f5">Envíos Rápidos y Seguros
                  </h3>
                  <p class="card-text">
                    Realizamos envíos a nivel nacional con opciones rápidas y seguras, para que tu compra llegue a la puerta de tu casa sin complicaciones.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section>
        <div class="container py-5 productos" id="Vehiculos">
          <h2 class="fs-1 fw-bold text-center pt-5 pb-2 text-primary">Productos Destacados</h2>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
          
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: "Servicios"
  };
  </script>
 