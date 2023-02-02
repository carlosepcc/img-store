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
  function pay() {
    rawItems.value = [];
  }
  function calculateTotal() {
    let total = 0
    rawItems.value.forEach(item => {
      total += item.price;
    });
    return Math.round((total + Number.EPSILON) * 100) / 100;

  }
  const total = computed(() => calculateTotal())
  return { pay, cart: rawItems, total, addItem, removeItemByIndex, removeItem };
});
