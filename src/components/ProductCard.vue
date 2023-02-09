<template>
  <div :title="product.description" class="product w-80 flex flex-col bg-solid ">
    <div class="flex flex-col mb-4">
      <img :src="product.image" class="object-contain p-2 bg-white opacity-80 hover:opacity-100" />
      <small class="font-thin text-end">{{ product.category }}</small>
      <div class="my-3 flex gap-4 items-center">
        <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{{ product.rating.rate }}</p>
        <div class="flex">
          <svg v-for="star in Math.round(product.rating.rate)" v-bind:key="star" aria-hidden="true"
            class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Rating star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
        </div>
        <p class="text-sm font-medium">{{ product.rating.count }}
          reviews</p>

      </div>

      <details class="w-full my-4">
        <summary title="Click to see the description" class="w-full text-sm">{{ product.title }}</summary>
        <p class="h-30 overflow-y-auto text-justify font-light">{{ product.description }}</p>
      </details>
    </div>
    <button class="btn-primary w-full flex justify-between text-[#fffe]" @click="cartStore.addItem(product)"
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