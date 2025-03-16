<script setup>
import { IconEyeOff, IconEye } from '@tabler/icons-vue';
import { computed, ref } from 'vue'
const model = defineModel({ type: String });
const showingPassword = ref(false);

const toggleShowPassword = () => {showingPassword.value = !showingPassword.value;}
const inputType = computed(() => showingPassword.value ? 'text' : 'password' );
const tooltipTittle = computed(() => `${showingPassword.value ? 'Hide' : 'Show'} Password`);
</script>

<template>
  <div class="input-group input-group-flat">
    <input :type="inputType" v-model="model" class="form-control" placeholder="Your password" autocomplete="off" />
    <span class="input-group-text">
        <a href="#" class="link-secondary" @click="toggleShowPassword" :title="tooltipTittle" data-bs-toggle="tooltip">
         <IconEye v-if="!showingPassword" />
          <IconEyeOff v-else />
        </a>
    </span>
  </div>
</template>

<style scoped>

</style>
