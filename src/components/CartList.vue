<script setup lang="ts">
import CartItem from "../components/CartItem.vue"
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore()
</script>

<template>
  <div class="products-container flex flex-wrap items-center justify-center gap-8">
    <template v-for="item in cartStore.cart" v-bind:key="item.id">
      <CartItem :item="item" />
    </template>
  </div>
</template>

<style scoped>
.products-container {
  display: flex;
  margin-block: 32px;
}
</style>