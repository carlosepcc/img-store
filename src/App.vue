<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from "./stores/cart";
const cartStore = useCartStore()
const cart = cartStore.cart
</script>

<template>
  <header class="mb-5 z-10 shadow bg-solid fixed">
    <div class="wrapper">
      <nav class="flex">
        <a class="text-xl py-3 px-4 font-black text-primary font-serif whitespace-nowrap"
          href="https://img-store.surge.sh">
          IMG <small class="font-sans font-thin">store</small></a>
        <div>
          <div class="font-bold flex">
            <router-link class-active="bg-green-900" to="/about">About</router-link>
            <router-link to="/">Products</router-link>
            <router-link class="left" :class="cart.length > 0 ? 'animate-pulse' : ''" to="/cart">Cart
              <span class="absolute top-1 right-2 flex h-4 w-4" v-show="cartStore.cart.length > 0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-teal-600 text-xs text-white justify-center">
                  {{ cartStore.cart.length }}
                </span>
              </span>
              <dialog open v-if="cartStore.cart.length > 0"
                class="shadow-lg rounded flex align-middle p-3 px-5 overflow-hidden top-16 right-2 absolute">
                <img width="50" class="object-contain" :src="cartStore.cart[cart.length - 1].image" />
                <!-- <small class="text-neutral-700">{{ cartStore.cart[cart.length - 1].title }}</small> -->
              </dialog>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <main class="p-9 pt-20 h-screen overflow-auto">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main>
</template>
<style>
header {
  width: 100%;
  top: 0;
  backdrop-filter: blur(8px);
}

nav {
  display: flex;
  justify-content: space-between;
  column-gap: 32px;

}

nav>div {
  display: flex;
  column-gap: 32px;
}

nav>div>div>* {
  @apply p-3
}

.left {
  padding-right: 24px;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #0a6;
  width: 20px;
  height: 20px;
  border-radius: 45%;
  font-size: small;
  text-align: center;
  font-weight: bold;
  color: #fffd
}
</style>