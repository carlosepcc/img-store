<template>
  <div :title="product.description" class="product w-80 flex flex-col bg-solid">
    <div class="flex flex-col mb-4">
      <img :src="product.image" class="object-contain p-2 bg-white opacity-80 hover:opacity-100" />
      <details class="w-full my-4">
        <summary title="Click to see description" class="w-full text-lg">{{ product.title }}</summary>
        <p class="h-30 overflow-y-auto text-justify font-light">{{ product.description }}</p>
      </details>
    </div>
    <button class="w-full flex justify-between" @click="cartStore.addItem(product)"
      :title="'Add to cart one ' + product.title">
      <span class="font-bold"><small class="text-[#fffa]">$</small> {{ product.price }}</span>
      <IconAddToCart class="text-2xl" />
      <!-- <p><small>Add to cart &nbsp;</small></p> -->
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "../stores/product";
import { useCartStore } from "@/stores/cart";
import IconAddToCart from "./icons/IconAddToCart.vue";

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
  @apply shadow-xl
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