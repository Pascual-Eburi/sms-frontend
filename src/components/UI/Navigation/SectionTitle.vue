<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },

})
</script>

<template>
  <li class="nav-item nav-title">
    <span>{{title}}</span>
  </li>

</template>

<style scoped>
.nav-item {
  padding: 1rem 0 .4rem 1.25rem;
  font-size: .75rem;
  font-weight: 400;
}
</style>
