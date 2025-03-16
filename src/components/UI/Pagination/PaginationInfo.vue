<style scoped>

</style>

<template>
  <p class="m-0 text-secondary">
    Showing <span>{{ start }}</span> to <span>{{ end }}</span> of <span>{{ props.store.totalRecords }}</span> entries
  </p>

</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  store: {
    type: Object,
    required: true,
  }
})


const start = computed(() => (props.store.page - 1) * props.store.perPage + 1);
const end = computed(() => Math.min(props.store.page * props.store.perPage, props.store.totalRecords));
</script>

