<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useCartStore } from "./stores/cart";
const { cart } = useCartStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/about">About</RouterLink>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      <HelloWorld msg="IMG Store" />

      <nav>
        <RouterLink to="/">Products</RouterLink>
        <RouterLink class="left" to="/cart">My cart
          <span class="badge">{{ cart.length }}</span>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style>
nav {
  display: flex;
  justify-content: flex-end;
  column-gap: 32px;
}

.left {
  padding-right: 24px;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #0453;
  width: 20px;
  height: 20px;
  border-radius: 25%;
  font-size: small;
  text-align: center;
  font-weight: bold;
  color: #000d
}
</style>