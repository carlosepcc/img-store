<template>
  <div class="product bg-solid flex rounded shadow">
    <div class="flex items-center">
      <img class="w-16 mr-8 p-1 px-2 bg-gray-100 rounded-l" :src="item.image" :alt="item.category + ' picture'" />
      <!-- <span class="font-light">{{ item.title }}</span> -->
      <p class="font-bold text-xl">$ {{ item.price }}</p>
    </div>
    <div>
      <button class="bg-transparent rounded-bl-3xl hover:bg-[#fff1] hover:shadow-none" @click="cartStore.removeItem(item)">
        &times;
      </button>

    </div>
  </div>
</template>
    
<script setup lang="ts">
import type { Product } from "../stores/product";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore()
const props = defineProps<{ item: Product }>()
</script>
