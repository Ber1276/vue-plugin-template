<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <div class="greetings">
      test for sass
    </div>
    {{ msg }}
  </div>
</template>

<style scoped lang="scss">
$color: red;

.greetings {
  color: $color;
}
</style>
