<template>
  <div class="min-h-screen flex  items-center justify-center flex-col">
    <div class="text-3xl font-bold text-center">Hello Vite + Vue 3 + UnoCSS + Vite Plugin PWA + Pages + Layouts</div>
    <div class="i-mdi-home text-3xl text-blue-400"></div>
    <div class="i-mdi-anchor text-3xl text-orange-400"></div>
    <ReloadPrompt></ReloadPrompt>
  </div>

</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register';

onMounted(() => {

  registerSW({
    immediate: true,
    onNeedRefresh() {
      console.log('onNeedRefresh')
    },
    onRegisteredSW(url, registration) {
      console.log('SW registered url:', url);
      setInterval(() => {
        registration?.update()
      }, 360000)
    }
  })

})
</script>



<route lang="yaml">
meta:
  layout: default
</route>
