<script setup lang="ts">
import CartList from "../components/CartList.vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore()
</script>

<template>
  <main class="main-wrapper">
    <h3>The cart <span v-if="cartStore.cart.length === 0">is empty</span></h3>
    <h5 v-show="cartStore.cart.length > 0"><span>{{ cartStore.cart.length }} item{{
      cartStore.cart.length > 1 ? "s" : ""
    }} –
      </span>$ {{
        cartStore.total
      }}
    </h5>
    <button v-show="cartStore.cart.length > 0" class="pay-btn" @click="cartStore.pay">Pay</button>
    <CartList />
  </main>
</template>
<style scoped>
.pay-btn {
  width: 150px;
}
</style>