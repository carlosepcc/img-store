import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "./product";
export interface CartItem extends Product {
  amount: number;
}

export const useCartStore = defineStore("cart", () => {

  const rawItems = ref<Product[]>([]);
  const cart = computed(() => rawItems.value);
  function addItem(item: Product) {
    rawItems.value.push(item)
  }
  function removeItemByIndex(index: number) {
    rawItems.value.splice(index, 1);
  }

  function removeItem(item: Product) {
    const indexFound = cart.value?.indexOf(item);
    if (indexFound != -1) {
      removeItemByIndex(indexFound)
    }
  }

  function calculateTotal() {
    let total = 0
    rawItems.value.forEach(item => {
      total += item.price
    });
    return total
  }
  const total = computed(() => calculateTotal())
  return { cart, total, addItem, removeItemByIndex, removeItem };
});
