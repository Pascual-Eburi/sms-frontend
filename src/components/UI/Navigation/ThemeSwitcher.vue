<script setup>
import {useThemeStore} from '@/stores/theme/index.js';
import { PhMoon, PhSunDim } from '@phosphor-icons/vue'

const store = useThemeStore();
</script>

<template>
  <router-link
    to="?theme=dark"
    class="nav-link px-0 hide-theme-dark"
    title="Enable dark mode"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    @click="store.setTheme('dark')"
  >
    <PhMoon :size="24" weight="duotone" />
  </router-link>
  <router-link
    to="?theme=light"
    class="nav-link px-0 hide-theme-light"
    title="Enable light mode"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    @click="store.setTheme('light')"
  >
    <PhSunDim :size="24" weight="duotone" />
  </router-link>
</template>

<style scoped>

</style>
