<template>
  <div class="about">
    <div>
      <h2>Proyecto de prueba de VueJS</h2>
      <h3>Descripción:</h3>
      <p>Desarrollar una tienda simple en Vue3 con composition API
        (preferentemente script setup) con las siguientes características.</p>
      <ol>
        <li>Listado de productos
          <p>Cada producto debe tener un nombre, id, imagen y precio</p>
        </li>
        <li>
          <p>Posibilidad de añadir a un carrito de compras</p>
        </li>
        <li>
          <p>Acceso al carrito a ver los productos agregados mostrando
            cantidades y montos totales</p>
        </li>
        <li>
          <p>Posibilidad de eliminar elementos del carrito</p>
        </li>
      </ol>
      <h3>Tecnologías a emplear:</h3>
      <ul>
        <li>
          <p>Hacer uso de Vue Router y Vuex</p>
        </li>
        <li>
          <p>No usar frameworks como Vuetify, ElemenUI y similares</p>
        </li>
        <li>
          <p>Libertad total a nivel de UI, posibilidad de usar Tailwind u otro
            framework (solo CSS) si lo creen necesario.</p>
        </li>
        <li>
          <p>Para mostrar los productos usar objetos JSON propios o (lo
            siguiente se considera un plus pero no es requerido), utilizar una api
            como <a href="https://fakestoreapi.com/products"><u>https://fakestoreapi.com/products</u></a>
            y hacer uso de axios, fetch o similar para obtener los datos</p>
        </li>
        <li>
          <p>Crear un repositorio en Github para el proyecto donde se pueda
            descargar una vez realizado.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
}
</style>
