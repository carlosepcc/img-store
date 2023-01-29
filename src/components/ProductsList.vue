<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";
import ProductCard from "./ProductCard.vue";
const productStore = useProductStore()
const cartStore = useCartStore()
//productStore.refresh()
</script>

<template>
  <div class="products-container">
    <template v-for="product in productStore.products" v-bind:key="product.id">
      <ProductCard :product="product" />
    </template>
  </div>
</template>

<style scoped>
.products-container {
  display: flex;
  justify-content: space-around;
  row-gap: 32px;
  margin-block: 32px;
  width: 100%;
  flex-wrap: wrap;
}
</style>