<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <RouterLink to="/legal"> Mentions Légales </RouterLink>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: #eee;
  height: 3em;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
