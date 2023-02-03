<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from "./stores/cart";
import { Icon } from "@iconify/vue"
import IconLogo from "./components/icons/IconLogo.vue"
import IconCart from "./components/icons/IconCart.vue"
import IconCartEmpty from "./components/icons/IconCartEmpty.vue"
import IconAbout from "./components/icons/IconAbout.vue"

import IconProducts from "./components/icons/IconProducts.vue"

const cartStore = useCartStore()
const cart = cartStore.cart
</script>

<template>
  <header class="mb-5 z-10 shadow bg-solid fixed">
    <div class="wrapper">
      <nav class="flex pr-3">
        <a class="flex items-center text-xl px-4 font-black text-primary font-serif whitespace-nowrap"
          href="https://img-store.surge.sh">
          <IconLogo class="mr-3" />
          <span>IMG<small class="font-sans font-thin">store</small>
          </span>
        </a>
        <div>
          <div class="font-bold text-xl flex items-center">
            <router-link to="/about">
              <IconAbout />
            </router-link>
            <router-link to="/">
              <IconProducts />
            </router-link>
            <router-link class="left" to="/cart" :title="'$ ' + cartStore.total">
              <IconCart v-if="cartStore.cart.length > 0" />
              <IconCartEmpty v-else />
              <span class="absolute top-1 right-2 flex h-4 w-4" v-show="cartStore.cart.length > 0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-teal-600 text-xs text-white justify-center">
                  {{ cartStore.cart.length }}
                </span>
              </span>
              <dialog open v-if="cartStore.cart.length > 0"
                class="h-100 shadow-lg items-center rounded top-14 absolute bg-solid flex flex-col gap-3 p-2">
                <div class="w-10 overflow-hidden text-xs whitespace-nowrap text-neutral-300">
                  <p class="text-center">{{ cartStore.cart.length }} <small>items</small></p>
                  <p><small>$</small> {{ cartStore.total }}</p>
                </div>
                <div class="bottom-14 w-0 h-0 rotate-45 p-1 bg-solid relative"></div>
                <div class="max-h-96 overflow-y-auto flex flex-col gap-4">
                  <img v-for="item in cartStore.cart" v-bind:key="item.id" width="40"
                    class="object-contain bg-grey-100 hover:scale-110 transition-all rounded" :src="item.image"
                    :title="item.title" />
                  <!-- <small class="text-neutral-700">{{ cartStore.cart[cart.length - 1].title }}</small> -->
                </div>
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



.router-link-active {
  border-bottom: 3px solid var(--primary);
  @apply border-b-4 border-green-500
}

.router-link-active dialog {
  display: none;
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