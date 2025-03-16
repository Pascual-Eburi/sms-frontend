<template>
  <div class="d-flex flex-column auth-container">
    <div class="container container-tight py-4">
      <div class="text-center mb-4">
        <AuthLogo></AuthLogo>
      </div>
      <slot></slot>
      </div>
  </div>
</template>
<script setup lang="ts">
import AuthLogo from '@components/Logos/AuthLogo.vue'
</script>
<style lang="css">
  .auth-container {
    min-height: 100vh;
    justify-content: center;
  }
</style>
