# img-store

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Proyecto de prueba de VueJS

### Descripción:

Desarrollar una tienda simple en Vue3 con composition API
(preferentemente script setup) con las siguientes características.

1. Listado de productos

Cada producto debe tener un nombre, id, imagen y precio

2. Posibilidad de añadir a un carrito de compras

3. Acceso al carrito a ver los productos agregados mostrando cantidades y
montos totales

4. Posibilidad de eliminar elementos del carrito

### Tecnologías a emplear:

-   Hacer uso de Vue Router y Vuex

-   No usar frameworks como Vuetify, ElemenUI y similares

-   Libertad total a nivel de UI, posibilidad de usar Tailwind u otro
    framework (solo CSS) si lo creen necesario.

-   Para mostrar los productos usar objetos JSON propios o (lo siguiente
    se considera un plus pero no es requerido), utilizar una api como
    [[https://fakestoreapi.com/products]{.underline}](https://fakestoreapi.com/products)
    y hacer uso de axios, fetch o similar para obtener los datos

-   Crear un repositorio en Github para el proyecto donde se pueda
    descargar una vez realizado.

