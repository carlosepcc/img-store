<template>
  <div v-for="i in amount" v-bind:key="i" class="bg-solid shadow rounded-md p-4 h-96 max-w-sm w-full mx-auto">
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
<script setup lang="ts">
const props = defineProps({ amount: { type: Number, default: 10 } });
</script>