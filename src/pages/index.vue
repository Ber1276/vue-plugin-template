<template>
  <div class="min-h-screen p-8 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Theme Selector</h1>

      <select v-model="currentTheme" @change="handleThemeChange"
        class="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <div class="font-bold px-4 py-2">current mode: {{ isDark }}</div>
      <div class="mt-8 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
        <p class="text-gray-800 dark:text-gray-200">
          Current theme: {{ currentTheme }}
        </p>
      </div>
      <HelloWorld msg="test for components"></HelloWorld>
      <div class="i-mdi-home text-3xl"></div>
      <div class="i-mdi-anchor text-orange-300"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentTheme = ref<'light' | 'dark' | 'system'>('system')
const isDark = usePreferredDark()

const handleThemeChange = () => {
  if (currentTheme.value === 'system') {
    // Check system preference
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } else if (currentTheme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Save preference to localStorage
  localStorage.setItem('theme', currentTheme.value)
}

// Watch for system theme changes
// const watchSystemTheme = () => {

// const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
// mediaQuery.addEventListener('change', (e) => {
//   if (currentTheme.value === 'system') {
//     if (e.matches) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }
// })
// }

onMounted(() => {
  // Load saved preference
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
  if (savedTheme) {
    currentTheme.value = savedTheme
    handleThemeChange()
  }
})
watch(isDark, (newV) => {
  if (currentTheme.value === 'system') {
    if (newV) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})
</script>
