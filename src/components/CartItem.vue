<template>
  <div class="product">
    <button class="remove" @click="cartStore.removeItem(item)">
      <!-- Remove from the cart  -->
      &times;
    </button>
    <img :src="item.image" />
    <p />
    <h6>{{ item.title }}</h6>

  </div>
</template>

<script setup lang="ts">
import type { Product } from "../stores/product";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore()
const props = defineProps<{ item: Product }>()
</script>
<style scoped>
.product {
  display: flex;
  flex-direction: row-reverse;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
}

.product:hover {
  box-shadow: 1px 0 8px 0 #0001;
}

.product img {
  border-radius: 8px;
  width: 60px;
  transition: .3s;
  margin-left: 24px;
  margin-right: 14px;
}

.product h6 {
  align-self: flex-start;
}

.description {
  max-height: 170px;
  overflow: auto;
}

.remove {
  background: #0000;
  color: #0008;
  border: none;
  font-size: x-large;
  padding: 0;
  margin: 0;
  transition: .1s;
  border-radius: 8px 8px 8px 50%;
  width: 36px;
  height: 36px;
}

.remove:hover {
  color: #000d;
  background: #0001;
}
</style>