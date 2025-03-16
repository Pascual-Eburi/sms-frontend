<style scoped>

</style>

<template>
  <div class="ms-auto text-secondary">
    Search:
    <div class="ms-2 d-inline-block">
      <input type="text" class="form-control form-control-sm" @input="props.store.searchRecords" v-model="props.store.searchValue" aria-label="Search invoice" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  store: {
    type: Object,
    required: true,
  }
});
</script>
