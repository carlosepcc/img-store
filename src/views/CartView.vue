<script setup lang="ts">
import CartList from "../components/CartList.vue";
import { useCartStore } from "@/stores/cart";
const { cart, total } = useCartStore()
</script>

<template>
  <main class="main-wrapper">
    <h3>My <span v-if="cart.length === 0">empty</span> cart</h3>
    <h5><span>{{ cart.length }} artículos por </span>$ {{ total }}</h5>
    <CartList />
  </main>
</template>
<style scoped>

</style>