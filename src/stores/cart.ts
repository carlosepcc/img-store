import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "./product";
export type CartItem = {
  id: number;
  amount: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Product[]>([]);
  function addItem(item: Product) {
    cart.value.push(item);
  }
  function removeItemByIndex(index) {
    cart.value.splice(index, 1);
  }

  function removeItem(item: Product) {
    const indexFound = cart.value?.indexOf(item);
    if (indexFound != -1) {
      removeItemByIndex(indexFound)
    }
  }


  const total = computed(() => {
    let total = 0
    cart.value.forEach(item => {
      total += item.price
    });
    return total
  })
  return { cart,total, addItem, removeItemByIndex, removeItem };
});
