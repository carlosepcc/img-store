<script setup lang="ts">
import CartList from "../components/CartList.vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore()
</script>

<template>
  <div class="main-wrapper">
    <h3 class="mb-2">The cart <span v-if="cartStore.cart.length === 0">is empty</span>
    </h3>
    <small v-if="cartStore.cart.length > 0">{{
      cartStore.cart.length
    }} {{ cartStore.cart.length < 2 ? ' item' : ' items' }}</small>
        <button v-show="cartStore.cart.length > 0" class="w-full mt-3" @click="cartStore.pay">
          Pay <b class="ml-2">$ {{ cartStore.total }}</b>
        </button>
        <CartList />
  </div>
</template>
<style scoped>
.pay-btn {
  width: 150px;
}
</style>