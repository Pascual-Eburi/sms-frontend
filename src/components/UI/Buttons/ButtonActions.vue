<script setup>
import { onMounted } from 'vue'
import initDropdowns from '@/utils/UI/initDropdowns.js'

onMounted( () =>{
  initDropdowns();

})
</script>

<template>
    <div class="dropdown">
      <button
        class="btn dropdown-toggle align-text-top"
        data-bs-boundary="viewport"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Actions
      </button>
      <div class="dropdown-menu" style="">
        <a class="dropdown-item" href="#"> Action </a>
        <a class="dropdown-item" href="#"> Another action </a>
      </div>
    </div>
</template>

<style scoped>

</style>
