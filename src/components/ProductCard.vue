<template>
  <div class="product flex flex-col bg-solid">
    <div class="flex flex-col mb-4">
      <img :src="product.image" class="object-contain p-2 bg-white opacity-80 hover:opacity-100" />
      <h5 class="text-lg my-4">{{ product.title }}</h5>
      <p class="description text-justify font-light">{{ product.description }}</p>
    </div>
    <button class="price w-full" @click="cartStore.addItem(product)">
      <small>$</small> {{ product.price }}
      <!-- <p><small>Add to cart &nbsp;</small></p> -->
    </button>
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
  padding: 16px;
  border-radius: 8px;
  max-width: 350px;
  box-shadow: 0 0 8px 0 #0001;
  transition: .3s
}

.product:hover {
  transform: scale(1.01);
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
  opacity: none;
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