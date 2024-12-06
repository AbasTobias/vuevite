<template>
  <br>
  <br>
  <br>
  
  
    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Imagen 1"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="1"
          aria-label="Imagen 2"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="2"
          aria-label="Imagen 3"
        ></button>
      </div>
  
      <div class="carousel-inner">
        <div class="carousel-item active c-item">
          <picture>
            <source srcset="/img/h1.jpg" media="(min-width: 1000px)" />
            <source srcset="/img/h1.jpg" media="(min-width: 768px)" />
            <source srcset="/img/h1.jpg" media="(min-width: 380px)" />
            <img
              src="/img/h1.jpg"
              class="d-block w-100 c-img"
              alt="Imagen 1"
            />
          </picture>
        </div>
        <div class="carousel-item c-item">
          <picture>
            <source srcset="/img/h2.jpg" media="(min-width: 1000px)" />
            <source srcset="/img/h2.jpg" media="(min-width: 800px)" />
            <source srcset="/img/h2.jpg" media="(min-width: 400px)" />
            <img
              src="/img/h2.jpg"
              class="d-block w-100 c-img"
              alt="Imagen 2"
            />
          </picture>
        </div>
        <div class="carousel-item c-item">
          <picture>
            <source srcset="/img/h3.jpeg" media="(min-width: 1000px)" />
            <source srcset="/img/h3.jpeg" media="(min-width: 768px)" />
            <source srcset="/img/h3.jpeg" media="(min-width: 380px)" />
            <img
              src="/img/h3.jpeg"
              class="d-block w-100 c-img"
              alt="Imagen 3"
            />
          </picture>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Atrás</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carrousel",
  };
  </script>
  