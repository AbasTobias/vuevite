<template>
  <div>
    <Nav />
    <main>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Este es el contenido principal de la página de inicio.</p>
    </main>
  </div>
</template>

<script setup>
import Nav from './nav.vue';
</script>

<style scoped>
main {
  padding: 20px;
  text-align: center;
}
</style>
