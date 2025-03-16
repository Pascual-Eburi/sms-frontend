<style scoped>

</style>

<template>
  <div class="text-secondary">
    Show
    <div class="mx-2 d-inline-block">
      <select class="form-select form-select-sm" v-model="props.store.perPage">
        <option :key="len" v-for="len in props.store.pageLengths">
          {{len}}
        </option>
      </select>
    </div>
    entries
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

