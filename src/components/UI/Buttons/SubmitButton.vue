<script setup>
defineProps({
  className: {
    type: String,
    required: false,
    default: 'btn-primary',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>

<template>
  <button :class="['btn', className]" type="submit" :disabled="disabled">
    <span><slot name="loading"></slot></span>
    <span><slot name="default"></slot></span>
  </button>
</template>

<style scoped>

</style>
