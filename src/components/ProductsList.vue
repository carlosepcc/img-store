<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";
import ProductCard from "./ProductCard.vue";
const productStore = useProductStore();
productStore.refresh();
</script>

<template>
  <div class="py-4 flex flex-col items-center">
    <div v-if="productStore.fetching" class="flex flex-col items-center mb-8 animate-pulse">
      <div
        class="mr-4 my-2 border-l-green-900 border-r-green-600 bg-[#fff2] text-green-700 border-r-2 rounded-full w-6 h-6 animate-spin">
        O
      </div>
      <div class="text-green-800">Updating products list..</div>

    </div>


    <div class="flex gap-10 justify-center flex-wrap">
      <!-- SKELETON -->
      <template v-if="!productStore.products">
        <div v-for="i in 10" v-bind:key="i" class="bg-white shadow rounded-md p-4 h-96 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex flex-col items-center">
            <div class="rounded bg-slate-200 h-32 w-28"></div>
            <div class="w-56 space-y-6 py-8">
              <div class="h-3 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>

                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                </div>
              </div>
            </div>
            <div class="h-9 w-full bg-slate-200 rounded"></div>
          </div>
        </div>
      </template>
      <template v-for="product in productStore.products" v-bind:key="product.id">
        <ProductCard :product="product" />
      </template>
    </div>

  </div>
</template>

<style scoped>
.products-container {
  display: flex;
  justify-content: space-around;
  row-gap: 32px;
  margin-block: 32px;
  width: 100%;
  flex-wrap: wrap;
}
</style>