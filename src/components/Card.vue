<script>
export default {
    name:'Product',
    props: {
        nombre: String,
        precion: Number
    }
}
</script>

<template>

    <div class="card">
        <h4> {nombre}</h4>
    </div>
</template>