<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    msg: string;
  }
  defineProps<Props>();
</script>
