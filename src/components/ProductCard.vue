<template>
  <div class="product">
    <div>
      <img :src="product.image" />
      <p />
      <h5>{{ product.title }}</h5>
      <p class="description">{{ product.description }}</p>
    </div>
    <button class="price" @click="cartStore.addItem(product)"><small>Add to the cart &nbsp; $</small> {{
      product.price
    }}</button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "../stores/product";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore()
const props = defineProps<{ product: Product }>()
</script>
<style scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff1;
  padding: 16px;
  border-radius: 8px;
  max-width: 350px;
  box-shadow: 0 0 8px 0 #0001;
  transition: .3s
}

.product:hover {
  transform: scale(1.02);
  box-shadow: 1px 0 12px 0 #0001;
}

.product img {
  border-radius: 8px;
  height: 130px;
  transition: .3s;
  overflow: hidden;
}

.product img:hover {
  height: 220px;
  object-fit:  cover;
}

.description {
  height: 120px;
  overflow: auto;
}

.price {
  font-weight: bold;
  color: #fffd;
  align-self: flex-end;
}

.price small {
  color: #fffb;
}
</style>