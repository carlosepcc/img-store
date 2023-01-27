<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useCartStore } from "./stores/cart";
const cartStore = useCartStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div style="display:flex;align-items:baseline;column-gap:16px">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
          <h1>IMG Store</h1>
        </div>
        <div>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/">Products</RouterLink>
          <RouterLink class="left" to="/cart">My cart
            <span class="badge" v-show="cartStore.cart.length > 0">{{ cartStore.cart.length }}</span>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style>
nav {
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
  height: 28px;
  margin-bottom: 50px;

}

nav>div {
  display: flex;
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